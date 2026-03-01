import React from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-6ik3w4qarz";
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Icon() {
  return (
    <div className="absolute h-[852px] left-0 top-0 w-[128px]" data-name="Icon">
      <div className="absolute inset-[0_0_-0.94%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 860">
          <g clipPath="url(#clip0_1_214)" filter="url(#filter0_d_1_214)" id="Icon" opacity="0.6">
            <path d={svgPaths.p28781480} id="Vector" opacity="0.8" stroke="var(--stroke-0, #A0A0A0)" strokeWidth="3" />
            <path d={svgPaths.p28405c00} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #B5B5B5)" strokeWidth="3" />
            <path d={svgPaths.p165b8100} id="Vector_3" opacity="0.95" stroke="var(--stroke-0, #CACACA)" strokeWidth="3" />
            <path d={svgPaths.p3c6970d8} id="Vector_4" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="3" />
            <path d={svgPaths.pe343e00} id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="3" />
            <path d={svgPaths.p2806d4dc} id="Vector_6" opacity="0.9" stroke="var(--stroke-0, #FAFAFA)" strokeWidth="2.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="860" id="filter0_d_1_214" width="136" x="-4" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_214" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_214" mode="normal" result="shape" />
            </filter>
            <clipPath id="clip0_1_214">
              <rect fill="white" height="852" width="128" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Domingo() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const sundayBackground = new URL("../../assets/029be0e6109999263a78b56bc4501195fc372211.png", import.meta.url).href;

  return (
    <div
      className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-screen w-full flex items-start justify-center px-4 sm:px-0 overflow-hidden"
      data-name="iPhone 16 - 61"
      style={{
        backgroundImage: `url(${sundayBackground})`,
        backgroundSize: "574px 861px",
        backgroundRepeat: "repeat",
        backgroundPosition: "left top",
        backgroundColor: "#d4c4a8",
      }}
    >
      {/* Warm golden overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(232, 220, 198, 0.3), rgba(218, 195, 165, 0.2))",
          mixBlendMode: "multiply",
        }}
      />
      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden md:flex flex-col min-h-screen w-full max-w-[1200px] mx-auto relative px-8 lg:px-16 z-10">
        {/* Decorative Icon */}
        <div className="absolute right-8 top-0 w-[128px] h-[852px] opacity-40 pointer-events-none">
          <Icon />
        </div>

        {/* Top Bar */}
        <div className="flex items-center justify-between pt-8 lg:pt-10 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="font-['Inter'] font-medium text-sm text-[#717070] uppercase tracking-wide hover:text-[#4a4a4a] transition-all duration-300"
          >
            {t('common.inicio', lang)}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Centered Content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <h2 className="font-['Marcellus'] text-3xl lg:text-4xl xl:text-5xl text-[#717070] uppercase tracking-wider">
              {t('domingo.afternoon_at_beach', lang)}
            </h2>
            <div className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide space-y-1">
              <p className="mb-0">{t('domingo.date', lang)}</p>
              <p className="mb-0">{t('domingo.time_range', lang)}</p>
            </div>
            <div className="font-['Lexend_Zetta'] text-sm lg:text-base text-[#717070] uppercase tracking-wide leading-relaxed">
              <p className="mb-0">{t('domingo.sofitel_baru', lang).split(' ').slice(0, 2).join(' ')}</p>
              <p className="mb-0">{t('domingo.sofitel_baru', lang).split(' ').slice(2).join(' ')}</p>
            </div>
            <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide pt-2">
              {t('common.rsvp', lang)}
            </p>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="md:hidden relative w-full max-w-[393px] z-10">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-30">
          <LanguageSwitcher />
        </div>
        {/* Background Icon inside content frame */}
        <div className="absolute right-0 top-0 w-[128px] h-[852px] opacity-60 pointer-events-none">
          <Icon />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Inicio button (position can stay flexible) */}
          <button
            onClick={() => navigate('/')}
            className="absolute bg-transparent text-[#717070] font-['Inter:Medium',sans-serif] text-[12px] tracking-[0.6px] uppercase cursor-pointer hover:opacity-70 transition-opacity left-4 top-4"
          >
            {t('common.inicio', lang)}
          </button>

          {/* tarde en la playa */}
          <p
            className="absolute"
            style={{
              width: "246px",
              height: "16px",
              left: "64px",
              top: "313px",
              fontFamily: "Marcellus",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#717070",
            }}
          >
            {t('domingo.afternoon_at_beach', lang)}
          </p>

          {/* domingo 12 de julio 3-6 pm */}
          <div
            className="absolute"
            style={{
              width: "274px",
              height: "32px",
              left: "64px",
              top: "355px",
              fontFamily: "Marcellus",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#717070",
            }}
          >
            <p className="mb-0">{t('domingo.date', lang)}</p>
            <p className="mb-0">{t('domingo.time_range', lang)}</p>
          </div>

          {/* SOFITEL BARÚ cartagena BEACH RESORT */}
          <div
            className="absolute"
            style={{
              width: "228px",
              height: "80px",
              left: "69px",
              top: "413px",
              fontFamily: "Lexend Zetta",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#717070",
            }}
          >
            <p className="mb-0">{t('domingo.sofitel_baru', lang).split(' ').slice(0, 2).join(' ')}</p>
            <p className="mb-0">{t('domingo.sofitel_baru', lang).split(' ').slice(2).join(' ')}</p>
          </div>

          {/* r.s.v.p. */}
          <p
            className="absolute"
            style={{
              width: "274px",
              height: "16px",
              left: "71px",
              top: "485px",
              fontFamily: "Marcellus",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#717070",
            }}
          >
            {t('common.rsvp', lang)}
          </p>
        </div>
      </div>
    </div>
  );
}
