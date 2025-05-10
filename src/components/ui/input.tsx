'use client'

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = {
  placeholder:  string;
  password?: boolean;
  value?: string;
  icon?: any;
  onChange?: any;
  className?: string;
}

export default function Input({placeholder, icon, password, value, onChange}:InputProps){
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col my-5">
      <div className="w-full bg-[#E7E7E7] rounded-lg p-3 md:p-4 flex items-center">
        <input
          type={password && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          className="bg-transparent border-none outline-none flex-1"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {password && (
          <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
}