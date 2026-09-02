'use client';

import { useState } from 'react';

const faqData = [
  {
    q: 'O que preciso para assinar?',
    a: 'Basta ter em mãos RG, CPF, comprovante de residência e ser maior de 18 anos. A assinatura pode ser feita via WhatsApp, sem burocracia.',
  },
  {
    q: 'Quanto tempo demora a instalação?',
    a: 'Geralmente instalamos em até 48 horas úteis após a aprovação do cadastro e confirmação de viabilidade no endereço.',
  },
  {
    q: 'O roteador é meu ou emprestado?',
    a: 'O roteador Wi-Fi é cedido em regime de comodato. Ou seja, você usa gratuitamente enquanto for cliente. Em caso de defeito natural, trocamos sem custo.',
  },
  {
    q: 'Existe fidelidade?',
    a: 'Sim, nossos planos possuem fidelidade padrão de 12 meses, que nos permite isentar a taxa de instalação e ceder o roteador gratuitamente.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="ajuda" className="py-[84px] max-[620px]:py-[60px]">
      <div className="wrap max-w-[800px] text-center">
        <div className="eyebrow justify-center mb-6">Dúvidas frequentes</div>
        
        <div className="grid gap-3.5 text-left">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border transition-colors duration-200 rounded-[14px] overflow-hidden ${
                  isOpen ? 'border-amarelo bg-white/5' : 'border-linha-forte bg-transparent hover:border-magenta hover:bg-white/2'
                }`}
              >
                <button 
                  className="w-full text-left font-display text-[1.1rem] font-semibold py-4 px-[22px] flex justify-between items-center bg-transparent border-none text-branco cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-[18px] h-[18px] stroke-amarelo stroke-2 fill-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div 
                  className="text-[0.88rem] text-[#DCD2EA] px-[22px] transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    paddingBottom: isOpen ? '20px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
