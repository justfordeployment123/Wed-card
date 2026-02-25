import svgPaths from "./svg-6ik3w4qarz";
import imgChatGptImage7Feb20262011332 from "figma:asset/029be0e6109999263a78b56bc4501195fc372211.png";

function Icon() {
  return (
    <div className="absolute h-[852px] left-[265px] top-0 w-[128px]" data-name="Icon">
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

export default function IPhone() {
  return (
    <div className="bg-[#f5f4f0] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 61">
      <div className="absolute h-[868px] left-[-25px] top-[-16px] w-[579px]" data-name="ChatGPT Image 7 feb 2026, 20_11_33 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage7Feb20262011332} />
      </div>
      <p className="absolute font-['Marcellus:Regular',sans-serif] leading-[16px] left-[64px] not-italic text-[#717070] text-[18px] top-[313px] tracking-[0.6px] uppercase w-[246px] whitespace-pre-wrap">tarde en la playa</p>
      <div className="absolute font-['Lexend_Zetta:Regular',sans-serif] font-normal leading-[16px] left-[69px] text-[#717070] text-[12px] top-[413px] tracking-[0.6px] uppercase w-[228px] whitespace-pre-wrap">
        <p className="mb-0">SOFITEL BARÚ</p>
        <p>
          cartagena BEACH RESORT
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
      <div className="absolute font-['Marcellus:Regular',sans-serif] leading-[16px] left-[64px] not-italic text-[#717070] text-[16px] top-[355px] tracking-[0.6px] uppercase w-[274px] whitespace-pre-wrap">
        <p className="mb-0">{`domingo 12 de julio `}</p>
        <p>3-6 pm</p>
      </div>
      <p className="absolute font-['Marcellus:Regular',sans-serif] leading-[16px] left-[71px] not-italic text-[#717070] text-[16px] top-[485px] tracking-[0.6px] uppercase w-[274px] whitespace-pre-wrap">r.s.v.p.</p>
      <Icon />
    </div>
  );
}