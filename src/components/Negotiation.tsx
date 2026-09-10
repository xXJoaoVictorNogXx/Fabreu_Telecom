import React from 'react';

export default function Negotiation() {
  return (
    <section className="relative py-24 bg-[var(--color-roxo-900)] border-t border-[var(--color-linha)]">
      <div className="wrap relative z-10">

        {/* Bloco 1: Hero de Negociação */}
        <div className="bg-gradient-to-br from-[var(--color-roxo-800)] to-[var(--color-roxo-900)] rounded-[32px] p-8 md:p-14 border border-[var(--color-linha)] mb-8 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-linha-forte)] bg-[var(--color-roxo-850)] text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[var(--color-cinza)] mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-amarelo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            Relação de confiança e parceria
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Facilitamos as coisas para você<br />
            <span className="text-[var(--color-amarelo)]">Vamos resolver juntos?</span>
          </h2>
          <p className="text-lg text-[var(--color-cinza)] max-w-2xl leading-relaxed">
            Sabemos que imprevistos acontecem na rotina de qualquer um. Na Fabreu Telecom, você não é apenas mais um contrato — nós valorizamos a sua parceria. Nosso time de negociação amigável está pronto para te ouvir e construir um acordo flexível, sem burocracia e que caiba perfeitamente no seu bolso.
          </p>
        </div>

        {/* Bloco 2: Por que fazer um acordo */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 mb-6 text-[var(--color-roxo-900)] shadow-xl">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-amarelo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Por que fazer um acordo amigável conosco?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-amarelo)] bg-orange-50 flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Sem Constrangimento</h4>
                <p className="text-sm text-gray-600">Conversas discretas e atendimento totalmente humanizado focado em soluções.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-amarelo)] bg-orange-50 flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Parcelamento Facilitado</h4>
                <p className="text-sm text-gray-600">Divida seus débitos pendentes em opções flexíveis no boleto, cartão ou PIX.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-amarelo)] bg-orange-50 flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Isenção de Juros</h4>
                <p className="text-sm text-gray-600">Condições de desconto sob medida para quitação integral das suas faturas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-amarelo)] bg-orange-50 flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Sua Conexão Ativa</h4>
                <p className="text-sm text-gray-600">Garantimos o restabelecimento ágil do seu sinal de internet após o primeiro pagamento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3: Contatos Diretos (WhatsApp / Telefone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-[32px] p-8 text-[var(--color-roxo-900)] flex flex-col h-full shadow-xl">
            <div className="w-14 h-14 bg-green-50 text-[#00C37B] rounded-full flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Fale pelo WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">Negocie de forma rápida, privada e receba as faturas direto no celular.</p>
            <a href="https://wa.me/559984637356" target="_blank" rel="noopener noreferrer" className="w-full text-center py-4 rounded-xl font-bold text-white bg-[#00D084] hover:bg-[#00b370] transition-colors">
              Iniciar Conversa
            </a>
          </div>

          {/* Telefone Card */}
          <div className="bg-white rounded-[32px] p-8 text-[var(--color-roxo-900)] flex flex-col h-full shadow-xl">
            <div className="w-14 h-14 bg-purple-50 text-[var(--color-roxo-600)] rounded-full flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Central de Cobrança</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">Ligue gratuitamente para nossa central exclusiva de acordos de faturas.</p>
            <a href="tel:08000999800" className="w-full text-center py-4 rounded-xl font-bold text-[var(--color-roxo-900)] bg-[var(--color-amarelo)] hover:bg-[#e5a022] transition-colors">
              0800 099-9800
            </a>
          </div>
        </div>

        {/* Bloco 4: Horários e Informações extras */}
        <div className="bg-[var(--color-roxo-800)] border border-[var(--color-linha)] rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-roxo-900)] rounded-full flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <h4 className="font-bold text-white">Horário de Atendimento do Setor</h4>
              <p className="text-sm text-[var(--color-cinza)]">Seg a Sex: 07h30 às 19h | Sáb: 07h30 às 13h</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-[var(--color-linha-forte)]"></div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-roxo-900)] rounded-full flex items-center justify-center text-[var(--color-amarelo)] shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <h4 className="font-bold text-white">Contato p/ Comprovantes</h4>
              <p className="text-sm text-[var(--color-cinza)]">559984637356</p>
            </div>
          </div>
        </div>

        {/* Bloco 5: Como funciona (Steps) */}
        <div className="bg-[var(--color-roxo-850)] border border-[var(--color-linha-forte)] rounded-[32px] p-8 md:p-14 text-center shadow-2xl">
          <span className="eyebrow justify-center mb-4 text-[var(--color-amarelo)]">Processo Sem Mistérios</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona o nosso acordo amigável?</h2>
          <p className="text-[var(--color-cinza)] mb-12 max-w-2xl mx-auto">Garantimos um caminho sem barreiras para manter o seu lar ou empresa conectados.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="relative">
              <div className="w-14 h-14 bg-[var(--color-roxo-900)] border border-[var(--color-linha-forte)] rounded-full flex items-center justify-center font-display font-bold text-[var(--color-amarelo)] text-xl mb-6">01</div>
              <h4 className="font-bold mb-2 text-lg">Chame no chat</h4>
              <p className="text-sm text-[var(--color-cinza)]">Você escolhe o canal que achar mais confortável para falar. Nosso time está de braços abertos.</p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 bg-[var(--color-roxo-900)] border border-[var(--color-linha-forte)] rounded-full flex items-center justify-center font-display font-bold text-[var(--color-amarelo)] text-xl mb-6">02</div>
              <h4 className="font-bold mb-2 text-lg">Montamos a proposta</h4>
              <p className="text-sm text-[var(--color-cinza)]">Analisamos suas faturas em aberto e propomos parcelas que caibam perfeitamente na sua rotina.</p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 bg-[var(--color-roxo-900)] border border-[var(--color-linha-forte)] rounded-full flex items-center justify-center font-display font-bold text-[var(--color-amarelo)] text-xl mb-6">03</div>
              <h4 className="font-bold mb-2 text-lg">Fechamos o acordo</h4>
              <p className="text-sm text-[var(--color-cinza)]">O boleto ou chave PIX é gerado na hora, de forma transparente, para você fazer o primeiro pagamento.</p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 bg-[var(--color-roxo-900)] border border-[var(--color-linha-forte)] rounded-full flex items-center justify-center font-display font-bold text-[var(--color-amarelo)] text-xl mb-6">04</div>
              <h4 className="font-bold mb-2 text-lg">Sua Conexão Segue!</h4>
              <p className="text-sm text-[var(--color-cinza)]">Com o primeiro pagamento do acordo identificado, o seu sinal é reativado para você continuar navegando com ultravelocidade.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
