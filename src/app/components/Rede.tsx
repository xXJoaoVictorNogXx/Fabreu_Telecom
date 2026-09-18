import Image from "next/image";

export default function Rede() {
  return (
    <section className="rede bg-roxo-850 py-[84px] border-y border-linha max-[620px]:py-[60px]">
      <div className="wrap grid grid-cols-[1fr_0.9fr] gap-14 items-center max-[980px]:grid-cols-1">
        <div>
          <div className="eyebrow">Rede 100% Fibra</div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] my-3.5">
            Tecnologia de ponta até o seu roteador.
          </h2>
          <p className="text-cinza mb-8">Nossa infraestrutura utiliza equipamentos de última geração e roteadores Wi-Fi 6 nos planos premium. Tudo para que você tenha menos latência (ping) e zero perdas de pacote.</p>
          <ul className="list-none m-0 p-0 grid gap-3.5">
            <li className="flex gap-4 items-start pb-4 border-b border-linha">
              <div className="w-[46px] h-[46px] flex-shrink-0 bg-roxo-700 rounded-[12px] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-amarelo stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                </svg>
              </div>
              <div>
                <b className="font-display text-[1.05rem] block mb-1">Roteadores Gigabit</b>
                <span className="text-[0.88rem] text-cinza">Equipamentos cedidos em comodato que aguentam múltiplos dispositivos.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start pb-4 border-b border-linha">
              <div className="w-[46px] h-[46px] flex-shrink-0 bg-roxo-700 rounded-[12px] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-amarelo stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <b className="font-display text-[1.05rem] block mb-1">Preço fixo, sem surpresas</b>
                <span className="text-[0.88rem] text-cinza">O valor que você contrata é o valor que você paga. Sem pegadinhas na fatura.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="img-rede rounded-raio overflow-hidden border border-linha shadow-[0_22px_44px_rgba(0,0,0,0.5)]">
          <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="Servidor de rede" width={800} height={500} className="w-full h-auto block transform hover:scale-105 transition-transform duration-[10s]" />
        </div>
      </div>
    </section>
  );
}
