import Image from "next/image";
import { SOBRE_FABREU_DATA } from "../constants/valores";

function ValorIcon({ name }: { name: string }) {
  switch (name) {
    case "proximidade":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "excelencia":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "compromisso":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      );
    case "transparencia":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "melhoria":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "inovacao":
      return (
        <svg className="w-7 h-7 text-[#F8AF2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Valores() {
  const { historia, filosofia, valoresTitlePrefix, valoresTitleHighlight, valores } = SOBRE_FABREU_DATA;

  return (
    <section id="sobre" className="relative py-16 md:py-24 border-b border-roxo-600/20 overflow-hidden bg-gradient-to-b from-[#1A0128] via-[#240340] to-[#1A0128]">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amarelo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="wrap relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8 md:mb-12">
          <div className="bg-[#2a0448]/90 backdrop-blur-md border border-roxo-600/30 rounded-[28px] p-8 md:p-10 flex flex-col justify-center shadow-xl hover:border-roxo-600/50 transition-all duration-300">
            <div className="eyebrow mb-4">{historia.eyebrow}</div>
            <h2 className="text-[1.85rem] sm:text-[2.2rem] lg:text-[2.5rem] font-display font-bold leading-[1.15] text-white mb-5">
              {historia.titlePrefix}
              <span className="text-amarelo">{historia.titleHighlight}</span>
            </h2>
            <p className="text-[#D4C3E8] text-[0.98rem] sm:text-[1.05rem] leading-relaxed">
              {historia.text}
            </p>
          </div>

          <div className="relative w-full h-[320px] sm:h-[380px] md:h-auto min-h-[300px] rounded-[28px] overflow-hidden border border-roxo-600/30 bg-[#250442] shadow-2xl">
            <Image
              src={historia.imagem}
              alt={historia.imageAlt}
              fill
              className="object-cover rounded-[28px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-16 md:mb-20">
          <div className="order-2 md:order-1 relative w-full h-[320px] sm:h-[380px] md:h-auto min-h-[300px] rounded-[28px] overflow-hidden border border-roxo-600/30 bg-[#250442] shadow-2xl">
            <Image
              src={filosofia.imagem}
              alt={filosofia.imageAlt}
              fill
              className="object-cover rounded-[28px]"
            />
          </div>

          <div className="order-1 md:order-2 bg-[#2a0448]/90 backdrop-blur-md border border-roxo-600/30 rounded-[28px] p-8 md:p-10 flex flex-col justify-center shadow-xl hover:border-roxo-600/50 transition-all duration-300">
            <h2 className="text-[1.85rem] sm:text-[2.2rem] lg:text-[2.5rem] font-display font-bold leading-[1.15] text-amarelo mb-5">
              {filosofia.titleHighlight}
            </h2>
            <p className="text-[#D4C3E8] text-[0.98rem] sm:text-[1.05rem] leading-relaxed">
              {filosofia.text}
            </p>
          </div>
        </div>

        <div id="valores" className="pt-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[2rem] sm:text-[2.6rem] font-display font-extrabold text-white">
              {valoresTitlePrefix}
              <span className="text-amarelo">{valoresTitleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFF8E7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <ValorIcon name={item.iconName} />
                </div>

                <h3 className="font-poppins font-bold text-[#240340] text-[1.1rem] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#56426B] text-[0.88rem] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
