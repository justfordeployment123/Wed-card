import React from 'react';
import { useNavigate } from 'react-router';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function Martes() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const wavesImage = new URL("../../assets/c250046851c2fab479fadf703de683c4333e3e4d.png", import.meta.url).href;

  return (
    <div className="bg-[#703d4e] min-h-screen w-full flex items-start justify-center px-4 sm:px-0 overflow-x-hidden">

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden md:flex flex-col min-h-screen w-full max-w-[1200px] mx-auto relative px-8 lg:px-16">
        {/* Top Bar: INICIO + Language Switcher */}
        <div className="flex items-center justify-between pt-8 lg:pt-10 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300"
          >
            {t('common.inicio', lang)}
          </button>
          <LanguageSwitcher variant="light" />
        </div>

        {/* Decorative Top-Right L Graphic */}
        <div className="absolute top-16 right-0 lg:right-4 w-[200px] lg:w-[240px] h-[200px] lg:h-[240px] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 H100 V110" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M10 30 H90 V100" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M0 40 H80 V90" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
          </svg>
        </div>

        {/* Main Content: Two Columns */}
        <div className="flex-1 flex items-center justify-center py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-16 lg:gap-24 w-full max-w-[900px]">
            {/* Left Column - Rumba Section */}
            <div className="flex flex-col items-center text-center space-y-5 lg:space-y-6">
              <h2
                className="font-['Marcellus'] text-3xl lg:text-4xl xl:text-5xl text-white uppercase tracking-wider"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.rumba_class', lang)}
              </h2>
              <p
                className="font-['Marcellus'] text-xl lg:text-2xl text-white uppercase tracking-wide"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.city_bogota', lang)}
              </p>
              <p
                className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.date_noon', lang)}
              </p>
              <p
                className="font-['Lexend_Zetta'] text-sm lg:text-base text-white uppercase tracking-wide leading-relaxed"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.location_gym', lang)}
              </p>
              <p
                className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide pt-2"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('common.rsvp', lang)}
              </p>
              <div className="pt-4">
                <a
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300 inline-block"
                  style={{ filter: "drop-shadow(2px 6px 4px rgba(0,0,0,0.25))" }}
                  href="https://docs.google.com/forms/d/1DD0lrKfOY-j0LHO6yzCptA7WGn-u2q4MTPT3I2dr_xI/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('martes.register_here', lang)}
                </a>
              </div>
            </div>

            {/* Right Column - Padel Section */}
            <div className="flex flex-col items-center text-center space-y-5 lg:space-y-6">
              <h2
                className="font-['Marcellus'] text-3xl lg:text-4xl xl:text-5xl text-white uppercase tracking-wider"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.padel_club_title', lang)}
              </h2>
              <p
                className="font-['Marcellus'] text-xl lg:text-2xl text-white uppercase tracking-wide"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.city_bogota', lang)}
              </p>
              <p
                className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.date_evening', lang)}
              </p>
              <p
                className="font-['Lexend_Zetta'] text-sm lg:text-base text-white uppercase tracking-wide leading-relaxed"
                style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
              >
                {t('martes.location_padel', lang)}
              </p>
              <div className="pt-4">
                <a
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300 inline-block"
                  style={{ filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.25))" }}
                  href="https://www.google.com/maps/place/Club+Campestre+El+Rancho/@4.7739038,-74.0445709,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f85ee67e30947:0x4029cac87f425c7d!8m2!3d4.7739038!4d-74.0445709!16s%2Fm%2F03ckkvp!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common.go_to_place', lang).toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom-Left L Graphic */}
        <div className="absolute bottom-0 left-0 w-[200px] lg:w-[240px] h-[200px] lg:h-[240px] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 140 H60 V50" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M150 130 H70 V60" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M160 120 H80 V70" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
          </svg>
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="md:hidden relative w-full max-w-[390px] h-[1800px] mx-auto">
        {/* Language Switcher */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-10">
          <LanguageSwitcher variant="light" />
        </div>

        {/* INICIO button */}
        <button
          onClick={() => navigate('/')}
          className="absolute cursor-pointer hover:bg-white hover:text-[#703d4e] transition-all duration-300"
          style={{
            width: 82,
            height: 36,
            left: 16,
            top: 39,
            borderRadius: 9999,
            border: "2px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            {t('common.inicio', lang)}
          </span>
        </button>

        {/* Decorative Top-Right L Graphic */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: -40,
            width: 160,
            height: 160,
          }}
        >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 H100 V110" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M10 30 H90 V100" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M0 40 H80 V90" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
          </svg>
        </div>

        {/* --- GIMNASIO SECTION --- */}
        <div
          style={{
            position: "absolute",
            top: 310,
            left: 122,
            width: 155,
            fontFamily: "Marcellus",
            fontSize: 18,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('martes.rumba_class', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 358,
            left: 160,
            fontFamily: "Marcellus",
            fontSize: 16,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('martes.city_bogota', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 383,
            left: 71,
            width: 248,
            fontFamily: "Marcellus",
            fontSize: 16,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('martes.date_noon', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 434,
            left: 66,
            width: 281,
            fontFamily: "Lexend Zetta",
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('martes.location_gym', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 490,
            left: 170,
            width: 48,
            fontFamily: "Marcellus",
            fontSize: 16,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('common.rsvp', lang)}
        </div>

        {/* Button INSCRÍBETE AQUÍ (Rumba registration) */}
        <a
          style={{
            position: "absolute",
            top: 1335,
            left: 119,
            width: 151,
            height: 36,
            borderRadius: 9999,
            border: "2px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            filter: "drop-shadow(2px 6px 4px rgba(0,0,0,0.25))",
            textDecoration: "none",
          }}
          href="https://docs.google.com/forms/d/1DD0lrKfOY-j0LHO6yzCptA7WGn-u2q4MTPT3I2dr_xI/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t('martes.register_here', lang)}
          </span>
        </a>

        {/* IMAGE SECTION – waves */}
        <img
          alt=""
          src={wavesImage}
          style={{
            position: "absolute",
            width: 383,
            height: 575,
            top: 585,
            left: -33,
            transform: "rotate(89.92deg)",
            filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.25))",
          }}
        />
        <img
          alt=""
          src={wavesImage}
          style={{
            position: "absolute",
            width: 383,
            height: 575,
            top: 673,
            left: -11,
            transform: "rotate(89.92deg)",
            filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.25))",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 699,
            left: 319,
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {t('martes.see_more', lang)}
        </div>

        {/* PADEL SECTION */}
        <div
          style={{
            position: "absolute",
            top: 1159,
            left: 93,
            width: 203,
            fontFamily: "Marcellus",
            fontSize: 18,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {t('martes.padel_club_title', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 1198,
            left: 160,
            fontFamily: "Marcellus",
            fontSize: 16,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {t('martes.city_bogota', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 1224,
            left: 75,
            width: 244,
            fontFamily: "Marcellus",
            fontSize: 16,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {t('martes.date_evening', lang)}
        </div>

        <div
          style={{
            position: "absolute",
            top: 1268,
            left: 56,
            width: 281,
            fontFamily: "Lexend Zetta",
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {t('martes.location_padel', lang)}
        </div>

        {/* IR AL LUGAR button (Padel) */}
        <a
          style={{
            position: "absolute",
            top: 1381,
            left: 132,
            width: 126,
            height: 36,
            borderRadius: 9999,
            border: "2px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.25))",
            textDecoration: "none",
          }}
          href="https://www.google.com/maps/place/Club+Campestre+El+Rancho/@4.7739038,-74.0445709,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f85ee67e30947:0x4029cac87f425c7d!8m2!3d4.7739038!4d-74.0445709!16s%2Fm%2F03ckkvp!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t('common.go_to_place', lang).toUpperCase()}
          </span>
        </a>

        {/* Decorative Bottom-Left L Graphic (mirrored) */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: -40,
            width: 160,
            height: 160,
          }}
        >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 140 H60 V50" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M150 130 H70 V60" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
            <path d="M160 120 H80 V70" stroke="white" strokeWidth="3" strokeLinecap="square" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
