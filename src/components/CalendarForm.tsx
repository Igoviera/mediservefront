"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  dob: z.date({
    required_error: "Data obrigatória.",
  }),
});

export function CalendarForm({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          {selectedDate ? (
            format(selectedDate, "PPP", {locale: ptBR})
          ) : (
            <span>Escolha uma data</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
