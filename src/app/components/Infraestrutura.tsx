"use client";

import { infraestruturaCards } from "../constants/infraestrutura";

export default function Infraestrutura() {

  return (
    <section className="relative py-[84px]  border-b border-roxo-600/20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amarelo/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-end mb-14">
          <div>
            <div className="eyebrow mb-3">POR TRÁS DA CONEXÃO</div>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-display font-extrabold leading-[1.08] text-white">
              Infraestrutura própria, não<br className="hidden sm:inline" /> revenda.
            </h2>
          </div>
          <div>
            <p className="text-cinza text-[1.05rem] leading-relaxed">
              A Fabreu opera rede autônoma na internet brasileira, com rotas redundantes e monitoramento contínuo dos enlaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infraestruturaCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-[#230438]/80 backdrop-blur-md border border-roxo-600/30 p-8 rounded-[24px] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-amarelo/50 hover:bg-[#2e054a] hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15),0_0_20px_rgba(255,0,127,0.1)]"
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amarelo/0 to-transparent group-hover:via-amarelo transition-all duration-500 rounded-full" />

              <div className="text-[2.5rem] sm:text-[2.8rem] font-black font-display text-amarelo leading-none mb-4 group-hover:scale-105 group-hover:text-amber-300 transition-all duration-300 origin-left">
                {card.highlight}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amarelo transition-colors duration-200">
                {card.title}
              </h3>

              <p className="text-cinza text-[0.95rem] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
