export default function Conformidade() {
  return (
    <section className="bg-roxo-850 py-[84px] border-y border-linha max-[620px]:py-[60px]">
      <div className="wrap">
        <div className="bg-[#100019] rounded-[22px] border border-linha-forte p-11 max-[620px]:p-[30px_20px]">
          <div className="grid grid-cols-[1.5fr_1fr] gap-11 items-center max-[980px]:grid-cols-1">
            <div>
              <h3 className="font-display text-[1.8rem] tracking-tight mb-3">Licença e Conformidade</h3>
              <p className="text-[0.9rem] text-cinza max-w-[60ch]">
                A Fabreu Telecom opera rigorosamente dentro da lei, possuindo todas as licenças exigidas pela <strong>Anatel (Agência Nacional de Telecomunicações)</strong>. Isso garante a você a segurança de estar contratando um provedor legalizado, que entrega exatamente a banda contratada e obedece às normas brasileiras de segurança e privacidade (LGPD).
              </p>
            </div>
            <div className="text-right max-[980px]:text-left">
              <span className="font-display text-[1rem] block text-amarelo font-bold tracking-[0.06em] uppercase mb-1">Ato de Autorização Anatel</span>
              <b className="font-display text-[2.2rem] block tracking-tight">Nº 12.345/2020</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
