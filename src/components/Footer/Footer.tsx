import Link from "next/link";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-full flex items-center bg-dark justify-center px-16 max-w-[1281px]:px-0 py-40 overflow-x-hidden">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-36">
        <p className="font-montserrat font-normal text-white text-center text-base lg:text-lg leading-none">
          Este site não faz parte do site do Facebook ou Facebook Inc. Além
          disso, este site NÃO é endossado pelo Facebook de forma alguma.
          FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>

        <div className="w-full h-[.1rem] bg-gradient-to-r from-purple to-pink"></div>

        <div className="w-full flex items-center justify-between font-montserrat text-xs lg:text-sm text-white">
          <p className="text-white">JoãoManoel©2023</p>

          <div className="flex text-center items-center gap-12 lg:gap-24">
            <Link
              href="/privacy-policy"
              target={"_blank"}
              className="hover:underline"
            >
              POLITICA DE PRIVACIDADE
            </Link>
            <Link
              href="/terms-of-use"
              target={"_blank"}
              className="hover:underline"
            >
              TERMOS DE USO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
