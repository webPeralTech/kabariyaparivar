import React from "react";

interface TempleMarkProps {
  size?: number;
  className?: string;
}

export function TempleMark({ size = 44, className = "" }: TempleMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Temple Mark"
    >
      {/* Sacred Shikhara / Dome */}
      <path
        d="M24 3C19 10 15 14 15 20a9 9 0 0 0 18 0c0-6-4-10-9-17Z"
        fill="#E2A63B"
      />
      {/* Kalash / Dhwaja Pinnacle */}
      <circle cx="24" cy="4" r="2" fill="#B87F1F" />
      {/* Temple Steps / Base */}
      <rect x="10" y="30" width="28" height="4" rx="1" fill="#FAF5EB" stroke="#E8DFCB" strokeWidth="1" />
      <rect x="7" y="34" width="34" height="9" rx="1.5" fill="#FAF5EB" stroke="#E8DFCB" strokeWidth="1" />
      {/* Sanctum Sanctorum (Garbhagriha) */}
      <rect
        x="17"
        y="20"
        width="14"
        height="14"
        rx="2"
        fill="#7A2436"
        stroke="#E2A63B"
        strokeWidth="1.5"
      />
      {/* Sacred Jyot Flame inside */}
      <path
        d="M24 23c-1.5 2-2.5 3.5-2.5 5a2.5 2.5 0 0 0 5 0c0-1.5-1-3-2.5-5Z"
        fill="#F9D976"
      />
    </svg>
  );
}
