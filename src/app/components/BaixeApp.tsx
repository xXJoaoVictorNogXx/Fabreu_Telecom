"use client";

import React, { useState } from "react";
import { BaixeAppProps } from "../types/appFabreuTypes";

export default function BaixeApp({
  leftImage = "/04.png",
  centerImage = "/01.png",
  rightImage = "/02.png",
  googlePlayUrl = "https://play.google.com/store/apps/details?id=app.quark.fabreu&pcampaignid=web_share",
  appStoreUrl = "https://apps.apple.com/br/app/fabreu-telecom/id6746771813",
}: BaixeAppProps) {
  const [leftImgError, setLeftImgError] = useState(false);
  const [centerImgError, setCenterImgError] = useState(false);
  const [rightImgError, setRightImgError] = useState(false);

  return (
    <section id="fabreuapp" className="py-16 md:py-24 relative overflow-hidden">
      <div className="wrap">
        <div className="relative rounded-[28px] md:rounded-[36px] bg-gradient-to-r from-[#3B0766] via-[#5C169F] to-[#2D0452] p-8 sm:p-12 lg:p-14 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">

          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-magenta/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">

            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
              <div className="eyebrow mb-3 !text-amarelo uppercase tracking-[0.2em] text-xs font-bold">
                ASSUMA O CONTROLE!
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 font-display">
                Baixe o app agora
              </h2>

              <p className="text-[#E2D6F5] text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-normal">
                Com o app da Fabreu, você gerencia sua rede, acompanha o consumo, paga via PIX e ganha muito mais autonomia, direto do celular.
              </p>

              <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black/45 hover:bg-black/70 border border-white/20 hover:border-amarelo transition-all duration-300 backdrop-blur-md shadow-lg hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 512 512">
                    <path
                      fill="#EA4335"
                      d="M26.2 12.8C20 19.4 16 30 16 43.6v424.8c0 13.6 4 24.2 10.2 30.8l1.7 1.6 238-238v-5.6L27.9 11.2l-1.7 1.6z"
                    />
                    <path
                      fill="#FBBC04"
                      d="M344 335.2l-78.1-78.1v-5.6l78.1-78.1 1.9 1.1 92.5 52.6c26.4 15 26.4 39.6 0 54.6L345.9 334.1l-1.9 1.1z"
                    />
                    <path
                      fill="#455A64"
                      d="M345.9 334.1L265.9 254 27.9 492c8.8 9.3 22.9 10.4 38.6 1.5l279.4-159.4"
                    />
                    <path
                      fill="#34A853"
                      d="M345.9 334.1L66.5 493.5c-15.7 8.9-29.8 7.8-38.6-1.5L265.9 254l80 80.1z"
                    />
                    <path
                      fill="#4285F4"
                      d="M345.9 177.9L66.5 18.5C50.8 9.6 36.7 10.7 27.9 20L265.9 258l80-80.1z"
                    />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-white/70">
                      Disponível no
                    </span>
                    <span className="block text-base font-bold text-white font-display group-hover:text-amarelo transition-colors">
                      Google Play
                    </span>
                  </div>
                </a>

                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black/45 hover:bg-black/70 border border-white/20 hover:border-amarelo transition-all duration-300 backdrop-blur-md shadow-lg hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 fill-white flex-shrink-0 group-hover:fill-amarelo transition-colors" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-14.2 69.5-34.3z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-white/70">
                      Baixar na
                    </span>
                    <span className="block text-base font-bold text-white font-display group-hover:text-amarelo transition-colors">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

            </div>

            <div className="lg:col-span-7 xl:col-span-6 xl:col-start-7 relative flex justify-center items-center min-h-[360px] sm:min-h-[440px] mt-12 lg:mt-0">

              <div className="relative w-full max-w-[500px] flex items-center justify-center">

                <div className="absolute left-[15%] sm:left-[1%] top-4 z-10 w-[150px] sm:w-[185px] md:w-[210px] transform -rotate-12 -translate-x-4 hover:-rotate-6 hover:scale-105 transition-all duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
                  <PhoneFrame>
                    {!leftImgError ? (
                      <img
                        src={leftImage}
                        alt="App Speed Test Screen"
                        className="w-full h-full object-cover rounded-[28px]"
                        onError={() => setLeftImgError(true)}
                      />
                    ) : (
                      <MockupSpeedTestScreen />
                    )}
                  </PhoneFrame>
                </div>

                <div className="relative z-20 w-[170px] sm:w-[215px] md:w-[240px] transform hover:scale-105 transition-all duration-500 drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]">
                  <PhoneFrame isCenter>
                    {!centerImgError ? (
                      <img
                        src={centerImage}
                        alt="App Fabreu Dashboard Screen"
                        className="w-full h-full object-cover rounded-[28px]"
                        onError={() => setCenterImgError(true)}
                      />
                    ) : (
                      <MockupDashboardScreen />
                    )}
                  </PhoneFrame>
                </div>

                <div className="absolute right-[2%] sm:right-[1%] top-4 z-10 w-[150px] sm:w-[185px] md:w-[210px] transform rotate-12 translate-x-4 hover:rotate-6 hover:scale-105 transition-all duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
                  <PhoneFrame>
                    {!rightImgError ? (
                      <img
                        src={rightImage}
                        alt="App Fabreu Splash Screen"
                        className="w-full h-full object-cover rounded-[28px]"
                        onError={() => setRightImgError(true)}
                      />
                    ) : (
                      <MockupSplashScreen />
                    )}
                  </PhoneFrame>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({
  children,
  isCenter = false,
}: {
  children: React.ReactNode;
  isCenter?: boolean;
}) {
  return (
    <div
      className={`relative w-full aspect-[9/19] rounded-[34px] p-2 bg-gradient-to-b from-[#7A36CE] via-[#521C94] to-[#2B0952] border-2 border-purple-300/40 shadow-2xl ${isCenter ? "ring-4 ring-amarelo/30" : ""
        }`}
    >


      <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#180326]">
        {children}
      </div>
    </div>
  );
}


function MockupDashboardScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#310559] via-[#240340] to-[#1A0128] text-white p-3 flex flex-col pt-8 select-none">
      <div className="flex flex-col items-center mb-3">
        <div className="font-display font-extrabold text-lg text-white tracking-tight">
          fabreu
        </div>
        <div className="text-[7px] text-amarelo tracking-widest uppercase -mt-1 font-semibold">
          Conectando o que importa
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 mb-3">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 flex items-center gap-1.5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-amarelo animate-pulse" />
          <span className="text-[8px] font-semibold text-white/90">Conexão Wi-Fi</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 flex items-center gap-1.5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-verde" />
          <span className="text-[8px] font-semibold text-white/90">Desbloqueio</span>
        </div>
      </div>

      <div className="bg-white text-roxo-900 rounded-xl p-2.5 mb-3 shadow-lg">
        <div className="flex justify-between items-center text-[8px] font-bold text-roxo-800 border-b border-gray-100 pb-1 mb-1.5">
          <span>Contrato: 12582</span>
          <span>Serviço: Fibra</span>
        </div>
        <p className="text-[7px] text-gray-500 truncate mb-2">
          RUA MAGALHÃES DE ALMEIDA, CENTRO, PRES. DUTRA
        </p>

        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="block text-[7px] font-semibold text-gray-400">Fatura Aberta</span>
            <span className="text-xs font-black text-roxo-900">R$ 85,00</span>
          </div>
          <button className="bg-amarelo text-roxo-900 font-extrabold text-[8px] px-2.5 py-1 rounded-lg shadow-sm">
            Pagar Fatura
          </button>
        </div>

        <div className="bg-roxo-50 text-roxo-700 text-[7px] font-bold py-1 px-2 rounded text-center border border-roxo-100">
          Desbloqueio em Confiança
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mt-auto mb-2">
        <div className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center text-center">
          <div className="w-4 h-4 text-amarelo mb-0.5">💳</div>
          <span className="text-[7px] font-bold leading-tight">Segunda via</span>
        </div>
        <div className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center text-center">
          <div className="w-4 h-4 text-amarelo mb-0.5">📊</div>
          <span className="text-[7px] font-bold leading-tight">Consumo</span>
        </div>
        <div className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center text-center">
          <div className="w-4 h-4 text-amarelo mb-0.5">🚀</div>
          <span className="text-[7px] font-bold leading-tight">Teste Vel.</span>
        </div>
      </div>

      <div className="flex justify-around items-center pt-1.5 border-t border-white/10 text-white/60 text-[10px]">
        <span className="text-amarelo">🏠</span>
        <span>🔔</span>
        <span>👤</span>
        <span>🎧</span>
      </div>
    </div>
  );
}

function MockupSpeedTestScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#F2ECFD] to-[#E3D4FB] text-roxo-900 p-3 flex flex-col items-center justify-between pt-9 select-none">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-[8px] font-bold text-purple-800">10:45</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-magenta/20 grid place-items-center">
            <span className="text-[8px] font-black text-magenta">FAST</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-auto">
        <div className="relative w-28 h-28 grid place-items-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D1BCF0" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#8B2FC9"
              strokeWidth="8"
              strokeDasharray="251"
              strokeDashoffset="70"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-black text-roxo-900 font-display leading-none">
              320
            </span>
            <span className="text-[9px] font-bold text-purple-700 uppercase tracking-widest mt-0.5">
              Mbps
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-4 text-center">
          <div>
            <span className="block text-[7px] text-gray-500 font-semibold uppercase">Latency</span>
            <span className="text-[10px] font-black text-purple-900">4 ms</span>
          </div>
          <div>
            <span className="block text-[7px] text-gray-500 font-semibold uppercase">Upload</span>
            <span className="text-[10px] font-black text-purple-900">160 Mbps</span>
          </div>
        </div>
      </div>

      <div className="w-full text-center pb-2 border-t border-purple-200 pt-2">
        <span className="text-[8px] font-bold text-purple-800">Fabreu Telecom Fibra</span>
      </div>
    </div>
  );
}

function MockupSplashScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#400B75] via-[#5C169F] to-[#240340] text-white p-4 flex flex-col items-center justify-center text-center relative overflow-hidden select-none">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-magenta/30 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amarelo/20 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-magenta to-amarelo grid place-items-center mb-3 shadow-xl shadow-magenta/30">
          <svg className="w-8 h-8 stroke-roxo-900 stroke-[2.5] fill-none" viewBox="0 0 24 24">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeLinecap="round" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" strokeLinecap="round" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12.01" y2="20" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
        <h3 className="font-display font-black text-2xl tracking-tight text-white mb-0.5">
          fabreu
        </h3>
        <span className="text-[8px] font-bold text-amarelo uppercase tracking-[0.25em]">
          TELECOM
        </span>
      </div>
    </div>
  );
}
