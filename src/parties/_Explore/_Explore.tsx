import { Button } from "@/components/Button";
import { Vitual } from "@/components/svgs/Virtual";
import React from "react";

interface ExploreProps {}

const _Explore: React.FC<ExploreProps> = ({}) => {
  return (
    <div className="w-full flex items-center justify-center px-16 max-w-[1281px]:px-0 pb-60 lg:pb-120 overflow-x-hidden">
      <div className="w-full max-w-screen-xl flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-36">
        <div data-aos="slide-right" className="max-w-[45.5rem]">
          <h4
            className="font-montserrat font-bold text-[2.8rem] lg:text-4xl
					  text-center lg:text-left leading-none pb-20 lg:pb-24"
          >
            Explore o mundo digital
          </h4>

          <p className="font-montserrat text-base lg:text-lg pb-8 lg:pb-12">
            No mundo digital de hoje, ter uma forte presença online é essencial
            para empresas de todos os tamanhos.
          </p>

          <p className="font-montserrat text-base lg:text-lg pb-40 lg:pb-60">
            Sem uma presença on-line, você está perdendo clientes em potencial
            que estão procurando ativamente por produtos e serviços como o seu.
            Você também está perdendo oportunidades valiosas de se envolver com
            seus clientes existentes e criar fidelidade à marca.
          </p>

          <Button label="Fale conosco agora" url="#" />
        </div>

        <div
          data-aos="slide-left"
          className="w-full h-full md:w-600 md:h-[55rem] lg:w-[78.8rem] lg:h-[69.6rem]"
        >
          <Vitual className="w-full h-full translate-x-20 xl:translate-x-40 md:w-600 md:h-[55rem] lg:w-[78.8rem] lg:h-[69.6rem]" />
        </div>
      </div>
    </div>
  );
};

export { _Explore };
