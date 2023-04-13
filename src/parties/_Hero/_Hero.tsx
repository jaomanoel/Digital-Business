import { Button } from "@/components/Button";
import { Line } from "@/components/Line";
import { Blog } from "@/components/svgs/Blog";
import React, { ReactElement } from "react";

interface HeroProps {}

const _Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full h-full max-w-screen-xl flex items-center justify-center md:justify-between relative">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-40 md:gap-60">
          <div className="max-w-[63rem]">
            <Line props="mb-8" />
            <h1 className="font-montserrat font-bold md:text-5xl leading-none pb-24">
              Você está olhando para levar o seu negócio on-line para o próximo
              nível?
            </h1>
            <p className="font-montserrat font-normal text-lg md:text-2xl">
              Nossa equipe de desenvolvedores freelancers especializados pode
              ajudá-lo a alcançar seus objetivos.
            </p>
          </div>

          <Button label="Fale com um especialista" url="#" />
        </div>
        <Blog className="w-[98rem] h-[92.4rem] md:absolute top-0 right-0 md:translate-x-[17.5rem] md:-translate-y-40" />
      </div>
    </div>
  );
};

export { _Hero };
