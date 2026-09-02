export default function Cobertura() {
  return (
    <section id="cobertura" className="py-[84px] max-[620px]:py-[60px]">
      <div className="wrap grid grid-cols-2 gap-11 items-center max-[980px]:grid-cols-1">
        <div>
          <div className="eyebrow">Onde estamos</div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] my-3.5">
            Maranhão conectado.
          </h2>
          <p className="text-cinza mb-8">Nossa rede óptica chega até a porta da sua casa. Consulte a disponibilidade técnica no seu bairro e venha para a Fabreu.</p>
          <div className="flex gap-[14px]">
            <a id="ctaCobertura" className="btn btn-primario" href="#viabilidade">Consultar cobertura na minha rua</a>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            { c: 'Presidente Dutra', v: 'Viabilidade total' },
            { c: 'Bacabal', v: 'Viabilidade total' },
            { c: 'Alto Alegre do Maranhão', v: 'Expansão em andamento' },
            { c: 'Lago Verde', v: 'Viabilidade total' },
            { c: 'Conceição do Lago-Açu', v: 'Viabilidade parcial' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 py-4 px-4 rounded-[14px] border border-linha bg-white/5">
              <div className="w-[10px] h-[10px] rounded-full bg-verde shadow-[0_0_0_5px_rgba(137,190,58,0.16)] flex-shrink-0"></div>
              <b className="font-display text-[1rem]">{item.c}</b>
              <span className="ml-auto text-[0.8rem] text-cinza">{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
