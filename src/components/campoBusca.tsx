import React from "react";

interface CampoBuscaProps {
  placeholder?: string;
  onBuscar: () => void;
}

export default function CampoBusca({ placeholder = "Buscar", onBuscar }: CampoBuscaProps) {
  return (
    <div className="w-full flex items-center gap-2 mt-2">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222]"
      />
      <button
        onClick={onBuscar}
        className="px-4 py-2 bg-[#869FBB] text-white font-semibold rounded-md hover:bg-[#333333]"
      >
        Buscar
      </button>
    </div>
  );
}
