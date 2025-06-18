import React from "react";

type InputProps = {
  label?: string;
  error?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-1 text-[14px] leading-[14px]">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          {...props}
          className={`w-full  border outline-offset-2 outline-blue-500 focus:outline-2 ${
            error ? "border-red-500" : "border-[#CCCCCC]"
          } rounded-[6px] px-2 py-2`}
        />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </div>
    );
  }
);

// necessário para evitar erro no React DevTools
Input.displayName = "Input";

export default Input;
