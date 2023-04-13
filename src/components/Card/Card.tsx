/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";

interface CardProps {
  title: string;
  text: string;
  children: ReactElement;
}

const Card: React.FC<CardProps> = ({ title, text, children }) => {
  return (
    <div className="flex items-start w-250 flex-col gap-16">
      {children}
      <h3 className="font-bold text-2xl font-montserrat text-center md:text-left">
        {title}
      </h3>
      <p className="font-montserrat text-white text-base md:text-lg">{text}</p>
    </div>
  );
};

export { Card };
