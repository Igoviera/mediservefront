'use client'

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../public/assets/image-group-login.png';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/Input';
import LinhasEsq from '../../../public/assets/linhasleft.png';
import LinhasDir from '../../../public/assets/linhasright.png';

export default function Login(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const realizaLogin = async () => {
    if(!username || !password){
      alert('Preencha todos os campos');
      return;
    }

    try{
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if(response.ok && data.success){
        alert('Login validado');
        router.replace('/');
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (error){
      console.error('Erro ao tentar logar:', error);
      alert('Erro no login. Tente novamente mais tarde.');
    }
  };

  const DADOS_INPUTS = [
    { placeholder: 'username', password: false, value: username, onChange: setUsername},
    { placeholder: 'password', password: true, value: password, onChange: setPassword},
  ];

  return(
    <div className="h-screen bg-[#869FBB] flex flex-row justify-center md:justify-between items-center">
      <Image
        alt=''
        src={LinhasEsq}
        className='hidden md:block'
      />
      <section className='flex-col justify-center items-center'>
        <div>
          <h1 className='text-center text-[25px] font-bold mt-6 mb-4'>LOGIN</h1>
          <Image
            alt=''
            src={Logo}
            width={200} height={200}
          />
        </div>
        <div>
          {DADOS_INPUTS.map((item, index) => (
            <Input
              key={index}
              placeholder={item.placeholder}
              password={item.password}
              value={item.value}
              onChange={item.onChange}
            />
          ))}
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-[#0F172A] font-[600] cursor-pointer'>Esqueceu a senha?</p>
          <Button 
            label="Entrar" 
            onClick={realizaLogin} 
          />
        </div>
      </section>
      <Image
        alt=''
        src={LinhasDir}
        className='hidden md:block'
      />
    </div>
  );
}