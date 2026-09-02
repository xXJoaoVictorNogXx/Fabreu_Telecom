const planosData = [
  {
    mega: '400',
    perfil: 'Ideal para streaming, redes sociais e home office básico.',
    preco: '69,90',
    destaque: false,
    beneficios: ['Wi-Fi grátis', 'Instalação grátis', 'Suporte local'],
    apps: ['Watch', 'Skeelo'],
  },
  {
    mega: '500',
    perfil: 'Perfeito para famílias, vários dispositivos e jogos online.',
    preco: '89,90',
    destaque: true,
    tag: 'Mais vendido',
    beneficios: ['Wi-Fi grátis', 'Instalação grátis', 'Suporte VIP'],
    apps: ['Watch', 'Skeelo', 'Kaspersky'],
  },
  {
    mega: '600',
    perfil: 'Alta performance para downloads rápidos e 4K simultâneo.',
    preco: '99,90',
    destaque: false,
    beneficios: ['Wi-Fi 6 incluso', 'Instalação grátis', 'Atendimento priorizado'],
    apps: ['Watch', 'Skeelo', 'Kaspersky', 'Babbel'],
  },
  {
    mega: '800',
    perfil: 'A experiência máxima. Tudo ao mesmo tempo, sem limites.',
    preco: '129,90',
    destaque: false,
    beneficios: ['Wi-Fi 6 incluso', 'Instalação grátis', 'Suporte premium'],
    apps: ['Max', 'Skeelo', 'Kaspersky', 'Babbel', 'Deezer'],
  }
];

export default function Planos() {
  return (
    <section id="planos" className="relative py-[84px] bg-roxo-850 border-y border-linha max-[620px]:py-[60px]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-[30px] mb-11 flex-wrap">
          <div>
            <div className="eyebrow">Planos Residenciais</div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] mt-3.5 max-w-[20ch]">
              Escolha a velocidade ideal para a sua casa.
            </h2>
          </div>
          <p className="text-cinza max-w-[42ch]">Todos os planos incluem roteador em comodato e instalação sujeita à viabilidade técnica.</p>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1">
          {planosData.map((plano, i) => (
            <div key={i} className={`relative flex flex-col p-[26px_22px_24px] rounded-raio border transition-all duration-220 hover:-translate-y-1.5 ${
              plano.destaque 
                ? 'border-amarelo bg-gradient-to-b from-amarelo/10 to-white/5' 
                : 'border-linha-forte bg-gradient-to-b from-white/5 to-white/2 hover:border-magenta'
            }`}>
              {plano.tag && (
                <div className="absolute -top-3 left-[22px] bg-amarelo text-roxo-900 font-display text-[0.68rem] font-bold tracking-[0.12em] uppercase py-1 px-3 rounded-full">
                  {plano.tag}
                </div>
              )}
              <div className="font-display font-extrabold text-[2.9rem] leading-none tracking-tight">
                {plano.mega} <small className="text-[1rem] font-semibold text-cinza tracking-normal">Mega</small>
              </div>
              <p className="text-[0.86rem] text-amarelo-claro my-2 min-h-[2.6em]">{plano.perfil}</p>
              
              <div className="font-display text-[1.9rem] font-bold flex items-baseline gap-1">
                <span className="text-[1rem] font-semibold">R$</span>
                {plano.preco}
                <span className="text-[0.85rem] text-cinza font-normal font-corpo">/mês</span>
              </div>

              <ul className="list-none my-[18px] mb-[22px] p-0 grid gap-2 text-[0.86rem] text-[#DDD3EB]">
                {plano.beneficios.map((ben, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-magenta mt-2"></span>
                    {ben}
                  </li>
                ))}
                <li className="flex gap-2 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-magenta mt-2"></span>
                  Apps inclusos: {plano.apps.join(', ')}
                </li>
              </ul>

              <div className="mt-auto w-full">
                <a href="#viabilidade" className={`btn w-full ${plano.destaque ? 'btn-primario' : 'btn-linha'}`}>
                  Assinar agora
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[26px] text-[0.82rem] text-cinza max-w-[70ch]">
          * A velocidade anunciada de acesso e tráfego da internet é a nominal máxima, podendo sofrer variações decorrentes de fatores externos.
        </p>

        {/* APPS */}
        <div id="apps" className="mt-14">
          <div className="eyebrow mb-6">Diversão e segurança na palma da mão</div>
          <div className="grid grid-cols-5 gap-4 mt-2 max-[980px]:grid-cols-3 max-[620px]:grid-cols-1">
            {[
              { title: 'Watch Brasil', desc: 'Séries e filmes' },
              { title: 'Skeelo', desc: 'Livros digitais' },
              { title: 'Kaspersky', desc: 'Antivírus completo' },
              { title: 'Babbel', desc: 'Idiomas online' },
              { title: 'Deezer', desc: 'Músicas e podcasts' },
            ].map((app, i) => (
              <div key={i} className="border border-linha rounded-[14px] p-5 text-center bg-white/5 transition-all hover:border-amarelo hover:bg-amarelo/10">
                <b className="font-display text-[1rem] block">{app.title}</b>
                <span className="text-[0.78rem] text-cinza">{app.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
