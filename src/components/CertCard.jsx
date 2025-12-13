import React, { useState } from "react";

export default function CertCard({ name, img, issuer, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-full cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`flip-inner w-full h-full relative transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="flip-front absolute w-full h-full backface-hidden p-4 border-2 border-[#C2A878] bg-[#0d1b27] overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-contain" />
        </div>

        {/* BACK */}
        <div className="flip-back absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center border-2 border-[#C2A878] bg-[#132636] text-white p-4 text-center">
          <p className="text-sm text-[#C2A878] font-semibold mb-1">{issuer}</p>
          <p className="text-lg font-bold mb-2">{name}</p>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
