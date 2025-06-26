// components/SpecialtyActions.tsx

import { useState } from "react";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Specialty } from "@/components/colmuns/specialty-comns"; // ajuste o caminho se precisar
import specialtyService from "@/services/specialtyService";

type Props = {
  specialty: Specialty;
};

export function SpecialtyActions({ specialty }: Props) {
  const [open, setOpen] = useState(false);
  const [editedName, setEditedName] = useState(specialty.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await specialtyService.updateSpecialty(specialty.id!, {
        name: editedName,
      });
      console.log("Especialidade atualizada com sucesso!");
      setOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar especialidade:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil size={20}/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Especialidade</DialogTitle>
          <DialogDescription>
            Altere os dados da especialidade abaixo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-900">
            Salvar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
