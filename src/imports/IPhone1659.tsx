import imgScreenshot20260130At81615Pm1 from "figma:asset/f74998135538d1e201edcdd431ab6a90bfe63f4b.png";

function Paragraph() {
  return (
    <div className="absolute h-[25px] left-[94px] top-[547px] w-[207px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Marcellus:Regular',sans-serif] leading-[21px] left-[103px] not-italic text-[#8a8579] text-[14px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[0.67px] tracking-[7px] uppercase">NATALY + DAVID</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border-2 border-[#bbb4a3] border-solid h-[36px] left-0 rounded-[11184800px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[126.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[62.18px] not-italic text-[#bbb4a3] text-[12px] text-center top-[8.67px] tracking-[0.6px] uppercase">martes</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border-2 border-[#bbb4a3] border-solid h-[36px] left-[138.67px] rounded-[11184800px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[126.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[61.5px] not-italic text-[#bbb4a3] text-[12px] text-center top-[8.67px] tracking-[0.6px] uppercase">viernes</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute border-2 border-[#bbb4a3] border-solid h-[36px] left-[138px] rounded-[11184800px] top-[48px] w-[126.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[64.5px] not-italic text-[#bbb4a3] text-[12px] text-center top-[8px] tracking-[0.6px] uppercase">DOMINGO</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute border-2 border-[#bbb4a3] border-solid h-[36px] left-0 rounded-[11184800px] top-[48px] w-[126.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[61.24px] not-italic text-[#bbb4a3] text-[12px] text-center top-[8.67px] tracking-[0.6px] uppercase">SÁBADO</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[84px] left-[65px] top-[600px] w-[265.344px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.25),inset_4px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute border-2 border-[#8a8579] border-solid h-[36px] left-[142.01px] rounded-[11184800px] top-[716px] w-[111.318px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[54.5px] not-italic text-[#8a8579] text-[12px] text-center top-[8.67px] tracking-[0.6px] uppercase">+ INFO</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute border-2 border-[#bbb4a3] border-solid h-[36px] left-[142.01px] rounded-[11184800px] top-[716px] w-[111.318px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[54.5px] not-italic text-[#bbb4a3] text-[12px] text-center top-[8.67px] tracking-[0.6px] uppercase">+ INFO</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.25),inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame() {
  return <div className="absolute left-[62px] size-[100px] top-[793px]" />;
}

export default function IPhone() {
  return (
    <div className="bg-[#d4cfc4] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 59">
      <Paragraph />
      <Container />
      <Button4 />
      <Button5 />
      <div className="absolute h-[200px] left-[56px] top-[226px] w-[284px]" data-name="Screenshot 2026-01-30 at 8.16.15 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260130At81615Pm1} />
      </div>
      <Frame />
    </div>
  );
}