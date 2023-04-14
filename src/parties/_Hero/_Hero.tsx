import { Button } from "@/components/Button";
import { Line } from "@/components/Line";
import { Blog } from "@/components/svgs/Blog";
import React from "react";

interface HeroProps {}

const _Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="w-full md:h-500 lg:h-[60rem] xl:h-[78.8rem] flex items-center justify-center mt-40 px-16 max-w-[1281px]:px-0 overflow-hidden">
      <div className="w-full h-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center md:justify-between relative gap-40">
        <div className="w-full flex flex-col items-center md:items-start justify-center md:justify-start gap-40 md:gap-60">
          <div className="max-w-[63rem]">
            <Line props="mb-8 w-60 lg:w-[8rem] xl:w-100" />
            <h1 className="font-montserrat font-bold text-left text-2xl lg:text-3xl xl:text-5xl leading-none pb-16 md:pb-24">
              Você está olhando para levar o seu negócio on-line para o próximo
              nível?
            </h1>
            <p className="font-montserrat font-normal text-lg xl:text-2xl">
              Nossa equipe de desenvolvedores freelancers especializados pode
              ajudá-lo a alcançar seus objetivos.
            </p>
          </div>

          <Button
            propsLink="w-full max-w-[37.8rem]"
            label="Fale com um especialista"
            url="#"
          />
        </div>

        <Blog className="w-full h-full md:w-[125rem] lg:w-[76rem] md:h-500 lg:h-[60rem] xl:w-[98rem] xl:h-[78.8rem] lg:absolute top-0 right-0 mt-40 md:translate-x-[10rem] md:translate-y-0  lg:translate-x-[20rem] lg:-translate-y-40" />
      </div>
    </div>
  );
};

export { _Hero };
