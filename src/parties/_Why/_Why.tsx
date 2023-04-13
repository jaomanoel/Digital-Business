import { Button } from "@/components/Button";
import { Online } from "@/components/svgs/Online";
import React from "react";

interface WhyProps {}

const _Why: React.FC<WhyProps> = () => {
  return (
    <div className="w-full flex items-center justify-center px-16 xl:px-0 pb-60 lg:pb-120 overflow-x-hidden">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-36">
        <Online className="w-full h-full md:w-600 md:h-[55rem] lg:w-[78.8rem] lg:h-[69.6rem]" />

        <div className="max-w-[45.5rem]">
          <h3
            className="font-montserrat font-bold text-[2.8rem] lg:text-4xl
					  text-center lg:text-left leading-none pb-20 lg:pb-24"
          >
            Por que levar meu negocio para o digital?
          </h3>

          <p className="font-montserrat text-base lg:text-lg pb-40 lg:pb-60">
            Com mais de 90% dos brasileiros conectados à internet, estar ausente
            no mundo digital significa perder uma grande oportunidade de
            aumentar seus lucros. Comece agora mesmo a investir em presença
            online e eleve suas vendas a um novo patamar. Aproveite o sucesso e
            a visibilidade que a internet pode proporcionar ao seu negócio!
          </p>

          <Button url="#" label="Entrar em contato" />
        </div>
      </div>
    </div>
  );
};

export { _Why };
