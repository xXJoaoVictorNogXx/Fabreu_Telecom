import { ViabilidadeData } from "../types/viabilidadeTypes";

    export const enviarConsultaViabilidade = async (formData: ViabilidadeData) => {
     const res = await fetch('/api/viabilidade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar consulta.');
      }


    }