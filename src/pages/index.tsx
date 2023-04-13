import { Head } from "@/infra/components/Head";
import { Hero } from "@/parties/_Hero";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head title="Eleve seu negocio" />
      <main className={montserrat.className}>
        <Hero />
      </main>
    </>
  );
}
