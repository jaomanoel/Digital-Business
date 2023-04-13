/* eslint-disable react/no-children-prop */
import { Card } from "@/components/Card";
import { Term } from "@/components/svgs/Term";
import React from "react";

interface FeaturesProps {}

const _Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <div className="w-full flex items-center justify-center py-60 lg:py-120">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-start bg-purple rounded-3xl py-60 gap-40 pr-30">
        <div className="bg-white rounded-tr-full rounded-br-full px-30 py-100 w-full lg:w-fit">
          <h2 className="font-montserrat font-bold text-3xl leading-none">
            Nossas{<br />}
            <span className="text-purple text-4xl">Caracteristicas</span>
          </h2>
        </div>

        <div className="flex lg:flex-row flex-wrap items-center lg:items-start justify-center gap-40 w-340 lg:w-fit">
          {[
            {
              img: <Term className="w-340 h-200 lg:w-250 lg:h-145" />,
              title: "Curto Prazo",
              text: "Entendemos a importância de importar seu negócio on-line e é por isso que trabalhamos em estreita colaboração com você para garantir que seu projeto seja concluído no prazo, dentro do orçamento e de acordo com suas especificações exatas.",
            },
            {
              img: <Term className="w-340 h-200 lg:w-250 lg:h-145" />,
              title: "Layout Responsivo",
              text: "Entendemos que, no mundo de hoje, um site que possa se adaptar a qualquer dispositivo é essencial para o seu sucesso. É por isso que criamos um site totalmente responsivo, garantindo que você possa acessar todo o nosso conteúdo e recursos em qualquer dispositivo, de computadores desktop a smartphones e tablets.",
            },
            {
              img: <Term className="w-340 h-200 lg:w-250 lg:h-145" />,
              title: "SEO Aprimorado",
              text: "Somos especializados em otimizar sites para melhorar sua velocidade, usabilidade e classificações nos mecanismos de pesquisa. ",
            },
          ].map((item, index) => (
            <Card
              key={index}
              children={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { _Features };
