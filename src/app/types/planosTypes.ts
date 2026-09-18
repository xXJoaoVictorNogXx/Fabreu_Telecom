import { AppIncluso } from "./appsTypes";


export type Plano = {
  mega: string;
  perfil: string;
  preco: string;
  destaque: boolean;
  beneficios: string[];
  tag?: string;
  apps?: AppIncluso[];
};

