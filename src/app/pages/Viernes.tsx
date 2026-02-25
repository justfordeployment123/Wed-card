import { useNavigate } from 'react-router';
import imgChatGptImage7Feb20262015012 from "figma:asset/4ac89ba9da89237739c75c794c9238e066062519.png";
import imgChatGptImage7Feb20262007013 from "figma:asset/7f28c756803ad49659645024dee4cc64b80c4ac0.png";

export default function Viernes() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative min-h-screen w-full flex items-start justify-center px-4 sm:px-0 overflow-hidden" data-name="iPhone 16 - 63">
      <div className="relative w-full max-w-[393px] min-h-[1800px]">
        {/* Background Images */}
        <div className="absolute -left-[91px] top-0 w-[574px] h-[861px] pointer-events-none">
          <img alt="" className="w-full h-full object-cover" src={imgChatGptImage7Feb20262015012} />
        </div>
        <div className="absolute -left-[20px] top-[861px] w-[574px] h-[861px] pointer-events-none">
          <img alt="" className="w-full h-full object-cover" src={imgChatGptImage7Feb20262015012} />
        </div>

        {/* Overlay Images */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[436px] w-full h-[580px] opacity-80 pointer-events-none overflow-hidden">
          <img alt="" className="w-full h-full object-cover" src={imgChatGptImage7Feb20262007013} />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[1186px] w-full h-[580px] opacity-80 pointer-events-none overflow-hidden">
          <img alt="" className="w-full h-full object-cover" src={imgChatGptImage7Feb20262007013} />
        </div>

        {/* Event 1: Taller de Cocina */}
        <div className="relative z-10 pt-10">
          <button 
            onClick={() => navigate('/')}
            className="border-2 border-transparent h-[36px] rounded-full px-6 transition-opacity hover:opacity-80 cursor-pointer ml-4"
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[14px] text-center text-[#717070] tracking-[0.6px] uppercase">
              inicio
            </p>
          </button>

          <div className="text-center mt-[190px] space-y-4 px-4">
            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[18px] tracking-[0.6px] uppercase">
              taller de cocina
            </p>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              VIERNES 10 de julio| 11:00 aM
            </p>

            <p className="font-['Lexend_Zetta:Regular',sans-serif] font-normal leading-[16px] text-[#717070] text-[12px] tracking-[0.6px] uppercase max-w-[287px] mx-auto">
              SOFITEL BARÚ CARTAGENA BEACH RESORT
            </p>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              restaurante cALABLANCA
            </p>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              R.S.V.P.
            </p>
          </div>

          <div className="text-center mt-[240px]">
            <button 
              onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
              className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[#717070] text-[12px] text-center tracking-[0.6px] uppercase cursor-pointer hover:underline"
            >
              ver más
            </button>
          </div>

          {/* Event 2: Coctél de Bienvenida */}
          <div className="text-center mt-[220px] space-y-4 px-4">
            <button 
              onClick={() => navigate('/')}
              className="mb-8 border-2 border-transparent h-[36px] rounded-full px-6 transition-opacity hover:opacity-80 cursor-pointer"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[14px] text-center text-[#717070] tracking-[0.6px] uppercase">
                inicio
              </p>
            </button>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[18px] tracking-[0.6px] uppercase">
              coctél de bienvenida
            </p>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              VIERNES 10 de julio| 8:00 PM
            </p>

            <p className="font-['Lexend_Zetta:Regular',sans-serif] font-normal leading-[16px] text-[#717070] text-[12px] tracking-[0.6px] uppercase max-w-[287px] mx-auto">
              SOFITEL BARÚ CARTAGENA BEACH RESORT
            </p>

            <p className="font-['Marcellus:Regular',sans-serif] leading-[16px] not-italic text-[#717070] text-[16px] tracking-[0.6px] uppercase">
              bar la pÉrgola
            </p>

            <a 
              className="inline-block border-2 border-[#717070] border-solid h-[36px] rounded-full shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] px-6 mt-4 transition-transform hover:scale-105 active:scale-95"
              href="https://www.google.com/maps/place/Sofitel+Baru+Cartagena/@10.2564149,-75.6103647,17z/data=!4m9!3m8!1s0x8e5883d929db1779:0xb729400f764e142f!5m2!4m1!1i2!8m2!3d10.2564149!4d-75.6077898!16s%2Fg%2F11p012fp8j!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center py-2">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[12px] text-[rgba(113,112,112,0.67)] text-center tracking-[0.6px] uppercase">
                  ir al lugar
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
