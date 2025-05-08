'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../public/assets/image-group-login.png';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/Input';

export default function Login(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEnterButton = () => {
    if (!username || !password) {
      alert('Preencha todos os campos');
      return;
    }

    console.log({username, password});
    router.replace('/');
  };

  const DADOS_INPUTS = [
    { placeholder: 'username', password: false, value: username, onChange: setUsername},
    { placeholder: 'password', password: true, value: password, onChange: setPassword},
  ];

  return(
    <>
      <main className='h-screen bg-[#869FBB] flex flex-col items-center justify-center border-none rounded-[30px] p-4 m-4'>
        <div>
          <h1 className='text-center text-[25px] font-bold'>LOGIN</h1>
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
            onClick={handleEnterButton} 
          />
        </div>
      </main>
    </>
  );
}