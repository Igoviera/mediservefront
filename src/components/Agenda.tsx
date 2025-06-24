export default function Agenda() {
  return (
    <div>
      <div className="flex gap-5">
        <p>Data</p>
        <p>20/06</p>
        <p>Segunda</p>
        <div className="flex flex-col gap-2 pb-2">
          <p className="">Horários Disponiveis</p>
          <div className="grid grid-cols-10 gap-2 text-blue-500">
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
            <span className="bg-blue-200 rounded-sm px-2 py-2">08:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
