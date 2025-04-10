import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-[432px]">
      {label && (
        <label className="h-[14px] mb-[4px] text-[14px] leading-[14px]">
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full bg-white border border-[#CCCCCC] rounded-[6.11px] px-[12.23px] py-[12.23px]"
      />
    </div>
  )
}

export default Input
