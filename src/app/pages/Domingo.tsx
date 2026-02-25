import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-6ik3w4qarz";
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

export default function Domingo() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f4f0] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-screen w-full flex items-start justify-center px-4 sm:px-0 overflow-hidden" data-name="iPhone 16 - 61">
      <div className="relative w-full max-w-[393px]">
        {/* Background Image */}
        <div className="absolute -left-[25px] -top-[16px] w-[calc(100%+50px)] h-[868px] pointer-events-none">
          <img alt="" className="w-full h-full object-cover" src={imgChatGptImage7Feb20262011332} />
        </div>

        {/* Decorative Icon */}
        <div className="absolute right-0 top-0 w-[128px] h-[852px] opacity-60 pointer-events-none">
          <Icon />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-8">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-transparent border-2 border-[#717070] rounded-full text-[#717070] font-['Inter:Medium',sans-serif] text-[12px] tracking-[0.6px] uppercase cursor-pointer hover:bg-[#717070] hover:text-white transition-colors"
          >
            inicio
          </button>

          <div className="mt-[225px] space-y-4 px-4">
            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[18px] tracking-[0.6px] uppercase">
              tarde en la playa
            </p>

            <div className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              <p className="mb-0">domingo 12 de julio</p>
              <p>3-6 pm</p>
            </div>

            <div className="font-['Lexend_Zetta:Regular',sans-serif] font-normal leading-[16px] text-[#717070] text-[12px] tracking-[0.6px] uppercase">
              <p className="mb-0">SOFITEL BARÚ</p>
              <p className="mb-0">cartagena BEACH RESORT</p>
            </div>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase pt-4">
              r.s.v.p.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
