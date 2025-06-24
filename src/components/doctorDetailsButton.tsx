import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, MapPin, User, HeartPulse } from "lucide-react";

export function DoctorDetailsButton({ doctor }:any) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-700">
          Detalhes
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-blue-700 mt-5">
            {doctor.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Perfil completo do médico
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Foto do médico */}
            
          {/* Informações principais */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <Info label="CRM" value={doctor.crm} />
            <Info label="CPF" value={doctor.cpf} />
            <Info label="Telefone" value={doctor.phone} icon={<Phone className="w-4 h-4" />} />
            <Info label="E-mail" value={doctor.user?.email} icon={<Mail className="w-4 h-4" />} />
            <Info label="Valor da Consulta" value={`R$ ${doctor.queryValue}`} />
            <Info label="Status" value={doctor.status} badge />
            <Info label="Especialidades" value={doctor.specialties?.join(", ")} icon={<HeartPulse className="w-4 h-4" />} />
          </div>
        </div>

        {/* Endereço */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Endereço
          </h4>
          <p className="text-muted-foreground mt-1 leading-relaxed">
            {doctor.address?.logradouro}, nº {doctor.address?.locationNumber}<br />
            {doctor.address?.neighborhood}, {doctor.address?.city} - {doctor.address?.uf}<br />
            CEP: {doctor.address?.cep}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Componente auxiliar para formatação
function Info({ label, value, icon, badge = false }:any) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        {icon} {label}
      </span>
      {badge ? (
        <span className="text-xs font-medium px-2 py-1 rounded bg-green-300 text-green-700 w-fit">
          {value}
        </span>
      ) : (
        <span className="font-medium text-gray-900">{value || "—"}</span>
      )}
    </div>
  );
}
