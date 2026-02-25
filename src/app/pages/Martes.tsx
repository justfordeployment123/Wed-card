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
      <div className="relative w-full max-w-[390px] md:max-w-[800px] lg:max-w-[1000px] h-[1800px] md:h-auto md:min-h-screen mx-auto md:py-8 md:px-8">
        {/* Language Switcher */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-10 md:top-8">
          <LanguageSwitcher variant="light" />
        </div>
        
        {/* Desktop Layout Container */}
        <div className="hidden md:block md:grid md:grid-cols-2 md:gap-12 md:pt-20">
          {/* Desktop INICIO button */}
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 left-8 px-6 py-2 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300 z-10"
          >
            {t('common.inicio', lang)}
          </button>
          {/* Left Column - Gimnasio Section */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="font-['Marcellus'] text-3xl lg:text-4xl text-white uppercase tracking-wider" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('martes.rumba_class', lang)}
              </h2>
              <p className="font-['Marcellus'] text-xl lg:text-2xl text-white uppercase tracking-wide" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('martes.city_bogota', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('martes.date_noon', lang)}
              </p>
              <p className="font-['Lexend_Zetta'] text-sm lg:text-base text-white uppercase tracking-wide" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('martes.location_gym', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide pt-4" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('common.rsvp', lang)}
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <a
                className="px-8 py-3 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300"
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
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="font-['Marcellus'] text-3xl lg:text-4xl text-white uppercase tracking-wider" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
                {t('martes.padel_club_title', lang)}
              </h2>
              <p className="font-['Marcellus'] text-xl lg:text-2xl text-white uppercase tracking-wide">
                {t('martes.city_bogota', lang)}
              </p>
              <p className="font-['Marcellus'] text-lg lg:text-xl text-white uppercase tracking-wide">
                {t('martes.date_evening', lang)}
              </p>
              <p className="font-['Lexend_Zetta'] text-sm lg:text-base text-white uppercase tracking-wide">
                {t('martes.location_padel', lang)}
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <a
                className="px-8 py-3 rounded-full border-2 border-white text-white font-['Inter'] font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-[#703d4e] transition-all duration-300"
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

{/* Decorative Top-Right L Graphic */}
<div
  className="md:scale-150 lg:scale-200"
  style={{
    position: "absolute",
    top: 60,
    right: -40,
    width: 160,
    height: 160,
  }}
>
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* First L */}
    <path
      d="M20 20 H100 V110"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="square"
      fill="none"
    />

    {/* Second L (shifted down) */}
    <path
      d="M10 30 H90 V100"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="square"
      fill="none"
    />

    {/* Third L (shifted more down) */}
    <path
      d="M0 40 H80 V90"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="square"
      fill="none"
    />
  </svg>
</div>

        {/* Mobile Content - scales on desktop */}
        <div className="md:hidden">
        
        {/* INICIO button (optional back) */}
        <button
          onClick={() => navigate('/')}
          className="absolute box-border cursor-pointer hover:bg-white hover:text-[#703d4e] transition-all duration-300"
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
          }}
        >
          <span
            className="md:text-sm"
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

        {/* Button INSCRÍBETE AQUÍ (Padel registration) */}
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

        {/* Second IR AL LUGAR button (Padel) */}
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
        </div>
        {/* End Mobile Content */}

        {/* Decorative Bottom-Left L Graphic (mirrored) */}
        <div
          className="md:scale-150 lg:scale-200"
          style={{
            position: "absolute",
            bottom: 80,
            left: -40,
            width: 160,
            height: 160,
          }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* First L (mirrored - opens to right) */}
            <path
              d="M140 140 H60 V50"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="square"
              fill="none"
            />

            {/* Second L (shifted, mirrored) */}
            <path
              d="M150 130 H70 V60"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="square"
              fill="none"
            />

            {/* Third L (shifted more, mirrored) */}
            <path
              d="M160 120 H80 V70"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="square"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}