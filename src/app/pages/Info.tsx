import React from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-re7w63dzsq";
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Icon() {
  return (
    <div className="absolute h-[852px] right-0 top-0 w-[128px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 852">
        <g clipPath="url(#clip0_1_239)" id="Icon" opacity="0.6">
          <path d={svgPaths.p28781480} id="Vector" opacity="0.8" stroke="var(--stroke-0, #A0A0A0)" strokeWidth="3" />
          <path d={svgPaths.p28405c00} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #B5B5B5)" strokeWidth="3" />
          <path d={svgPaths.p165b8100} id="Vector_3" opacity="0.95" stroke="var(--stroke-0, #CACACA)" strokeWidth="3" />
          <path d={svgPaths.p3c6970d8} id="Vector_4" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="3" />
          <path d={svgPaths.pe343e00} id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="3" />
          <path d={svgPaths.p2806d4dc} id="Vector_6" opacity="0.9" stroke="var(--stroke-0, #FAFAFA)" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_239">
            <rect fill="white" height="852" width="128" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Info() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  return (
    <div className="bg-[#f5f4f0] w-full" data-name="iPhone 16 - 62">
      <div className="relative mx-auto w-full max-w-[393px] sm:max-w-[420px] min-h-screen pb-8 px-4 sm:px-6">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-30">
          <LanguageSwitcher />
        </div>
        {/* Decorative Icon */}
        <div className="absolute right-0 top-0 w-[128px] h-[852px] opacity-60 pointer-events-none">
          <Icon />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-6">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-transparent border-2 border-[#717070] rounded-full text-[#717070] font-['Inter:Medium',sans-serif] text-[12px] tracking-[0.6px] uppercase cursor-pointer hover:bg-[#717070] hover:text-white transition-colors mb-8"
          >
            {t('common.inicio', lang)}
          </button>

          <div className="mt-6 space-y-6">
            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[18px] tracking-[0.6px] uppercase">
              {t('info.recommended_hotels', lang)}
            </p>

            <div className="font-['Marcellus:Regular',sans-serif] leading-[16px] text-[#717070] tracking-[0.6px] space-y-4">
              <div>
                <p className="text-[16px] uppercase mb-2">{t('info.city.bogota', lang)}</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-[14px]">{t('info.hotel.w_bogota', lang)}</li>
                  <li className="text-[14px]">{t('info.hotel.wynwood_109', lang)}</li>
                </ul>
              </div>

              <div>
                <p className="text-[16px] uppercase mb-2">{t('info.city.cartagena', lang)}</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-[14px]">{t('info.hotel.osh_cartagena', lang)}</li>
                  <li className="text-[14px]">{t('info.hotel.casa_carolina', lang)}</li>
                  <li className="text-[14px]">{t('info.hotel.charleston_santa_teresa', lang)}</li>
                  <li className="text-[14px]">{t('info.hotel.movich_cartagena', lang)}</li>
                </ul>
              </div>

              <div>
                <p className="text-[16px] uppercase mb-2">{t('info.city.baru', lang)}</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-[14px]">{t('info.hotel.sofitel_baru', lang)}</li>
                  <li className="text-[14px]">{t('info.hotel.las_islas', lang)}</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[18px] tracking-[0.6px] uppercase mb-4">
                {t('info.contact_title', lang)}
              </p>
              
              <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] text-[#717070] text-[14px] tracking-[0.6px] uppercase whitespace-pre-line">
                {t('info.contact_body', lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
