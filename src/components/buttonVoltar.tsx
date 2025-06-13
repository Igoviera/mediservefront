"use client";

import React from "react";
import { SlActionUndo } from "react-icons/sl";

interface VoltarButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function VoltarButton({ onClick, children = "Retornar" }: VoltarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-[#222222] text-white font-semibold px-4 py-2 rounded-[13.93px] text-sm"
    >
      <SlActionUndo className="text-[20px] mr-2" />
      {children}
    </button>
  );
}
