'use client';

import { useState } from 'react';

const cidades = {
  'presidente-dutra': 'Presidente Dutra',
  'bacabal': 'Bacabal',
  'alto-alegre': 'Alto Alegre do Maranhão',
  'lago-verde': 'Lago Verde',
  'conceicao': 'Conceição do Lago-Açu',
};

export default function Topbar() {
  const [cidade, setCidade] = useState('presidente-dutra');

  return (
    <div className="bg-roxo-850 border-b border-linha text-[0.82rem] text-cinza">
      <div className="wrap flex gap-[18px] items-center justify-between min-h-[42px] flex-wrap max-sm:justify-center max-sm:text-center">
        <div className="flex items-center gap-2">
          <label htmlFor="cidade">Sua cidade:</label>
          <select
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="bg-roxo-700 text-branco border border-linha-forte rounded-full py-[5px] px-3 font-corpo text-[0.82rem] cursor-pointer focus-visible:outline-amarelo"
          >
            {Object.entries(cidades).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-[18px] items-center max-sm:hidden">
          <span>Central de atendimento <strong className="text-branco font-semibold">0800 099-9800</strong></span>
          <a href="tel:5599984227474" className="hover:text-amarelo transition-colors">(99) 98422-7474</a>
        </div>
      </div>
    </div>
  );
}
