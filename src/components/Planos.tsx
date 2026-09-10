"use client";

import { useState } from "react";

const planosResidenciais = [
  {
    mega: '1000 Mega',
    perfil: 'Ideal para streaming, redes sociais e home office básico.',
    preco: '149,00',
    destaque: false,
    beneficios: ['Dual Band (2.4G e 5G)',
      'Download 1000 Gbps',
      'Upload 500 Mbps',
      'Internet Ilimitada',
      'Instalação Grátis',
      'Wi-Fi 6 Grátis',
      'Atendimento Premium',
      'Suporte Nível 1'],
    apps: [{ name: 'Watch', icon: '/watch.png' }, { name: 'Skeelo', icon: '/HBO_MAX.PNG' },{ name: 'Skeelo', icon: '/espn-logo-5.png' }, { name: 'Skeelo', icon: '/cnn.svg' },{ name: 'Skeelo', icon: '/getv.png' }, { name: 'Skeelo', icon: '/premiere-logo.png' }],
  },
  {
    mega: '500',
    perfil: 'Perfeito para famílias, vários dispositivos e jogos online.',
    preco: '95,00',
    destaque: true,
    tag: 'Mais vendido',
    beneficios: ['Dual Band (2.4G e 5G)',
      'Download 500 Gbps',
      'Upload 250 Mbps',
      'Internet Ilimitada',
      'Instalação Grátis',
      'Wi-Fi 6 Grátis',
      'Atendimento Premium',
      'Suporte Nível 3'],
apps: [{ name: 'Watch', icon: '/telecine.png ' }, { name: 'Skeelo', icon: '/HBO_MAX.PNG' },{ name: 'Skeelo', icon: '/Universal.png' }, { name: 'Skeelo', icon: '/cnn.svg' }, { name: 'Skeelo', icon: '/Lionsgate.png' }],  },
  {
    mega: '800',
    perfil: 'A experiência máxima. Tudo ao mesmo tempo, sem limites.',
    preco: '125,00',
    destaque: false,
    beneficios: ['Dual Band (2.4G e 5G)',
      'Download 800 Gbps',
      'Upload 400 Mbps',
      'Internet Ilimitada',
      'Instalação Grátis',
      'Wi-Fi 6 Grátis',
      'Atendimento Premium',
      'Suporte Nível 2'],
    apps: [{ name: 'Watch', icon: '/GloboNews.webp' }, { name: 'Skeelo', icon: '/HBO_MAX.PNG' },{ name: 'Skeelo', icon: '/espn-logo-5.png' }, { name: 'Skeelo', icon: '/cnn.svg' },{ name: 'Skeelo', icon: '/getv.png' }, { name: 'Skeelo', icon: '/sportv.png' }],
  }
];

const planosEmpresariais = [
  {
    mega: '500',
    perfil: 'Para pequenos negócios, lojas e escritórios.',
    preco: '119,90',
    destaque: false,
    beneficios: ['Wi-Fi 6 incluso', 'Banda simétrica', 'Suporte PJ em até 4h'],
  },
  {
    mega: '800',
    perfil: 'Alta demanda, transferência de grandes arquivos e sistemas em nuvem.',
    preco: '189,90',
    destaque: true,
    tag: 'Recomendado PJ',
    beneficios: ['IP Fixo Opcional', 'Banda simétrica', 'SLA Garantido'],
  },
  {
    mega: '1000',
    perfil: 'Conexão máxima para empresas robustas e servidores locais.',
    preco: '299,90',
    destaque: false,
    beneficios: ['IP Fixo Incluso', 'Rotas redundantes', 'Gerente de contas'],
  }
];

