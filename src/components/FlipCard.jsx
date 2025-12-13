// src/components/FlipCard.jsx
import React from "react";

export default function FlipCard({ name, Icon }) {
  return (
    <div className="flip-card w-22 h-22">
      <div className="flip-inner">
        {/* FRONT */}
        <div className="flip-front flex items-center justify-center bg-[#0d1b27] border border-[#C2A87866]  text-[#E8EAEF] text-center p-4 hover:border-[#C2A878]">
          <p className="text-sm">{name}</p>
        </div>

        {/* BACK */}
        <div className="flip-back flex items-center justify-center bg-[#132636] border border-[#C2A87866]  hover:border-[#C2A878]">
          <Icon className="w-8 h-8 text-[#C2A878]" />
        </div>
      </div>
    </div>
  );
}
