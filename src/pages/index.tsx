import { Head } from "@/infra/components/Head";
import { Features } from "@/parties/_Features";
import { Hero } from "@/parties/_Hero";
import { Why } from "@/parties/_Why";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head title="Eleve seu negocio" />
      <main className={montserrat.className}>
        <Hero />
        <Features />
        <Why />
      </main>
    </>
  );
}
