import { AppIncluso } from "./appsTypes";


export type Plano = {
  title?: string;
  mega: string;
  perfil: string;
  preco: string;
  destaque: boolean;
  beneficios: string[];
  tag?: string;
  apps?: AppIncluso[];
};

