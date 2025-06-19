"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/MyInput";
import { FaRegEye } from "react-icons/fa";
import { Button } from "../ui/Mybutton";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");


  const handleEnterButton = () => {
    router.replace('/home');
  }

  return (
    <>
      <Input
        value={emailField}
        onChange={(t) => setEmailField(t)}
        placeholder="Digite seu e-mail"
      />
      <Input
        password
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        placeholder="Digite sua senha"
      />

      <Button label="Entrar" onClick={handleEnterButton} size={1}/>
    </>
  );
};
