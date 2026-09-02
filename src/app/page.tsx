import Hero from "@/components/Hero";
import Planos from "@/components/Planos";
import Atalhos from "@/components/Atalhos";
import Cobertura from "@/components/Cobertura";
import Rede from "@/components/Rede";
import Empresas from "@/components/Empresas";
import Conformidade from "@/components/Conformidade";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Planos />
      <Atalhos />
      <Cobertura />
      <Rede />
      <Empresas />
      <Conformidade />
      <Faq />
    </main>
  );
}
