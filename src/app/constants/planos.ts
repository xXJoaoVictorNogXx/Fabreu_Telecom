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
    apps: [ { name: 'Skeelo', icon: '/fabreutv.png' },{ name: 'Watch', icon: '/Deezer.svg' },{ name: 'Watch', icon: '/watch.png' },  { name: 'Skeelo', icon: '/lev.png' }],
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
    title: 'START',
    mega: '500',
    perfil: 'Pequenas empresas, escritórios e lojas.',
    preco: '149,90',
    destaque: false,
    beneficios: ['1 ONT', 'Até 50 acessos', 'Suporte em até 24h'],
  },
  {
    title: 'PLUS',
    mega: '500',
    perfil: 'Empresas de médio porte.',
    preco: '249,90',
    destaque: true,
    tag: 'Recomendado PJ',
    beneficios: ['1 Roteador + 1 AP', 'Até 128 acessos', 'Suporte em até 12h'],
  },
  {
    title: 'ULTRA',
    mega: '800',
    perfil: 'Empresas, escritórios com maior número de usuários.',
    preco: '329,90',
    destaque: false,
    beneficios: ['1 Roteador + 1 AP', 'Até 256 acessos', 'Suporte em até 08h'],
  },
  {
    title: 'GIGA',
    mega: '1',
    perfil: 'Empresas com alta utilização e grande demanda de rede.',
    preco: '399,90',
    destaque: false,
    beneficios: ['1 Roteador + 2 APs', 'Até 512 acessos', 'Suporte em até 04h'],
  }
];

export const comparativoEmpresarial = [
  { feature: 'Internet 100% Fibra Óptica', start: true, plus: true, ultra: true, giga: true },
  { feature: 'Internet ilimitada', start: true, plus: true, ultra: true, giga: true },
  { feature: 'Instalação e configuração grátis', start: true, plus: true, ultra: true, giga: true },
  { feature: 'Dual Band', start: '2.4G e 5G', plus: '2.4G e 5G', ultra: '2.4G e 5G', giga: '2.4G e 5G' },
  { feature: 'Rede Wi-Fi', start: 'Grátis', plus: 'Wi-Fi 6 Corporativa', ultra: 'Wi-Fi 6 Corporativa', giga: 'Wi-Fi 6 Corporativa' },
  { feature: 'Wi-Fi 6 para visitantes', start: false, plus: true, ultra: true, giga: true },
  { feature: 'Atendimento Premium', start: true, plus: true, ultra: true, giga: true },
  { feature: 'Suporte Técnico Empresarial', start: 'Nível 04 (Até 24h)', plus: 'Nível 03 (Até 12h)', ultra: 'Nível 02 (Até 08h)', giga: 'Nível 01 (Até 04h)' },
  { feature: 'Gerenciamento remoto', start: false, plus: false, ultra: true, giga: true },
  { feature: 'Monitoramento da conexão', start: false, plus: false, ultra: true, giga: true },
  { feature: 'Manutenção de equipamentos em comodato', start: false, plus: false, ultra: true, giga: true },
  { feature: 'Troca expressa de equipamentos', start: false, plus: false, ultra: true, giga: true },
  { feature: 'Equipamentos em comodato', start: '01 ONT', plus: '01 Roteador de Borda + 01 AP', ultra: '01 Roteador de Borda + 01 AP', giga: '01 Roteador de Borda + 01 ou 02 AP' },
  { feature: 'Acessos simultâneos', start: 'Até 50', plus: 'Até 128', ultra: 'Até 256', giga: 'Até 512' },
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
    mega: '1',
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
    mega: '1',
    percent: 100,
    beneficios: ['Rotas redundantes', 'Gerente de contas exclusivo'],
  }
];
