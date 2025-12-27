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
import { Mail, Phone, MapPin, User, HeartPulse, Eye } from "lucide-react";

type PersonType = "doctor" | "patient" | "user";

interface PersonDetailsButtonProps {
  person: any;
  type: PersonType;
}

export function PersonDetailsButton({
  person,
  type,
}: PersonDetailsButtonProps) {
  const [open, setOpen] = useState(false);

  const renderCommonInfo = () => (
    <>
      <Info label="CPF" value={person.cpf} />
      <Info
        label="Telefone"
        value={person.phone}
        icon={<Phone className="w-4 h-4" />}
      />
      <Info
        label="E-mail"
        value={person.email || person.user?.email}
        icon={<Mail className="w-4 h-4" />}
      />
    </>
  );

  const renderDoctorInfo = () => (
    <>
      <Info label="CRM" value={person.crm} />
      <Info label="Valor da Consulta" value={`R$ ${person.queryValue}`} />
      <Info label="Status" value={person.status} badge />
      <Info
        label="Especialidades"
        value={person.specialties?.join(", ")}
        icon={<HeartPulse className="w-4 h-4" />}
      />
    </>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 px-4 py-2 rounded hover:bg-transparent"
        >
          <Eye />
          Detalhes
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-blue-700 mt-5">
            {type === "doctor" ? `Dr. ${person.name}` : person.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {type === "doctor"
              ? "Perfil completo do médico"
              : type === "patient"
              ? "Perfil do paciente"
              : "Perfil do usuário"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Foto do médico */}

          {/* Informações principais */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {renderCommonInfo()}
            {type === "doctor" && renderDoctorInfo()}
          </div>
        </div>

        {/* Endereço */}
        {person.address && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Endereço
            </h4>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              {person.address.logradouro}, nº {person.address.locationNumber}
              <br />
              {person.address.neighborhood}, {person.address.city} -{" "}
              {person.address.uf}
              <br />
              CEP: {person.address.cep}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Componente auxiliar para formatação
function Info({ label, value, icon, badge = false }: any) {
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
