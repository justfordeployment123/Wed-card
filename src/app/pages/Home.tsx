import { useNavigate } from 'react-router';
import imgScreenshot20260130At81615Pm1 from "figma:asset/f74998135538d1e201edcdd431ab6a90bfe63f4b.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#d4cfc4] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-screen w-full flex items-center justify-center px-4 sm:px-0" data-name="iPhone 16 - 59">
      <div className="relative w-full max-w-[393px] h-[852px]">
        {/* Logo/Monogram */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[226px] w-[72%] max-w-[284px] aspect-[1.42]">
          <img 
            alt="Nataly + David Monogram" 
            className="w-full h-full object-contain pointer-events-none" 
            src={imgScreenshot20260130At81615Pm1} 
          />
        </div>

        {/* Names */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[547px] w-full px-4">
          <p className="font-['Marcellus:Regular',sans-serif] leading-[21px] not-italic text-[#8a8579] text-[14px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] tracking-[7px] uppercase">
            NATALY + DAVID
          </p>
        </div>

        {/* Day Selection Buttons */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[600px] w-[calc(100%-64px)] max-w-[265px]">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/martes')}
              className="border-2 border-[#bbb4a3] border-solid h-[36px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#bbb4a3] text-[12px] text-center tracking-[0.6px] uppercase">martes</p>
            </button>

            <button 
              onClick={() => navigate('/viernes')}
              className="border-2 border-[#bbb4a3] border-solid h-[36px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#bbb4a3] text-[12px] text-center tracking-[0.6px] uppercase">viernes</p>
            </button>

            <button 
              onClick={() => navigate('/sabado')}
              className="border-2 border-[#bbb4a3] border-solid h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#bbb4a3] text-[12px] text-center tracking-[0.6px] uppercase">SÁBADO</p>
            </button>

            <button 
              onClick={() => navigate('/domingo')}
              className="border-2 border-[#bbb4a3] border-solid h-[36px] rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#bbb4a3] text-[12px] text-center tracking-[0.6px] uppercase">DOMINGO</p>
            </button>
          </div>
        </div>

        {/* Info Button */}
        <button 
          onClick={() => navigate('/info')}
          className="absolute left-1/2 -translate-x-1/2 border-2 border-[#8a8579] border-solid h-[36px] rounded-full top-[716px] px-6 cursor-pointer z-10 transition-transform hover:scale-105 active:scale-95"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic text-[#8a8579] text-[12px] text-center tracking-[0.6px] uppercase">+ INFO</p>
        </button>
      </div>
    </div>
  );
}
