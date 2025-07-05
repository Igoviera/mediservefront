"use client";

import React, { useState } from "react";
import PatientForm from "@/components/PatientForm";
import pacienteService from "@/services/pacienteService";
import { useRouter } from "next/navigation";
import AlertMessage from "@/components/AlertMessage";

export default function CadastroPaciente() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {errorMessage && <AlertMessage type="error" message={errorMessage} />}
      {successMessage && (
        <AlertMessage type="success" message={successMessage} />
      )}

      <PatientForm
        loading={loading}
        onSubmit={async (data) => {
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

          try {
            await pacienteService.createPatients(data);
            setSuccessMessage("Paciente cadastrado com sucesso!")
          } catch (error: any) {
            //console.log("Erro da API:", error.response?.data);
            const apiErrors = error.response?.data?.errors;

            const message = Array.isArray(apiErrors)
              ? apiErrors.join(", ")
              : "Erro ao cadastrar paciente. Tente novamente.";
            console.log("Mensagem de erro:", message);

            setErrorMessage(message);
          } finally {
            setLoading(false);
          }
        }}
      />
    </div>
  );
}
