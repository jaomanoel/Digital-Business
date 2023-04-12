import React from "react";

type ButtonProps = {
  label: string;
  url: string;
  propsLink?: string;
  propsText?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  url,
  propsLink,
  propsText,
}) => {
  return (
    <a
      className={`flex items-center bg-gradient-to-r from-purple to-pink justify-center rounded-full px-4 py-4 ${
        !!propsLink ? propsLink : ""
      }`}
      href={url}
      target={"_blank"}
    >
      <p
        className={`font-bold font-montserrat rounded-full bg-white text-2xl text-center w-full h-full px-26 py-12 transition-all hover:text-white hover:bg-gradient-to-r from-purple to-pink  ${
          !!propsText ? propsText : ""
        }`}
      >
        {label}
      </p>
    </a>
  );
};

export { Button };
