import React from 'react';
import { useNavigate } from 'react-router';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const monogramImage = new URL("../../assets/f74998135538d1e201edcdd431ab6a90bfe63f4b.png", import.meta.url).href;

  return (
    <div className="bg-[#d4cfc4] min-h-screen w-full flex items-center justify-center px-4 sm:px-0" data-name="iPhone 16 - 59">
      <div className="relative w-full max-w-[393px] md:max-w-[520px] lg:max-w-[600px] flex flex-col items-center pt-40 pb-20 md:py-28 lg:py-32 space-y-8 md:space-y-10 lg:space-y-12">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 md:top-8 md:right-0 lg:top-10 z-20">
          <LanguageSwitcher />
        </div>
        {/* Logo/Monogram */}
        <div className="w-[284px] md:w-[360px] lg:w-[420px] max-w-full h-[200px] md:h-[260px] lg:h-[300px]">
          <img
            alt="Nataly + David Monogram"
            className="w-full h-full object-cover pointer-events-none"
            src={monogramImage}
          />
        </div>

        {/* Names */}
        <p
          className="font-['Marcellus:Regular',sans-serif] leading-[21px] md:leading-[28px] not-italic text-[#7b7468] text-[14px] md:text-[18px] lg:text-[20px] text-center uppercase"
          style={{
            letterSpacing: '0.7em',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {t('home.names', lang)}
        </p>

        {/* Day Selection Buttons */}
        <div className="w-full max-w-[265.34px] md:max-w-[360px] lg:max-w-[420px]">
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <button
              onClick={() => navigate('/martes')}
              className="h-[36px] md:h-[44px] lg:h-[48px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] md:text-[14px] lg:text-[15px] text-center tracking-[0.6px] uppercase">{t('home.day.tuesday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/viernes')}
              className="h-[36px] md:h-[44px] lg:h-[48px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] md:text-[14px] lg:text-[15px] text-center tracking-[0.6px] uppercase">{t('home.day.friday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/sabado')}
              className="h-[36px] md:h-[44px] lg:h-[48px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] md:text-[14px] lg:text-[15px] text-center tracking-[0.6px] uppercase">{t('home.day.saturday', lang)}</p>
            </button>

            <button
              onClick={() => navigate('/domingo')}
              className="h-[36px] md:h-[44px] lg:h-[48px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{
                boxSizing: 'border-box',
                border: '2px solid #8A8579',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '11184800px',
                backgroundColor: '#d4cfc4',
              }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] md:text-[14px] lg:text-[15px] text-center tracking-[0.6px] uppercase">{t('home.day.sunday', lang)}</p>
            </button>
          </div>
        </div>

        {/* Info Button */}
        <button
          onClick={() => navigate('/info')}
          className="mx-auto cursor-pointer z-10 transition-transform hover:scale-105 active:scale-95 w-[111.32px] md:w-[140px] lg:w-[160px] h-[36px] md:h-[44px] lg:h-[48px]"
          style={{
            boxSizing: 'border-box',
            border: '2px solid #8A8579',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '11184800px',
            backgroundColor: '#d4cfc4',
          }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#7b7468] text-[12px] md:text-[14px] lg:text-[15px] text-center tracking-[0.6px] uppercase">
            {t('home.more_info', lang)}
          </p>
        </button>
      </div>
    </div>
  );
}
