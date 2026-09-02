export default function Hero() {
  return (
    <section className="hero relative py-[86px] pb-[72px] overflow-hidden">
      <div className="hero-bg"></div>
      <div className="fibras absolute inset-0 z-0 opacity-55 pointer-events-none">
        <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-100,520 C320,520 480,120 1540,120" stroke="rgba(213,0,206,.6)"/>
          <path className="pulso" d="M-100,520 C320,520 480,120 1540,120" stroke="#fff"/>
          
          <path d="M-100,600 C280,600 420,240 1540,240" stroke="rgba(248,175,45,.6)"/>
          <path className="pulso b" d="M-100,600 C280,600 420,240 1540,240" stroke="#fff"/>
          
          <path d="M-100,440 C380,440 560,80 1540,80" stroke="rgba(213,0,206,.6)"/>
          <path className="pulso c" d="M-100,440 C380,440 560,80 1540,80" stroke="#fff"/>
          
          <path d="M-100,680 C240,680 380,360 1540,360" stroke="rgba(248,175,45,.6)"/>
          <path className="pulso d" d="M-100,680 C240,680 380,360 1540,360" stroke="#fff"/>
        </svg>
      </div>

      <div className="wrap relative z-10 grid grid-cols-[1.15fr_0.85fr] gap-14 items-center max-[980px]:grid-cols-1">
        <div>
          <div className="eyebrow">Fibra óptica de verdade</div>
          <h1 className="text-[clamp(2.5rem,5.4vw,4rem)] my-5 mb-[18px]">
            Sua internet não precisa ser <em className="not-italic text-amarelo">um problema</em>.
          </h1>
          <p className="sub text-[1.12rem] text-[#DCD2EA] max-w-[44ch]">
            Trabalhe, jogue e assista a filmes sem travamentos com a fibra 100% óptica da Fabreu Telecom.
          </p>

          <div className="flex gap-3.5 flex-wrap mt-[30px]">
            <a href="#planos" className="btn btn-primario">Ver planos disponíveis</a>
            <a href="#viabilidade" className="btn btn-linha">Consultar viabilidade</a>
          </div>

          <div className="flex gap-[26px] mt-[38px] flex-wrap">
            <div className="border-l-2 border-magenta pl-3">
              <b className="font-display text-[1.3rem] block leading-tight">+10.000</b>
              <span className="text-[0.82rem] text-cinza">Clientes conectados</span>
            </div>
            <div className="border-l-2 border-magenta pl-3">
              <b className="font-display text-[1.3rem] block leading-tight">5 cidades</b>
              <span className="text-[0.82rem] text-cinza">No Maranhão</span>
            </div>
            <div className="border-l-2 border-magenta pl-3">
              <b className="font-display text-[1.3rem] block leading-tight">99,9%</b>
              <span className="text-[0.82rem] text-cinza">Uptime de rede</span>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-roxo-700 to-roxo-850 border border-linha-forte rounded-[26px] p-[30px] shadow-[0_26px_60px_rgba(0,0,0,0.42)]">
            <div className="font-display font-bold text-[1.02rem] mb-1.5">Teste de velocidade em tempo real</div>
            <p className="text-[0.88rem] text-cinza mb-5">Sua conexão com o mundo, sem gargalos.</p>
            
            <div className="medidor relative grid place-items-center my-1.5 mb-[18px]">
              <svg viewBox="0 0 200 120">
                <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="16" strokeLinecap="round"/>
                <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="url(#grad)" strokeWidth="16" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="40"/>
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D500CE"/>
                    <stop offset="100%" stopColor="#F8AF2D"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="valor absolute top-[56%] text-center">
                <b className="font-display text-[2.5rem] block leading-none">800</b>
                <span className="text-[0.78rem] text-cinza tracking-[0.14em] uppercase">Mega</span>
              </div>
            </div>

            <ul className="list-none m-0 p-0 grid gap-2.5 font-[0.9rem] mb-[22px]">
              <li className="flex gap-2.5 items-start text-[#E3D9F0]">
                <div className="tick flex-shrink-0 w-[17px] h-[17px] rounded-full bg-verde grid place-items-center mt-[3px]">
                  <svg viewBox="0 0 10 10" fill="none" stroke="#1A0128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 5 4 7 8 3"/>
                  </svg>
                </div>
                Download até 800 Mbps
              </li>
              <li className="flex gap-2.5 items-start text-[#E3D9F0]">
                <div className="tick flex-shrink-0 w-[17px] h-[17px] rounded-full bg-verde grid place-items-center mt-[3px]">
                  <svg viewBox="0 0 10 10" fill="none" stroke="#1A0128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 5 4 7 8 3"/>
                  </svg>
                </div>
                Ping otimizado para jogos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
