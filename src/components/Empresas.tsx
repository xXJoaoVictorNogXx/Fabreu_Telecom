import Image from "next/image";
import Link from "next/link";

export default function Empresas() {
  return (
    <section id="empresas" className="py-[84px] max-[620px]:py-[60px]">
      <div className="wrap grid grid-cols-2 gap-11 items-center max-[980px]:grid-cols-1">
        <div className="img-rede rounded-raio overflow-hidden border border-linha max-[980px]:order-2">
          <Image src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800" alt="Reunião de negócios" width={800} height={500} className="w-full h-auto block transform hover:scale-105 transition-transform duration-[10s]" />
        </div>
        <div className="max-[980px]:order-1">
          <div className="eyebrow">Link Dedicado e PME</div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] my-3.5">
            Sua empresa não pode parar.
          </h2>
          <p className="text-cinza mb-8">Oferecemos soluções corporativas, link dedicado 100% garantido e IP fixo para empresas que necessitam de alta disponibilidade e SLAs agressivos.</p>
          <div className="flex gap-[14px]">
            <Link className="btn btn-linha" href="#falar-consultor">Falar com um consultor B2B</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
