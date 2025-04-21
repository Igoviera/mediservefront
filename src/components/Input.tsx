import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string; //adicionando prop 'error'
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-[14px] leading-[14px]">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full bg-white border ${
          error ? 'border-red-500' : 'border-[#CCCCCC]'
        } rounded-[6px] px-2 py-2`}
      />
      {error && (
        <span className="text-red-500 text-xs mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
