import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && (
        <div className="eyebrow-mark" style={center ? { justifyContent: "center" } : undefined}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2 4 8v13h16V8Z" />
            <path d="M9 21v-7h6v7" />
          </svg>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2>{title}</h2>
      {description && <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginTop: "8px" }}>{description}</p>}
    </div>
  );
}
