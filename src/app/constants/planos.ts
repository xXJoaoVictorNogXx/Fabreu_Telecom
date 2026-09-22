import { Plano } from "@/app/types/planosTypes";

export const planosResidenciais: Plano[] = [
  {
    mega: '1',
    perfil: 'A experiência máxima. Tudo ao mesmo tempo, sem limites.',
    preco: '149,90',
    destaque: false,
    beneficios: ['Dual Band (2.4G e 5G)',
      'Download 1000 Gbps',
      'Upload 500 Mbps',
      'Internet Ilimitada',
      'Instalação Grátis',
      'Wi-Fi 6 Grátis',
      'Atendimento Premium',
      'Suporte Nível 1'],
    apps: [{ name: 'Watch', icon: '/watch.png' }, { name: 'Watch', icon: '/Deezer.svg' }, { name: 'Skeelo', icon: '/HBO_Max.svg' }, { name: 'Skeelo', icon: '/ESPN.svg' }, { name: 'Skeelo', icon: '/fabreutv.png' }, { name: 'Skeelo', icon: '/Premiere.png' }, { name: 'Skeelo', icon: '/SporTV.svg' }, { name: 'Skeelo', icon: '/lev.png' }],
  },
  {
    mega: '500',
    perfil: 'Ideal para streaming, redes sociais e home office básico.',
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
    apps: [{ name: 'Watch', icon: '/watch.png' }, { name: 'Watch', icon: '/Deezer.svg' }, { name: 'Skeelo', icon: '/fabreutv.png' }, { name: 'Skeelo', icon: '/lev.png' }],
  },
  {
    mega: '800',
    perfil: 'Perfeito para famílias, vários dispositivos e jogos online.',
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
    apps: [{ name: 'Watch', icon: '/watch.png' }, { name: 'Watch', icon: '/Deezer.svg' }, { name: 'Skeelo', icon: '/HBO_Max.svg' }, { name: 'Skeelo', icon: '/ESPN.svg' }, { name: 'Skeelo', icon: '/fabreutv.png' }, { name: 'Skeelo', icon: '/Premiere.png' }, { name: 'Skeelo', icon: '/SporTV.svg' }, { name: 'Skeelo', icon: '/lev.png' }],
  }
];

export const planosEmpresariais: Plano[] = [
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


export const planosResidenciaisHome = [
  {
    mega: '500',
    percent: 50,
    beneficios: ['Download até 500 Mbps', 'Ping otimizado para jogos'],
  },
  {
    mega: '800',
    percent: 80,
    beneficios: ['Download até 800 Mbps', 'Ping otimizado para jogos'],
  },
  {
    mega: '1000',
    percent: 100,
    beneficios: ['Download até 1000 Mbps', 'Wi-Fi 6 de última geração'],
  }
];

export const planosEmpresariaisHome = [
  {
    mega: '500',
    percent: 50,
    beneficios: ['Banda simétrica', 'Suporte PJ em até 4h'],
  },
  {
    mega: '800',
    percent: 80,
    beneficios: ['Banda simétrica', 'SLA Garantido'],
  },
  {
    mega: '1000',
    percent: 100,
    beneficios: ['Rotas redundantes', 'Gerente de contas exclusivo'],
  }
];
