"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, TRANSLATIONS } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("kp_lang") as Language;
    if (saved === "en" || saved === "gu") {
      setLangState(saved);
      document.documentElement.setAttribute("lang", saved);
    } else {
      document.documentElement.setAttribute("lang", "en");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("kp_lang", newLang);
      document.documentElement.setAttribute("lang", newLang);
    }
  };

  const t = (key: string, fallback?: string): string => {
    const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.en;
    if (dictionary[key]) {
      return dictionary[key];
    }
    const enFallback = TRANSLATIONS.en[key];
    if (enFallback) {
      return enFallback;
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
