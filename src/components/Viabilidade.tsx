"use client";

import { useState } from 'react';

export default function Viabilidade() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    tipoInstalacao: 'Residencial',
    plano: 'Ainda não sei',
    referencia: '',
    lgpd: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.lgpd) {
      setStatus({
        type: 'error',
        message: 'Por favor, aceite a autorização dos dados conforme a LGPD para prosseguir.',
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/viabilidade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar consulta.');
      }

      setStatus({
        type: 'success',
        message: 'Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.',
      });

      // Limpa o formulário após envio bem sucedido
      setFormData({
        nome: '',
        whatsapp: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        tipoInstalacao: 'Residencial',
        plano: 'Ainda não sei',
        referencia: '',
        lgpd: false,
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Falha na conexão. Tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="viabilidade" className="relative py-[84px] max-[800px]:py-[60px] bg-roxo-900">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-12 items-center max-[980px]:grid-cols-1">
          <div>
            <div className="eyebrow">Consulta de Viabilidade</div>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] mt-3.5 mb-6 leading-[1.1] text-white">
              Veja se a fibra já passa<br />na sua rua.
            </h2>
            <p className="text-cinza mb-10 text-[1.05rem] max-w-[48ch]">
              Informe o endereço e a equipe técnica verifica a existência de caixa de atendimento disponível na região. A consulta não gera cobrança nem compromisso de assinatura.
            </p>

            <ul className="grid gap-8">
              {[
                { title: 'Você envia o endereço', desc: 'Leva menos de um minuto, sem cadastro.' },
                { title: 'A equipe checa a rede', desc: 'Conferimos a caixa mais próxima e a porta disponível.' },
                { title: 'Retornamos com a resposta', desc: 'Em até 1 dia útil, com prazo de instalação ou previsão de expansão.' },
              ].map((step, i) => (
                <li key={i} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amarelo to-magenta flex items-center justify-center font-bold text-roxo-900 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-display mb-1">{step.title}</h3>
                    <p className="text-cinza text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-b from-[#2d0554] to-[#20033c] p-8 sm:p-10 rounded-[24px] border border-roxo-600/40 shadow-2xl">
            {status && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-500/20 border border-rose-500/50 text-rose-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="grid gap-y-5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Nome Completo <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Como devemos te chamar"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    WhatsApp <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(99) 99999-9999"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="flex flex-col gap-1.5 sm:col-span-4">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    CEP
                  </label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    placeholder="65760-000"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                  <span className="text-[0.65rem] text-cinza/70">Preenche o endereço sozinho.</span>
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-6">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Rua ou Avenida <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="text"
                    name="rua"
                    required
                    value={formData.rua}
                    onChange={handleChange}
                    placeholder="Rua Coronel João Sena"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    N° <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="text"
                    name="numero"
                    required
                    value={formData.numero}
                    onChange={handleChange}
                    placeholder="479"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Bairro <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="text"
                    name="bairro"
                    required
                    value={formData.bairro}
                    onChange={handleChange}
                    placeholder="Centro"
                    className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Cidade <span className="text-magenta">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="cidade"
                      required
                      value={formData.cidade}
                      onChange={handleChange}
                      className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white w-full appearance-none focus:outline-none focus:border-amarelo transition-colors"
                    >
                      <option value="">Selecione a cidade</option>
                      <option value="Tuntum">Tuntum</option>
                      <option value="Presidente Dutra">Presidente Dutra</option>
                      <option value="Barra do Corda">Barra do Corda</option>
                      <option value="Outra">Outra cidade</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Tipo de Instalação
                  </label>
                  <div className="relative">
                    <select
                      name="tipoInstalacao"
                      value={formData.tipoInstalacao}
                      onChange={handleChange}
                      className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white w-full appearance-none focus:outline-none focus:border-amarelo transition-colors"
                    >
                      <option value="Residencial">Residencial</option>
                      <option value="Empresarial">Empresarial</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    Plano de Interesse
                  </label>
                  <div className="relative">
                    <select
                      name="plano"
                      value={formData.plano}
                      onChange={handleChange}
                      className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white w-full appearance-none focus:outline-none focus:border-amarelo transition-colors"
                    >
                      <option value="Ainda não sei">Ainda não sei</option>
                      <option value="500 Mega">500 Mega</option>
                      <option value="800 Mega">800 Mega</option>
                      <option value="1000 Mega">1000 Mega</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-bold uppercase tracking-wider text-white">
                  Ponto de Referência
                </label>
                <textarea 
                  rows={2}
                  name="referencia"
                  value={formData.referencia}
                  onChange={handleChange}
                  placeholder="Próximo à praça, casa de esquina, portão azul..." 
                  className="bg-roxo-900/60 border border-roxo-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-cinza focus:outline-none focus:border-amarelo transition-colors resize-none" 
                ></textarea>
              </div>

              <label className="flex items-start gap-3 mt-2 cursor-pointer consent">
                <input
                  type="checkbox"
                  name="lgpd"
                  checked={formData.lgpd}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-[0.75rem] text-cinza leading-snug">
                  Autorizo a Fabreu Telecom a usar os dados acima para verificar a viabilidade técnica e retornar o contato. Posso pedir a exclusão a qualquer momento pelo canal do encarregado, conforme a <a href="#" className="text-amarelo underline">LGPD</a>.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primario w-full sm:w-auto px-8 py-3.5 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-roxo-900 border-t-transparent"></span>
                      Enviando...
                    </>
                  ) : (
                    'Consultar viabilidade'
                  )}
                </button>
                <a href="tel:08000999800" className="text-sm font-bold text-white hover:text-amarelo transition-colors">
                  Prefiro ligar: 0800 099-9800
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