export default function Planos() {
  const [categoria, setCategoria] = useState<'residencial' | 'empresarial'>('residencial');

  const planosAtuais = categoria === 'residencial' ? planosResidenciais : planosEmpresariais;

  return (
    <section id="planos" className="relative py-[84px] bg-roxo-850 border-y border-linha max-[620px]:py-[60px]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-[30px] mb-8 flex-wrap">
          <div>
            <div className="eyebrow">Planos {categoria === 'residencial' ? 'Residenciais' : 'Empresariais'}</div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] mt-3.5 max-w-[20ch]">
              {categoria === 'residencial'
                ? 'Escolha a velocidade ideal para a sua casa.'
                : 'Conectividade de ponta a ponta para seu negócio.'}
            </h2>
          </div>
          <p className="text-cinza max-w-[42ch]">Todos os planos incluem roteador em comodato e instalação sujeita à viabilidade técnica.</p>
        </div>

        {/* SWITCH DE CATEGORIA */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A0128]/60 p-1.5 rounded-full inline-flex border border-linha-forte shadow-lg">
            <button
              onClick={() => setCategoria('residencial')}
              className={`py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 ${categoria === 'residencial'
                ? 'bg-amarelo text-[#1A0128]'
                : 'text-cinza hover:text-white'
                }`}
            >
              Para Você
            </button>
            <button
              onClick={() => setCategoria('empresarial')}
              className={`py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 ${categoria === 'empresarial'
                ? 'bg-amarelo text-[#1A0128]'
                : 'text-cinza hover:text-white'
                }`}
            >
              Para Empresas
            </button>
          </div>
        </div>

        <div className={`grid gap-5 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1 ${categoria === 'empresarial' ? 'grid-cols-3 max-w-5xl mx-auto' : 'grid-cols-3'}`}>
          {planosAtuais.map((plano, i) => (
            <div key={i} className={`relative flex flex-col p-[26px_22px_24px] rounded-raio border transition-all duration-220 hover:-translate-y-1.5 ${plano.destaque
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

              {/* LISTA DE BENEFÍCIOS */}
              <ul className="list-none mt-[18px] mb-4 p-0 grid gap-2 text-[0.86rem] text-[#DDD3EB]">
                {plano.beneficios.map((ben, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-magenta mt-2"></span>
                    {ben}
                  </li>
                ))}
              </ul>

              {/* GRADE DE ÍCONES DE APPS */}
              {plano.apps && plano.apps.length > 0 && (
                <div className="mb-6 w-full text-center border-t border-linha pt-4">
                  <p className="text-[10px] font-bold text-cinza uppercase tracking-widest mb-3">
                    Aplicativos Inclusos
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {plano.apps.map((appName, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-transparent hover:border-amarelo transition-colors"
                      >
                        <img
                          alt={`Logo do app ${appName.name}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          src={appName.icon}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto w-full">
                <a href="#viabilidade" className={`btn w-full ${plano.destaque ? 'btn-primario' : 'btn-linha'}`}>
                  Assinar agora
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[26px] text-[0.82rem] text-cinza max-w-[70ch] text-center mx-auto">
          * A velocidade anunciada de acesso e tráfego da internet é a nominal máxima, podendo sofrer variações decorrentes de fatores externos.
        </p>

        {/* APPS GERAIS */}
        <div id="apps" className="mt-14">
          <div className="eyebrow mb-6">Diversão e segurança na palma da mão</div>
          <div className="grid grid-cols-5 gap-4 mt-2 max-[980px]:grid-cols-3 max-[620px]:grid-cols-1">
            {[
              { title: 'Watch Brasil', desc: 'Séries e filmes', icon: '/watch.png' },
              { title: 'Skeelo', desc: 'Livros digitais', icon: '/skeelo.png' },
              { title: 'Kaspersky', desc: 'Antivírus completo', icon: '/kaspersky.png' },
              { title: 'Babbel', desc: 'Idiomas online', icon: '/babbel.png' },
              { title: 'Deezer', desc: 'Músicas e podcasts', icon: '/deezer.png' },
            ].map((app, i) => (
              <div key={i} className="border border-linha rounded-[14px] p-5 text-center bg-white/5 transition-all hover:border-amarelo hover:bg-amarelo/10">
                <b className="font-display text-[1rem] block">{app.title}</b>
                <span className="text-[0.78rem] text-cinza">{app.desc}</span>
                <img src={app.icon} alt={app.title} className="flex justify-center items-center mx-auto w-full h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}