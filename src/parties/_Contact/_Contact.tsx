import { Input } from "@/components/Input";
import { Line } from "@/components/Line";
import { Doubt } from "@/components/svgs/Doubt";
import { Email } from "@/components/svgs/Email";
import { User } from "@/components/svgs/User";
import { sendMail, sendMailProps } from "@/data/sendMail/sendMail";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface ContactProps {}

const _Contact: React.FC<ContactProps> = () => {
  const [info, setInfo] = useState<sendMailProps>({
    name: "",
    email: "",
    desc: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    desc: false,
  });

  const [status, setStatus] = useState({
    message: "",
    style: "block",
  });

  const input = (e: ChangeEvent<HTMLInputElement>) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ message: "", style: "" });

    let errorState = {
      name: info.name ? false : true,
      email: info.email ? false : true,
      desc: info.desc ? false : true,
    };

    setError(errorState);

    if (info.name && info.email && info.desc) {
      const response = sendMail(info)
        .then(() => {
          let clear = {
            name: "",
            email: "",
            desc: "",
          };

          setStatus({ ...status, message: "Email enviado com sucesso!" });
          setInfo(clear);
          timeNotifly();
        })
        .catch(() => {
          setStatus({
            ...status,
            message:
              "Houve um erro ao enviar o email. Por favor, tente novamente mais tarde.",
          });

          timeNotifly();
        });
    }
  };

  const timeNotifly = () => {
    setTimeout(() => {
      setStatus({ ...status, style: "hidden" });
    }, 5000);
  };

  return (
    <div className="w-full h-fit flex items-center justify-stretch pb-60 lg:pb-120 overflow-x-hidden">
      <Line props="flex-1 h-4 rounded-none" />

      <div className="w-[95%] xl:w-full h-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:justify-between py-30 lg:p-30 bg-gradient-to-r from-purple to-pink rounded-3xl gap-24 lg:0">
        <div data-aos="fade-up">
          <h5 className="font-montserrat font-bold text-white text-[2.8rem] lg:text-4xl">
            Ficou com duvida?
          </h5>
          <p className="font-montserrat text-white text-lg text-center lg:text-left">
            Entre em contato
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="block w-full h-2 lg:w-2 lg:h-200 bg-white"
        ></div>

        <form
          data-aos="slide-left"
          onSubmit={(e) => handleSubmit(e)}
          className="w-4/5 sm:w-[39rem] flex flex-col gap-8 items-center justify-center"
        >
          {status.message && (
            <p
              className={`font-montserrat text-base md:text-lg font-bold text-white ${status.style}`}
            >
              {status.message}
            </p>
          )}

          <Input
            icon={
              <User
                className={`w-24 h-24 ${
                  error.name ? "fill-red-600" : "fill-white"
                }`}
              />
            }
            error={error.name}
            placeholder="Seu nome aqui"
            type="text"
            name="name"
            onChange={(e) => input(e)}
            value={info.name}
          />

          <Input
            icon={
              <Email
                className={`w-24 h-24 ${
                  error.email ? "fill-red-600" : "fill-white"
                }`}
              />
            }
            error={error.email}
            placeholder="Insira seu email"
            type="email"
            name="email"
            onChange={(e) => input(e)}
            value={info.email}
          />

          <Input
            icon={
              <Doubt
                className={`w-24 h-24 ${
                  error.desc ? "fill-red-600" : "fill-white"
                }`}
              />
            }
            error={error.desc}
            placeholder="Coloque sua duvida aqui"
            type="text"
            name="desc"
            onChange={(e) => input(e)}
            value={info.desc}
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-white hover:bg-gradient-to-r from-purple to-pink rounded-lg drop-shadow-3xl"
          >
            <span className="w-full h-full py-8 px-12 uppercase font-montserrat font-bold text-transparent hover:text-white text-lg bg-clip-text bg-gradient-to-r from-purple to-pink">
              ENVIAR
            </span>
          </button>
        </form>
      </div>

      <Line props="flex-1 h-4 rounded-none bg-pink" />
    </div>
  );
};

export { _Contact };
