"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "var(--ivory-warm)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-pill)",
        padding: "3px",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
      }}
      role="group"
      aria-label="Language Switcher"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        style={{
          padding: "5px 12px",
          fontSize: "0.82rem",
          fontWeight: 700,
          borderRadius: "var(--radius-pill)",
          color: lang === "en" ? "var(--white)" : "var(--ink-soft)",
          background: lang === "en" ? "var(--maroon)" : "transparent",
          boxShadow: lang === "en" ? "0 2px 6px rgba(122, 36, 54, 0.3)" : "none",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("gu")}
        aria-pressed={lang === "gu"}
        style={{
          padding: "5px 12px",
          fontSize: "0.86rem",
          fontWeight: 700,
          borderRadius: "var(--radius-pill)",
          color: lang === "gu" ? "var(--white)" : "var(--ink-soft)",
          background: lang === "gu" ? "var(--maroon)" : "transparent",
          boxShadow: lang === "gu" ? "0 2px 6px rgba(122, 36, 54, 0.3)" : "none",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
      >
        ગુ
      </button>
    </div>
  );
}
