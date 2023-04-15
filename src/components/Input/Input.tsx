import React, { InputHTMLAttributes, ReactElement } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactElement;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ icon, error, ...props }) => {
  return (
    <div
      className={`w-full border border-solid flex items-center justify-start px-16 py-8 gap-8 rounded-lg ${error ? "border-red-600" : "border-white"}`}
    >
      {icon}
      <input
        className="bg-transparent outline-none font-montserrat font-normal text-base lg:text-lg text-white"
        {...props}
      />
    </div>
  );
};

export { Input };
