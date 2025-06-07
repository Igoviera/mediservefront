import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-[14px] leading-[14px]">
          {label}
        </label>
      )}
      <input
        {...props}
        className="outline-2 outline-offset-2 outline-blue-500 w-full bg-white border border-[#CCCCCC] rounded-[6px] px-3 py-3"
      />
    </div>
  )
}

export default Input
