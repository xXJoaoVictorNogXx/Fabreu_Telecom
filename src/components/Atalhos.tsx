export default function Atalhos() {
  return (
    <section id="atalhos" className="py-[84px] bg-roxo-850 border-y border-linha max-[620px]:py-[60px]">
      <div className="wrap">
        <div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[620px]:grid-cols-1">
          <a href="https://fabreutelecom.sgp.tsmx.com.br/central" target="_blank" rel="noopener" className="flex flex-col gap-2 p-6 rounded-raio border border-linha-forte bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-amarelo group">
            <div className="w-[38px] h-[38px] rounded-[11px] bg-gradient-to-br from-magenta to-amarelo grid place-items-center mb-1">
              <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-roxo-900 stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <b className="font-display text-[1.02rem]">Área do cliente</b>
            <span className="text-[0.85rem] text-cinza">Faturas, extrato e contratos.</span>
          </a>

          <a href="https://api.whatsapp.com/send?phone=5599988229457&text=Quero%20segunda%20via%20do%20boleto" target="_blank" rel="noopener" className="flex flex-col gap-2 p-6 rounded-raio border border-linha-forte bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-amarelo group">
            <div className="w-[38px] h-[38px] rounded-[11px] bg-gradient-to-br from-magenta to-amarelo grid place-items-center mb-1">
              <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-roxo-900 stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
              </svg>
            </div>
            <b className="font-display text-[1.02rem]">2ª via do boleto</b>
            <span className="text-[0.85rem] text-cinza">Via WhatsApp com o CPF.</span>
          </a>

          <a href="https://fast.com/pt/" target="_blank" rel="noopener" className="flex flex-col gap-2 p-6 rounded-raio border border-linha-forte bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-amarelo group">
            <div className="w-[38px] h-[38px] rounded-[11px] bg-gradient-to-br from-magenta to-amarelo grid place-items-center mb-1">
              <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-roxo-900 stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="m12 12 4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/>
              </svg>
            </div>
            <b className="font-display text-[1.02rem]">Teste de conexão</b>
            <span className="text-[0.85rem] text-cinza">Meça o seu sinal agora.</span>
          </a>

          <a href="#ajuda" className="flex flex-col gap-2 p-6 rounded-raio border border-linha-forte bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-amarelo group">
            <div className="w-[38px] h-[38px] rounded-[11px] bg-gradient-to-br from-magenta to-amarelo grid place-items-center mb-1">
              <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-roxo-900 stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <b className="font-display text-[1.02rem]">Suporte técnico</b>
            <span className="text-[0.85rem] text-cinza">Fale com um atendente humano.</span>
          </a>
        </div>
      </div>
    </section>
  );
}
