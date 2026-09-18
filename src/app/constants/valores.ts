export interface ValorItem {
  id: string;
  title: string;
  description: string;
  iconName: 'proximidade' | 'excelencia' | 'compromisso' | 'transparencia' | 'melhoria';
}

export const SOBRE_FABREU_DATA = {
  historia: {
    eyebrow: "CONHEÇA A FABREU",
    titlePrefix: "Estamos transformando a conexão no ",
    titleHighlight: "coração do Maranhão",
    text: "O que começou como um sonho em Presidente Dutra ganhou força e velocidade. Hoje, a fibra da Fabreu rompe fronteiras, levando ultravelocidade também para Alto Alegre, Bacabal, Conceição do Lago Açu e Lago Verde. Nossa missão vai além de entregar internet; é sobre impulsionar o desenvolvimento e conectar nossa região ao mundo.",
    imagem: "/quem-somos1.png",
    imageAlt: "Equipe Fabreu Telecom",
  },
  filosofia: {
    titleHighlight: "Nossa Filosofia",
    text: "Não somos apenas uma empresa de tecnologia, somos seus vizinhos. Acreditamos que uma conexão de verdade se faz com proximidade. Por isso, investimos em infraestrutura de ponta sem perder a essência do atendimento olho no olho. Aqui, conhecemos nossa terra e sabemos exatamente do que você precisa.",
    imagem: "/quem-somos2.png",
    imageAlt: "Atendimento Fabreu Telecom",
  },
  valoresTitlePrefix: "Nossos ",
  valoresTitleHighlight: "Valores",
  valores: [
    {
      id: "proximidade",
      title: "Proximidade Real",
      description: "Você em primeiro lugar. Oferecemos um atendimento ágil e humano, focado em resolver suas necessidades com eficiência e cuidado real.",
      iconName: "proximidade",
    },
    {
      id: "excelencia",
      title: "Excelência Técnica",
      description: "Qualidade garantida. Mantemos padrões rigorosos em nossa infraestrutura para assegurar a melhor experiência e desempenho para você.",
      iconName: "excelencia",
    },
    {
      id: "compromisso",
      title: "Compromisso",
      description: "Palavra dada é palavra cumprida. Construímos nossa história baseada na responsabilidade e no cumprimento rigoroso dos nossos prazos e acordos.",
      iconName: "compromisso",
    },
    {
      id: "transparencia",
      title: "Transparência Total",
      description: "Clareza e honestidade. Acreditamos em relações verdadeiras, sem letras miúdas ou surpresas. Tudo é comunicado de forma simples e direta.",
      iconName: "transparencia",
    },
    {
      id: "melhoria",
      title: "Melhoria Contínua",
      description: "Evoluindo sempre. Não nos acomodamos. Buscamos constantemente novas soluções e aprimoramentos para superar as suas expectativas.",
      iconName: "melhoria",
    },
  ] as ValorItem[],
};
