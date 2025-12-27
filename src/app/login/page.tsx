"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      console.log("Enviando dados de login:", data);
      // Simule requisição
      await new Promise((r) => setTimeout(r, 1500));
        
    } catch (error) {
        console.log("Erro ", error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full flex items-center justify-center inset-0">
      <Image
      src="/fundo.jpg"
      alt="Background login"
      fill
      className="object-cover"
      priority
    />
     <div className="absolute inset-0 bg-black/25" />
      <Card className="relative z-10 w-full max-w-xl bg-white/90 backdrop-blur shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full h-12 bg-blue-500" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            <div className="flex justify-end gap-2">
              <p className="text-sm">Esqueceu seu senha?</p>
              <p className="text-sm cursor-pointer text-blue-600 font-semibold">Clique aqui</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
