"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = {
  placeholder: string;
  password?: boolean;
  value?: string;
  icon?: IconType;
  onChange?: (newValue: string) => void;
};

export const Input = ({
  placeholder,
  value,
  icon,
  onChange,
  password,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="has-[:focus]:border-blue-500 flex items-center h-14 rounded-2xl border-2 border-gray-300">
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {password && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="mr-4 cursor-pointer"
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </div>
      )}
    </div>
  );
};
