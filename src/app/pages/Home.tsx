import React from 'react';
import { useNavigate } from 'react-router';
import imgScreenshot20260130At81615Pm1 from "figma:asset/f74998135538d1e201edcdd431ab6a90bfe63f4b.png";
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  return (
    <div className="bg-[#d4cfc4] min-h-screen w-full flex items-center justify-center px-4 sm:px-0" data-name="iPhone 16 - 59">
      <div className="relative w-full max-w-[393px] flex flex-col items-center py-20 space-y-8">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-20">
          <LanguageSwitcher />
        </div>
        {/* Logo/Monogram */}
        <div className="w-[284px] max-w-full h-[200px]">
          <img
            alt="Nataly + David Monogram"
            className="w-full h-full object-cover pointer-events-none"
            src={imgScreenshot20260130At81615Pm1}
          />
        </div>

        {/* Names */}
        <p
          className="font-['Marcellus:Regular',sans-serif] leading-[21px] not-italic text-[#7b7468] text-[14px] text-center uppercase"
          style={{
            letterSpacing: '0.7em',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {t('home.names', lang)}
        </p>

        {/* Day Selection Buttons */}
        <div className="w-full max-w-[265.34px]">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/martes')}
              className="h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] text-center tracking-[0.6px] uppercase">{t('home.day.tuesday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/viernes')}
              className="h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] text-center tracking-[0.6px] uppercase">{t('home.day.friday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/sabado')}
              className="h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] text-center tracking-[0.6px] uppercase">{t('home.day.saturday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/domingo')}
              className="h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] text-center tracking-[0.6px] uppercase">{t('home.day.sunday', lang)}</p>
            </button>
          </div>
        </div>

        {/* Info Button */}
        <button
          onClick={() => navigate('/info')}
          className="mx-auto cursor-pointer z-10 transition-transform hover:scale-105 active:scale-95"
          style={{
            boxSizing: 'border-box',
            width: '111.32px',
            height: '36px',
            border: '2px solid #8A8579',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '11184800px',
            backgroundColor: '#d4cfc4',
          }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] text-center tracking-[0.6px] uppercase">
            {t('home.more_info', lang)}
          </p>
        </button>
      </div>
    </div>
  );
}
