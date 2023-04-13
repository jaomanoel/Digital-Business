import React, { InputHTMLAttributes, ReactElement } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactElement;
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div className="w-full border border-solid border-white flex items-center justify-start px-16 py-8 gap-8 rounded-lg">
      {icon}
      <input
        className="bg-transparent outline-none font-montserrat font-normal text-base lg:text-lg text-white"
        {...props}
      />
    </div>
  );
};

export { Input };
