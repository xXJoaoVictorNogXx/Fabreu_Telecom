import Hero from "@/app/components/Hero";
import Planos from "@/app/components/Planos";
import Viabilidade from "@/app/components/Viabilidade";
import Atalhos from "@/app/components/Atalhos";
import BaixeApp from "@/app/components/BaixeApp";
import Cobertura from "@/app/components/Cobertura";
import Rede from "@/app/components/Rede";
import Valores from "@/app/components/Valores";
import Empresas from "@/app/components/Empresas";
import Conformidade from "@/app/components/Conformidade";
import Faq from "@/app/components/Faq";
import Negotiation from "@/app/components/Negotiation";
import InstagramFeed from "@/app/components/InstagramFeed";
import Infraestrutura from "@/app/components/Infraestrutura";

export default function Home() {
  return (
    <main>
      <Hero />
      <Planos />
      <Viabilidade />
      <Atalhos />
      <BaixeApp />
      <Cobertura />
      <Rede />
      <Valores />
      <Conformidade />
      <Negotiation />
      <InstagramFeed />
      <Infraestrutura />
      <Faq />
    </main>
  );
}

