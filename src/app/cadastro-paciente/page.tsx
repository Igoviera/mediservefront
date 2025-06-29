"use client";

import React from "react";
import PatientForm from "@/components/PatientForm";
import pacienteService from "@/services/pacienteService";

export default function CadastroPaciente() {
  return(
    <PatientForm onSubmit={async (data) => {
      await pacienteService.creatPatients(data);
    }}/>
  )
}
