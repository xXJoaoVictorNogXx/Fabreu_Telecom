export default function Conformidade() {
  return (
    <section className="bg-[#100019] py-20 border-y border-linha">
      <div className="wrap">
        <div className="mb-12 flex gap-4 max-[800px]:flex-col">
          <div className="flex-1">
            <span className="text-amarelo font-bold tracking-[0.1em] uppercase text-[0.8rem] block mb-4 flex items-center gap-4 before:content-[''] before:block before:w-8 before:h-[2px] before:bg-roxo-500">CONFORMIDADE</span>
            <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-tight">Regulada, auditável e<br/>responsável pelos seus dados.</h2>
          </div>
          <div className="flex-1 flex items-end pb-2">
            <p className="text-[#DCD2EA] text-[1rem] leading-relaxed max-w-[45ch]">Ser provedor de internet no Brasil é atividade regulada. Estas são as regras que seguimos e o que elas garantem na prática para quem assina.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1 ">
          <div className="border border-linha-forte rounded-2xl p-8 flex gap-6 max-[500px]:flex-col hover:scale-101 hover:shadow-2xl hover:shadow-roxo-500/50 hover:-translate-y-1 ">
            <div className="w-[80px] h-[80px] bg-roxo-800 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-amarelo font-bold text-[0.8rem] tracking-wider">ANATEL</span>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] mb-1">Prestadora autorizada de SCM</h3>
              <p className="text-roxo-400 font-bold text-[0.75rem] tracking-wider mb-3 uppercase">LEI 9.472/1997 - RESOLUÇÃO 614/2013</p>
              <p className="text-[0.95rem] text-[#DCD2EA] leading-relaxed">Operamos o Serviço de Comunicação Multimídia sob outorga da Anatel, com plano de serviço registrado, recolhimento de taxas setoriais e envio periódico de dados de qualidade e acessos à Agência.</p>
            </div>
          </div>

          <div className="border border-linha-forte rounded-2xl p-8 flex gap-6 max-[500px]:flex-col hover:scale-101 hover:shadow-2xl hover:shadow-roxo-500/50 hover:-translate-y-1">
            <div className="w-[80px] h-[80px] bg-roxo-800 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-amarelo font-bold text-[0.8rem] tracking-wider">RGC</span>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] mb-1">Direitos do consumidor</h3>
              <p className="text-roxo-400 font-bold text-[0.75rem] tracking-wider mb-3 uppercase">RESOLUÇÃO 765/2023 - VIGENTE DESDE 09/2025</p>
              <p className="text-[0.95rem] text-[#DCD2EA] leading-relaxed">Contrato e plano de serviço disponíveis antes da adesão, protocolo em todo atendimento, prazos definidos para reparo e resposta a reclamações, e regras claras de suspensão, reajuste e cancelamento — sem letra miúda.</p>
            </div>
          </div>

          <div className="border border-linha-forte rounded-2xl p-8 flex gap-6 max-[500px]:flex-col hover:scale-101 hover:shadow-2xl hover:shadow-roxo-500/50 hover:-translate-y-1 ">
            <div className="w-[80px] h-[80px] bg-roxo-800 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-amarelo font-bold text-[0.8rem] tracking-wider">R-CIBER</span>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] mb-1">Segurança cibernética da rede</h3>
              <p className="text-roxo-400 font-bold text-[0.75rem] tracking-wider mb-3 uppercase">RESOLUÇÃO 740/2020, ALTERADA PELA 767/2024</p>
              <p className="text-[0.95rem] text-[#DCD2EA] leading-relaxed">Política de segurança cibernética aplicada à rede e às infraestruturas críticas, com tratamento de vulnerabilidades nos equipamentos cedidos ao cliente — senha individual por CPE, gestão de firmware e desativação de acesso remoto não autorizado.</p>
            </div>
          </div>

          <div className="border border-linha-forte rounded-2xl p-8 flex gap-6 max-[500px]:flex-col hover:scale-101 hover:shadow-2xl hover:shadow-roxo-500/50 hover:-translate-y-1 ">
            <div className="w-[80px] h-[80px] bg-roxo-800 rounded-xl flex items-center justify-center shrink-0 flex-col leading-none gap-1">
              <span className="text-amarelo font-bold text-[0.8rem] tracking-wider">LGPD</span>
              <span className="text-amarelo font-bold text-[0.8rem] tracking-wider">ANPD</span>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] mb-1">Proteção de dados pessoais</h3>
              <p className="text-roxo-400 font-bold text-[0.75rem] tracking-wider mb-3 uppercase">LEI 13.709/2018 - LEI 12.965/2014</p>
              <p className="text-[0.95rem] text-[#DCD2EA] leading-relaxed">Coletamos apenas o necessário para prestar o serviço e cobrar por ele. Registros de conexão são guardados pelo prazo legal do Marco Civil e só são entregues mediante ordem judicial. Incidentes relevantes são comunicados à ANPD e aos titulares afetados.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border border-linha-forte bg-roxo-900/50 rounded-2xl p-8 flex items-center justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start">
          <div className="flex-1">
            <h3 className="font-display text-[1.3rem] mb-2">Encarregado pelo tratamento de dados (DPO)</h3>
            <p className="text-[0.95rem] text-[#DCD2EA] leading-relaxed">Para solicitar acesso, correção, portabilidade ou exclusão dos seus dados, revogar consentimento ou relatar um incidente de segurança, fale direto com nosso encarregado.</p>
          </div>
          <div className="flex gap-4 max-[500px]:flex-col max-[500px]:w-full">
            <a href="mailto:privacidade@fabreutelecom.net.br" className="bg-amarelo text-[#100019] font-bold px-6 py-4 rounded-full text-[0.95rem] hover:bg-white transition-colors max-[500px]:text-center">privacidade@fabreutelecom.net.br</a>
            <a href="#" className="border border-linha-forte text-white font-bold px-6 py-4 rounded-full text-[0.95rem] hover:bg-white/5 transition-colors max-[500px]:text-center">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </section>
  );
}
