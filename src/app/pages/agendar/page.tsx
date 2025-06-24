import Agenda from "@/components/Agenda";
import { Card } from "@/components/ui/card";

export default function Agendar() {
  return (

      <Card className="px-20 py-20 mt-2 text-slate-600 w-screen">
        <div className="mb-5">
          <h1 className="text-3xl">Dr. Camila lima</h1>
          <p className="text-lg">Pediatria</p>
        </div>
        <hr />
        <h2 className="mt-5 text-black text-lg font-semibold">Selecione o harario deseja na linda abaixo.</h2>
        <div className="mt-5">
          <Agenda />
          <Agenda />
          <Agenda />
          <Agenda />
          <Agenda />
        </div>
      </Card>
   
  );
}
