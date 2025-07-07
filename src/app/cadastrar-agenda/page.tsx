'use client'

import { z } from "zod"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Esquema de validação
const formSchema = z.object({
  dayOfWeek: z.enum(["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"]),
  startTime: z.string().min(1, "Informe o horário inicial"),
  endTime: z.string().min(1, "Informe o horário final"),
  durationMinutes: z.coerce.number().min(5, "Mínimo 5 minutos"),
})

type FormValues = z.infer<typeof formSchema>

export default function NovaAgendaForm() {
  const { id } = useParams()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dayOfWeek: "SEGUNDA",
      startTime: "08:00",
      endTime: "12:00",
      durationMinutes: 30,
    },
  })

  const onSubmit = async (data: FormValues) => {
    const response = await fetch("/api/agenda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data,
        doctorId: Number(id),
      })
    })

    if (response.ok) {
      alert("Agenda cadastrada com sucesso")
      router.push(`/medicos/${id}/agenda`)
    } else {
      alert("Erro ao cadastrar agenda")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6 mt-10">
      <div>
        <Label>Dia da Semana</Label>
        <Select
          onValueChange={(value:any) => setValue("dayOfWeek", value as any)}
          defaultValue="SEGUNDA"
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o dia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SEGUNDA">Segunda-feira</SelectItem>
            <SelectItem value="TERÇA">Terça-feira</SelectItem>
            <SelectItem value="QUARTA">Quarta-feira</SelectItem>
            <SelectItem value="QUINTA">Quinta-feira</SelectItem>
            <SelectItem value="SEXTA">Sexta-feira</SelectItem>
            <SelectItem value="SÁBADO">Sábado</SelectItem>
          </SelectContent>
        </Select>
        {errors.dayOfWeek && <p className="text-sm text-red-500">{errors.dayOfWeek.message}</p>}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Label>Hora de Início</Label>
          <Input type="time" {...register("startTime")} />
          {errors.startTime && <p className="text-sm text-red-500">{errors.startTime.message}</p>}
        </div>

        <div className="flex-1">
          <Label>Hora de Fim</Label>
          <Input type="time" {...register("endTime")} />
          {errors.endTime && <p className="text-sm text-red-500">{errors.endTime.message}</p>}
        </div>
      </div>

      <div>
        <Label>Duração da Consulta (min)</Label>
        <Input type="number" {...register("durationMinutes", { valueAsNumber: true })} />
        {errors.durationMinutes && (
          <p className="text-sm text-red-500">{errors.durationMinutes.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Cadastrar Agenda
      </Button>
    </form>
  )
}
