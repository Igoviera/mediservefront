import { Button } from "../ui/Mybutton";
import { Input } from "../ui/MyInput";

export default function CreateDoctor() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Cadastro de Médico</h2>

      <div className="grid grid-cols-4 gap-4">
        <Input placeholder="Nome" />
        <Input placeholder="Imagem URL" />
        <Input placeholder="CRM" />
        <Input placeholder="CPF" />
        <Input placeholder="Telefone" />
        <Input placeholder="CEP" />
        <Input placeholder="Logradouro" />
        <Input placeholder="Número" />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="Estado (UF)" />
      </div>
      <div className="mt-3">
        <Input placeholder="Descrição" />
      </div>
      <div className="flex justify-end">
        <div className="mt-5 w-1/5">
          <Button label="Cadastrar" />
        </div>
      </div>
    </div>
  );
}
