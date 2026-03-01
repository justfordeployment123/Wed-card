import React from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-y7tj7flg0i";
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Group() {
  return (
    <div className="absolute h-[109px] left-[192px] top-[517px] w-[145px]">
      <div className="absolute inset-[0_-2.76%_-7.34%_-2.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 117">
          <g filter="url(#filter0_d_1_183)" id="Group 1">
            <g id="Rectangle 5">
              <path d={svgPaths.p3e60dd80} fill="var(--fill-0, #C5BAA8)" />
              <path d={svgPaths.p3e60dd80} fill="url(#paint0_linear_1_183)" fillOpacity="0.2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="117" id="filter0_d_1_183" width="153" x="-3.3473e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_183" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_183" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_183" x1="3.21634" x2="75.3104" y1="14.7921" y2="109.935">
              <stop stopColor="#B8B3A8" />
              <stop offset="0.500109" stopColor="#FBF3E3" />
              <stop offset="0.595888" stopColor="#EBE4D5" />
              <stop offset="0.667654" stopColor="#DFD8CA" />
              <stop offset="0.89908" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Sabado() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const backgroundInvitation = new URL("../../assets/27251f39d0450f1a4433b94d3242e8bdd4c78901.png", import.meta.url).href;
  const mailCardImage = new URL("../../assets/83aca85b03199dd2bedb67b7c830ed52b44731ae.png", import.meta.url).href;
  const waxSealImage = new URL("../../assets/927db6088308ea87495ef7b202eeecb069579be0.png", import.meta.url).href;

  return (
    <div
             className="min-h-screen w-full flex flex-col items-center bg-[#f1eee7]"
             style={{
               backgroundImage: `url(${backgroundInvitation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ==================== DESKTOP TOP BAR ==================== */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1200px] px-8 lg:px-16 pt-8 lg:pt-10 relative z-20">
        <button
          onClick={() => navigate('/')}
          className="font-['Inter'] font-medium text-sm text-[#b7ab99] uppercase tracking-wide hover:text-[#8a7e6e] transition-all duration-300"
        >
          {t('common.inicio', lang)}
        </button>
        <LanguageSwitcher />
      </div>

      {/* ==================== INVITATION CARD ==================== */}
      <div className="flex-1 flex items-start justify-center w-full pt-0 pb-4 md:py-2">
      <div className="relative w-[393px] mx-auto mt-0 md:-mt-2 origin-top md:scale-[1.4] lg:scale-[1.7] xl:scale-[1.9]" style={{ height: "850px" }} data-name="iPhone 16 - 58">
        {/* Language Switcher - mobile only */}
        <div className="absolute top-4 right-4 z-20 md:hidden">
          <LanguageSwitcher />
        </div>
        {/* Mail icon card */}
        <div
          className="absolute flex h-[183.7px] items-center justify-center right-[10px] top-[50px] w-[276.987px]"
          style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1152" } as React.CSSProperties}
        >
          <div className="flex-none rotate-[-0.45deg]">
            <div className="h-[181.56px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[275.582px]" data-name="Screenshot 2026-01-30 at 11.47.47 PM 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                       <img alt="" className="absolute h-[100.6%] left-[-0.79%] max-w-none top-0 w-[100.8%]" src={mailCardImage} />
              </div>
            </div>
          </div>
        </div>
      <div className="absolute flex h-[311.938px] items-center justify-center left-[26px] top-[162px] w-[239.544px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.65deg]">
          <div className="h-[237.675px] relative w-[310.509px]">
            <div className="absolute inset-[0_-1.29%_-3.37%_-1.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 318.509 245.675">
                <g filter="url(#filter0_d_1_190)" id="Rectangle 4">
                  <path d={svgPaths.p23dba500} fill="var(--fill-0, #FFFDF5)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="245.675" id="filter0_d_1_190" width="318.509" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_190" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_190" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <p
        className="absolute h-[17px] leading-[19px] left-[70px] not-italic text-[#5d5d5d] text-[14px] text-center top-[204px] w-[158px] whitespace-pre-wrap"
        style={{ fontFamily: "Parisienne" }}
      >
        {t('sabado.blessing_intro', lang)}
      </p>

      <div
        className="absolute leading-[9px] left-[28px] not-italic text-[#5d5d5d] text-[9px] text-center top-[253px] w-[123px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        <p className="mb-0">Claudia Granados Guzmán</p>
        <p>{`Henry Nariño Rocha `}</p>
      </div>

      <p
        className="absolute h-[20px] leading-[19px] left-[57px] not-italic text-[#5d5d5d] text-[14px] text-center top-[325px] w-[188px] whitespace-pre-wrap"
        style={{ fontFamily: "Parisienne" }}
      >
        {t('sabado.invitation_text', lang)}
      </p>

      <p
        className="absolute h-[14px] leading-[11px] left-[79px] not-italic text-[#5d5d5d] text-[11px] text-center top-[419px] w-[139px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        {t('sabado.location_baru', lang)}
      </p>

      <p
        className="absolute bg-clip-text h-auto leading-[24px] left-[62px] not-italic text-[17px] text-transparent text-center top-[288px] w-[170px] whitespace-pre-wrap"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(131, 87, 65, 0.2), rgba(131, 87, 65, 0.2)), linear-gradient(0deg, #5D3727 -46.48%, #835741 -2.63%, #46281B 27.86%, #704734 27.89%, #FAE2CC 48.19%, #775949 64.71%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Parisienne",
        }}
      >
        {t('sabado.names_nataly_david', lang)}
      </p>

      <p
        className="absolute leading-[12px] left-[70px] not-italic text-[#5d5d5d] text-[12px] text-center top-[378px] w-[153px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        {t('sabado.date_main', lang)}
      </p>

      <p
        className="absolute leading-[12px] left-[128px] not-italic text-[#5d5d5d] text-[12px] top-[392px]"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        {t('sabado.time_main', lang)}
      </p>

      <div
        className="absolute h-[17px] leading-[9px] left-[142px] not-italic text-[#5d5d5d] text-[9px] text-center top-[253px] w-[122px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        <p className="mb-0">Karoline Wagnes</p>
        <p>Franz Joseph Scheutz</p>
      </div>

      <div className="absolute h-[106px] left-[186px] top-[649px] w-[175px]">
        <div className="absolute inset-[0_-2.29%_-7.55%_-2.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 114">
            <g filter="url(#filter0_d_1_186)" id="Rectangle 4">
              <path d="M4 0H179V106H91.5H4V0Z" fill="var(--fill-0, #FFFDF5)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="114" id="filter0_d_1_186" width="183" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_186" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_186" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>


      <Group />

      <div className="absolute h-[61px] left-[154px] top-[489px] w-[91px]" data-name="Screenshot 2026-01-31 at 12.06.34 AM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                   <img alt="" className="absolute h-[61.54%] left-[25.63%] max-w-none top-[18.36%] w-[42.54%]" src={waxSealImage} />
        </div>
      </div>

      <div className="absolute flex h-[272.008px] items-center justify-center left-[43px] top-[497.96px] w-[122.716px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90.19deg]">
          <div className="h-[121.819px] relative w-[271.607px]">
            <div className="absolute inset-[0_-1.47%_-6.57%_-1.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279.607 129.819">
                <g filter="url(#filter0_d_1_192)" id="Rectangle 7">
                  <path d={svgPaths.p3f632200} fill="var(--fill-0, #E7DCCE)" />
                  <path d={svgPaths.p3f632200} fill="url(#paint0_linear_1_192)" fillOpacity="0.2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="129.819" id="filter0_d_1_192" width="279.607" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_192" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_192" mode="normal" result="shape" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_192" x1="275.634" x2="20.2327" y1="112.829" y2="1.58605">
                    <stop stopColor="#FFFDF5" />
                    <stop offset="0.9751" stopColor="#FAE2CC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute h-[22px] leading-[11px] left-[53px] not-italic text-[#5d5d5d] text-[11px] top-[510px] w-[168px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        <p className="mb-0">{t('sabado.dress_code_title', lang)}</p>
      </div>

      <div
        className="absolute leading-[11px] left-[53px] not-italic text-[#5d5d5d] text-[11px] top-[531px] w-[93px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        <p className="mb-0">{t('sabado.dress_code_women_label', lang)}</p>
        <p className="mb-0">{t('sabado.dress_code_women_long_dress', lang)}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          {t('sabado.dress_code_women_reserved_colors', lang)}
          <br aria-hidden="true" />
          {t('sabado.dress_code_women_white', lang)}
          <br aria-hidden="true" />
          {t('sabado.dress_code_women_silver', lang)}
          <br aria-hidden="true" />
          {t('sabado.dress_code_women_black', lang)}
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>

      <div
        className="absolute leading-[11px] left-[53px] not-italic text-[#5d5d5d] text-[11px] text-right top-[654px] w-[93px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        <p className="mb-0">{t('sabado.dress_code_men_label', lang)}</p>
        <p className="mb-0">{t('sabado.dress_code_men_suit', lang)}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          {t('sabado.dress_code_men_reserved_colors', lang)}
          <br aria-hidden="true" />
          {t('sabado.dress_code_men_light_beige', lang)}
        </p>
        <p>{t('sabado.dress_code_men_black', lang)}</p>
      </div>

      <div className="absolute h-[177px] left-[246px] top-[318px] w-[127px]">
        <div className="absolute inset-[0_-3.15%_-4.52%_-3.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 185">
            <g filter="url(#filter0_d_1_181)" id="Ellipse 1">
              <ellipse cx="67.5" cy="88.5" fill="var(--fill-0, #E7DCCE)" rx="63.5" ry="88.5" />
              <ellipse cx="67.5" cy="88.5" fill="url(#paint0_linear_1_181)" fillOpacity="0.2" rx="63.5" ry="88.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="185" id="filter0_d_1_181" width="135" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_181" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_181" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_181" x1="88.5" x2="67.5" y1="-2.61431e-07" y2="177">
                <stop stopColor="#FDF9EB" />
                <stop offset="0.315677" stopColor="white" />
                <stop offset="0.565887" stopColor="#EBE0D1" />
                <stop offset="1" stopColor="#EBE0D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <p
        className="absolute h-[28px] leading-[12px] left-[267px] not-italic text-[#5d5d5d] text-[12px] top-[348px] w-[81px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        {t('sabado.ceremony_reception', lang).split(/\s+&\s+/).map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i === 0 && <br />}
          </React.Fragment>
        ))}
      </p>

      <p
        className="absolute h-[12px] leading-[14px] left-[259px] not-italic text-[#5d5d5d] text-[14px] text-center top-[383px] w-[97px] whitespace-pre-wrap"
        style={{ fontFamily: "Bacasime Antique" }}
      >
        {t('sabado.ceremony_location', lang)}
      </p>

      <a className="absolute block border-2 border-solid border-white box-border cursor-pointer h-[23px] left-[265px] rounded-[11184800px] top-[435px] w-[90px] z-10" data-name="Button" href="https://www.google.com/maps/place/Sofitel+Baru+Cartagena/@10.2564149,-75.6103647,17z/data=!4m9!3m8!1s0x8e5883d929db1779:0xb729400f764e142f!5m2!4m1!1i2!8m2!3d10.2564149!4d-75.6077898!16s%2Fg%2F11p012fp8j!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <p
          className="absolute leading-[16px] text-[9px] text-center tracking-[0.3px] uppercase"
          style={{
            width: "80px",
            height: "16px",
            left: "calc(50% - 80px/2)",
            top: "4px",
            fontFamily: "Bacasime Antique",
            color: "rgba(67, 67, 67, 0.666667)",
            whiteSpace: "nowrap",
          }}
        >
          {t('common.go_to_place', lang)}
        </p>
      </a>

      <a className="absolute block border-2 border-solid border-white box-border cursor-pointer h-[23px] left-[58px] rounded-[11184800px] top-[735px] w-[83px] z-10" data-name="Button" href="https://co.pinterest.com/narinonataly/amora-y-amoro/?invite_code=495dde3b18fe44028552adc7d83b207e&sender=657173908033649447" target="_blank" rel="noopener noreferrer">
        <p
          className="absolute leading-[16px] text-[6px] text-center tracking-[0px] uppercase"
          style={{
            width: "79px",
            height: "16px",
            left: "calc(50% - 79px/2)",
            top: "3px",
            fontFamily: "Bacasime Antique",
            color: "rgba(67, 67, 67, 0.666667)",
            whiteSpace: "nowrap",
          }}
        >
          {t('common.view_inspo', lang)}
        </p>
      </a>

      <a className="absolute block border-2 border-solid border-white box-border cursor-pointer h-[23px] left-[58px] rounded-[11184800px] top-[622px] w-[83px] z-10" data-name="Button" href="https://co.pinterest.com/narinonataly/mujeres-amoraamoro/?invite_code=dab9961f86f340109113ad5eb02293b3&sender=657173908033649447" target="_blank" rel="noopener noreferrer">
        <p
          className="absolute leading-[16px] text-[6px] text-center tracking-[0px] uppercase"
          style={{
            width: "79px",
            height: "16px",
            left: "calc(50% - 79px/2)",
            top: "3px",
            fontFamily: "Bacasime Antique",
            color: "rgba(67, 67, 67, 0.666667)",
            whiteSpace: "nowrap",
          }}
        >
          {t('common.view_inspo', lang)}
        </p>
      </a>

      <button
        onClick={() => navigate('/')}
        className="absolute border-2 border-[rgba(255,255,255,0)] border-solid h-[36px] left-[19px] rounded-[11184800px] top-[30px] w-[82px] cursor-pointer z-10 md:hidden"
        data-name="Button"
      >
        <div className="absolute content-stretch flex items-center justify-center left-[11px] p-[10px] top-[-2px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b7ab99] text-[14px] text-center tracking-[0.6px] uppercase">{t('common.inicio', lang)}</p>
        </div>
      </button>

      <div className="absolute h-[61px] left-[205px] top-[148px] w-[91px]" data-name="Screenshot 2026-01-31 at 12.06.34 AM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                   <img alt="" className="absolute h-[61.54%] left-[25.63%] max-w-none top-[18.36%] w-[42.54%]" src={waxSealImage} />
        </div>
      </div>

      <div
        className="absolute"
        style={{
          width: "109px",
          height: "54px",
          left: "210px",
          top: "542px",
        }}
      >
        <p
          className="mb-0 text-center"
          style={{
            fontFamily: "Parisienne",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            color: "#5D5D5D",
          }}
        >
          {t('sabado.rsvp_title', lang)}
        </p>
        <p
          className="mb-0 text-right"
          style={{
            fontFamily: "Bacasime Antique",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "13px",
            color: "#5D5D5D",
          }}
        >
          {t('sabado.rsvp_before', lang)}
        </p>
        <p
          className="mb-0 text-right"
          style={{
            fontFamily: "Bacasime Antique",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "13px",
            color: "#5D5D5D",
          }}
        >
          {t('sabado.rsvp_phone', lang)}
        </p>
        <p
          className="mb-0 text-right"
          style={{
            fontFamily: "Bacasime Antique",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "13px",
            color: "#5D5D5D",
          }}
        >
          {t('sabado.rsvp_rain_of_envelopes', lang)}
        </p>
      </div>

      <p
        className="absolute"
        style={{
          width: "168px",
          height: "11px",
          left: "198px",
          top: "662px",
          fontFamily: "Bacasime Antique",
          fontWeight: 400,
          fontSize: "11px",
          lineHeight: "11px",
          color: "#5D5D5D",
        }}
      >
        {t('sabado.transport_title', lang)}
      </p>

      <div
        className="absolute text-right"
        style={{
          width: "121px",
          height: "52px",
          left: "226px",
          top: "680px",
          fontFamily: "Bacasime Antique",
          fontWeight: 400,
          fontSize: "11px",
          lineHeight: "13px",
          color: "#5D5D5D",
        }}
      >
        <p className="mb-0">
          {t('common.from', lang)}
          <br aria-hidden="true" />
          {t('sabado.transport_from_osh', lang).replace(/^.*?:\s*/, '')}
        </p>
        <p className="mb-0">{t('common.to', lang)}</p>
        <p className="mb-0">{t('sabado.transport_to_sofitel', lang).replace(/^.*?:\s*/, '')}</p>
      </div>
      </div>
      </div>
    </div>
  );
}
