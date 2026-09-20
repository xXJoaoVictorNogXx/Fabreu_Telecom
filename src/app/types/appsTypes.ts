export type CategoriaApp = 'todos' | 'canais abertos' | 'esporte' | 'educação' | 'entretenimento' | 'jornalismo' | 'kids';

export type AppCanal = {
  title: string;
  desc: string;
  icon: string;
  categoria: CategoriaApp;
};

export type AppIncluso = {
  name: string;
  icon: string;
};