"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Clock, Calendar, User, Timer, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Diary,
  diaryDoctorColumns,
} from "@/components/colmuns/diaryDoctor-colmns";
import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import diaryDoctorService from "@/services/diaryDoctorService";
import { Loading } from "@/components/ui/loading";
import AlertMessage from "@/components/AlertMessage";
import doctorService from "@/services/doctorService";
import { Doctor } from "@/components/colmuns/doctor-colmns";
import { Label } from "@/components/ui/label";

const daysOfWeek = [
  { value: "SEGUNDA", label: "Segunda-feira" },
  { value: "TERCA", label: "Terça-feira" },
  { value: "QUARTA", label: "Quarta-feira" },
  { value: "QUINTA", label: "Quinta-feira" },
  { value: "SEXTA", label: "Sexta-feira" },
  { value: "SABADO", label: "Sábado" },
];

const durationOptions = [
  { value: 15, label: "15 minutos" },
  { value: 20, label: "20 minutos" },
  { value: 30, label: "30 minutos" },
  { value: 45, label: "45 minutos" },
  { value: 60, label: "1 hora" },
];

const formSchema = z
  .object({
    dayOfWeek: z.enum(
      ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO", "DOMINGO"],
      {
        required_error: "Selecione um dia da semana",
      }
    ),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Formato de hora inválido (HH:MM)",
    }),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Formato de hora inválido (HH:MM)",
    }),
    durationMinutes: z
      .number()
      .min(5, {
        message: "Duração mínima de 5 minutos",
      })
      .max(240, {
        message: "Duração máxima de 4 horas",
      }),
    doctorId: z.number().min(1, {
      message: "ID do médico é obrigatório",
    }),
  })
  .refine(
    (data) => {
      const start = new Date(`2000-01-01T${data.startTime}:00`);
      const end = new Date(`2000-01-01T${data.endTime}:00`);
      return start < end;
    },
    {
      message: "Horário de início deve ser anterior ao horário de fim",
      path: ["endTime"],
    }
  );

type FormValues = z.infer<typeof formSchema>;

export default function DoctorScheduleForm() {
  const [diarys, setDiary] = useState<Diary[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dayOfWeek: undefined,
      startTime: "",
      endTime: "",
      durationMinutes: 30,
      doctorId: 1,
    },
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await doctorService.getAllDoctors();
        setDoctors(res);
      } catch (error: any) {
        console.log("Erro ao buscar médico", error);
      }
    };

    fetchDoctors();
  }, []);

  const fetchDiary = async (doctorId: string) => {
    try {
      const diarys = await diaryDoctorService.buscarAgendaPorMedico(doctorId);

      const formatteDiarys = diarys.map((diary) => ({
        ...diary,
        startTime: diary.startTime.slice(0, 5),
        endTime: diary.endTime.slice(0, 5),
      }));

      setDiary(formatteDiarys);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  useEffect(() => {
    if (selectedDoctorId) {
      fetchDiary(selectedDoctorId);
    }
  }, [selectedDoctorId]);

  const onSubmit = async (values: FormValues) => {
    try {
      await diaryDoctorService.createDiaryDoctor(values);
      setSuccessMessage("Agenda cadastrada com sucesso!");
      setTimeout(() => setSuccessMessage(""), 5000);
      console.log("Dados da agenda:", values);
    } catch (error: any) {
      console.log("Dados da agenda:", values);
      const apiError =
        error?.response?.data?.errors?.[0] || "Erro ao cadastrar agenda.";
      setErrorMessage(apiError);
      setTimeout(() => setErrorMessage(""), 5000);
      console.error(error);
    }
  };

  return (
    <div className="max-w-full mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
            <Calendar className="h-6 w-6" />
            Cadastrar Agenda do Médico
          </CardTitle>
          <CardDescription>
            Configure os horários de atendimento do médico para cada dia da
            semana
          </CardDescription>
        </CardHeader>
        <CardContent>
          {successMessage && (
            <AlertMessage message={successMessage} type="success" />
          )}
          {errorMessage && <AlertMessage message={errorMessage} type="error" />}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <FormField
                  control={form.control}
                  name="dayOfWeek"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Dia da Semana
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o dia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {daysOfWeek.map((day) => (
                            <SelectItem key={day.value} value={day.value}>
                              {day.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="doctorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Médico
                      </FormLabel>
                      <Select
                        onValueChange={(value) => setSelectedDoctorId(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um médico" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((medico) => (
                            <SelectItem
                              key={medico.id}
                              value={String(medico.id)}
                            >
                              {medico.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Horário de Início
                      </FormLabel>
                      <FormControl>
                        <Input type="time" {...field} className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Horário de Fim
                      </FormLabel>
                      <FormControl>
                        <Input type="time" {...field} className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="durationMinutes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        Duração da Consulta
                      </FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        defaultValue={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a duração" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {durationOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value.toString()}
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex  gap-4 pt-4 w-3/5 ">
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
                  Cadastrar Agenda
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  className=""
                >
                  Limpar Formulário
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Preview dos dados */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
            <CalendarCheck className="h-6 w-6" />
            Agenda semanal do Médico
          </CardTitle>
          <CardDescription>
            Visualize e gerencie os horários de atendimento do médico por dia da
            semana.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Selecione o Médico</Label>
          <Select onValueChange={(value) => setSelectedDoctorId(value)}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Selecione um médico" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((medico) => (
                <SelectItem key={medico.id} value={String(medico.id)}>
                  {medico.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>

        <CardContent>
          {loading ? (
            <Loading />
          ) : (
            <DataTable columns={diaryDoctorColumns} data={diarys} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
