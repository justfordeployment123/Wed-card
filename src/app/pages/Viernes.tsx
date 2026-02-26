import React from 'react';
import { useNavigate } from 'react-router';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function Viernes() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const backgroundPattern = new URL("../../assets/4ac89ba9da89237739c75c794c9238e066062519.png", import.meta.url).href;
  const overlayTexture = new URL("../../assets/7f28c756803ad49659645024dee4cc64b80c4ac0.png", import.meta.url).href;

  return (
    <div
      className="relative min-h-screen w-full flex items-start justify-center px-4 sm:px-0 overflow-hidden"
      data-name="iPhone 16 - 63"
      style={{
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: "574px 861px",
        backgroundRepeat: "repeat",
        backgroundPosition: "left top",
        backgroundColor: "#ffffff",
      }}
    >

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden md:flex flex-col min-h-screen w-full max-w-[1200px] mx-auto relative px-8 lg:px-16">
        {/* Overlay textures for desktop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute opacity-30" style={{ width: "600px", height: "700px", left: "-150px", top: "200px" }}>
            <img alt="" className="w-full h-full object-cover" src={overlayTexture} />
          </div>
          <div className="absolute opacity-30" style={{ width: "600px", height: "700px", right: "-150px", top: "100px" }}>
            <img alt="" className="w-full h-full object-cover" src={overlayTexture} />
          </div>
        </div>

        {/* Top Bar: INICIO + Language Switcher */}
        <div className="flex items-center justify-between pt-8 lg:pt-10 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="font-['Inter'] font-medium text-sm text-[#717070] uppercase tracking-wide hover:text-[#4a4a4a] transition-all duration-300"
          >
            {t('common.inicio', lang)}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Main Content: Two Columns */}
        <div className="flex-1 flex items-center justify-center py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-2 gap-16 lg:gap-24 w-full max-w-[900px]">
            {/* Left Column - Cooking Workshop */}
            <div className="flex flex-col items-center text-center space-y-5 lg:space-y-6 overflow-hidden">
              <h2 className="font-['Marcellus'] text-2xl lg:text-3xl xl:text-4xl text-[#717070] uppercase tracking-wider break-words w-full">
                {t('viernes.cooking_workshop', lang)}
              </h2>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide">
                {t('viernes.friday_date_morning', lang)}
              </p>
              <p className="font-['Lexend_Zetta'] text-sm lg:text-base text-[#717070] uppercase tracking-wide leading-relaxed">
                {t('viernes.sofitel_barú', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide">
                {t('viernes.calablanca_restaurant', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide pt-2">
                {t('common.rsvp', lang)}
              </p>
              <div className="pt-4">
                <a
                  className="px-8 py-3 rounded-full border-2 border-[#717070] text-[#717070] font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-[#717070] hover:text-white transition-all duration-300 inline-block"
                  style={{ filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))" }}
                  href="https://www.google.com/maps/place/Sofitel+Baru+Cartagena/@10.2564149,-75.6103647,17z/data=!4m9!3m8!1s0x8e5883d929db1779:0xb729400f764e142f!5m2!4m1!1i2!8m2!3d10.2564149!4d-75.6077898!16s%2Fg%2F11p012fp8j!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common.go_to_place', lang)}
                </a>
              </div>
            </div>

            {/* Right Column - Welcome Cocktail */}
            <div className="flex flex-col items-center text-center space-y-5 lg:space-y-6 overflow-hidden">
              <h2 className="font-['Marcellus'] text-2xl lg:text-3xl xl:text-4xl text-[#717070] uppercase tracking-wider break-words w-full">
                {t('viernes.welcome_cocktail', lang)}
              </h2>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide">
                {t('viernes.friday_date_evening', lang)}
              </p>
              <p className="font-['Lexend_Zetta'] text-sm lg:text-base text-[#717070] uppercase tracking-wide leading-relaxed">
                {t('viernes.sofitel_barú', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide">
                {t('viernes.la_pergola_bar', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-[#717070] uppercase tracking-wide pt-2">
                {t('common.rsvp', lang)}
              </p>
              <div className="pt-4">
                <a
                  className="px-8 py-3 rounded-full border-2 border-[#717070] text-[#717070] font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-[#717070] hover:text-white transition-all duration-300 inline-block"
                  style={{ filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))" }}
                  href="https://www.google.com/maps/place/Sofitel+Baru+Cartagena/@10.2564149,-75.6103647,17z/data=!4m9!3m8!1s0x8e5883d929db1779:0xb729400f764e142f!5m2!4m1!1i2!8m2!3d10.2564149!4d-75.6077898!16s%2Fg%2F11p012fp8j!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common.go_to_place', lang)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="md:hidden relative w-full max-w-[393px]" style={{ minHeight: "1700px" }}>
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-20">
          <LanguageSwitcher />
        </div>
        {/* Background Images */}
        <div
          className="absolute"
          style={{
            width: "574px",
            height: "861px",
            left: "-91px",
            top: "0px",
          }}
        >
          <img alt="" className="w-full h-full object-cover" src={backgroundPattern} />
        </div>
        <div
          className="absolute"
          style={{
            width: "574px",
            height: "861px",
            left: "-20px",
            top: "861px",
          }}
        >
          <img alt="" className="w-full h-full object-cover" src={backgroundPattern} />
        </div>

        {/* Overlay Images */}
        <div
          className="absolute opacity-30"
          style={{
            width: "400px",
            height: "495px",
            left: "-80px",
            top: "460px",
            transform: "rotate(0.26deg)",
          }}
        >
          <img alt="" className="w-full h-full object-cover" src={overlayTexture} />
        </div>

        <div
          className="absolute opacity-30"
          style={{
            width: "400px",
            height: "495px",
            left: "-80px",
            top: "1200px",
            transform: "rotate(0.26deg)",
          }}
        >
          <img alt="" className="w-full h-full object-cover" src={overlayTexture} />
        </div>

        {/* Top "inicio" Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute box-border cursor-pointer"
          style={{
            width: "82px",
            height: "36px",
            left: "26px",
            top: "39px",
            borderRadius: "11184800px",
          }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[14px] text-center text-[#717070] tracking-[0.6px] uppercase">
            {t('common.inicio', lang)}
          </p>
        </button>

        {/* Event 1: Taller de Cocina */}
        <p
          className="absolute"
          style={{
            width: "169px",
            height: "16px",
            left: "112px",
            top: "256px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.cooking_workshop', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "251px",
            height: "16px",
            left: "71px",
            top: "299px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.friday_date_morning', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "287px",
            height: "32px",
            left: "53px",
            top: "336px",
            fontFamily: "Lexend Zetta",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.sofitel_barú', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "224px",
            height: "16px",
            left: "84px",
            top: "388px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.calablanca_restaurant', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "51px",
            height: "16px",
            left: "171px",
            top: "425px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('common.rsvp', lang)}
        </p>

        {/* ver más link */}
        <button
          onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
          className="absolute cursor-pointer"
          style={{
            width: "57px",
            height: "16px",
            left: "308px",
            top: "705px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
            whiteSpace: "nowrap",
          }}
        >
          {t('martes.see_more', lang)}
        </button>

        {/* Second "inicio" Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute box-border cursor-pointer"
          style={{
            width: "82px",
            height: "36px",
            left: "26px",
            top: "919px",
            borderRadius: "11184800px",
          }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[14px] text-center text-[#717070] tracking-[0.6px] uppercase">
            {t('common.inicio', lang)}
          </p>
        </button>

        {/* Event 2: Coctél de Bienvenida */}
        <p
          className="absolute"
          style={{
            width: "211px",
            height: "16px",
            left: "92px",
            top: "1013px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.welcome_cocktail', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "247px",
            height: "16px",
            left: "72px",
            top: "1057px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.friday_date_evening', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "287px",
            height: "32px",
            left: "54px",
            top: "1100px",
            fontFamily: "Lexend Zetta",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.sofitel_barú', lang)}
        </p>

        <p
          className="absolute"
          style={{
            width: "134px",
            height: "16px",
            left: "131px",
            top: "1159px",
            fontFamily: "Marcellus",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#717070",
          }}
        >
          {t('viernes.la_pergola_bar', lang)}
        </p>

        {/* Bottom "ir al lugar" Button */}
        <a
          className="absolute box-border cursor-pointer"
          style={{
            width: "126.67px",
            height: "36px",
            left: "131px",
            top: "1202px",
            border: "2px solid #717070",
            filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))",
            borderRadius: "11184800px",
          }}
          href="https://www.google.com/maps/place/Sofitel+Baru+Cartagena/@10.2564149,-75.6103647,17z/data=!4m9!3m8!1s0x8e5883d929db1779:0xb729400f764e142f!5m2!4m1!1i2!8m2!3d10.2564149!4d-75.6077898!16s%2Fg%2F11p012fp8j!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center h-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[12px] text-center text-[#717070] tracking-[0.6px] uppercase">
              {t('common.go_to_place', lang)}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
