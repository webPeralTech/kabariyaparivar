"use client";

import React, { useState } from "react";
import { PRAYERS_DATA } from "@/data/prayersData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";

export default function PrayersPage() {
  const { lang, t } = useLanguage();
  const [activeScript, setActiveScript] = useState<"gu" | "en">("gu");

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("prayers_eyebrow")}
            title={t("prayers_title")}
            description={t("prayers_text")}
          />
        </div>
      </section>

      {/* Devotional Quote & Script Switcher Bar */}
      <section style={{ paddingTop: 0, paddingBottom: "40px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          {/* Sacred Quote Card */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--ivory-d) 0%, var(--ivory-warm) 100%)",
              border: "1px solid var(--line)",
              borderLeft: "5px solid var(--marigold)",
              borderRadius: "var(--radius-md)",
              padding: "24px 28px",
              boxShadow: "var(--shadow-sm)",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "var(--maroon-d)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;{t("prayers_quote")}&rdquo;
            </p>
          </div>

          {/* Script Switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "32px",
              paddingBottom: "16px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink-soft)" }}>
              {lang === "gu" ? "લિપિ પસંદ કરો:" : "Select Script:"}
            </span>

            <div
              style={{
                display: "inline-flex",
                background: "var(--ivory-d)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-pill)",
                padding: "3px",
              }}
            >
              <button
                type="button"
                onClick={() => setActiveScript("gu")}
                style={{
                  padding: "6px 16px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  backgroundColor: activeScript === "gu" ? "var(--maroon)" : "transparent",
                  color: activeScript === "gu" ? "var(--white)" : "var(--ink-soft)",
                  transition: "var(--transition)",
                }}
              >
                ગુજરાતી લિપિ (Gujarati)
              </button>
              <button
                type="button"
                onClick={() => setActiveScript("en")}
                style={{
                  padding: "6px 16px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  backgroundColor: activeScript === "en" ? "var(--maroon)" : "transparent",
                  color: activeScript === "en" ? "var(--white)" : "var(--ink-soft)",
                  transition: "var(--transition)",
                }}
              >
                English Transliteration
              </button>
            </div>
          </div>

          {/* Prayer Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {PRAYERS_DATA.map((prayer) => {
              const verses = activeScript === "gu" ? prayer.versesGu : prayer.versesEn;

              return (
                <div
                  key={prayer.id}
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--line)",
                    padding: "36px",
                    boxShadow: "var(--shadow-sm)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "24px",
                      borderBottom: "1px solid var(--line-soft)",
                      paddingBottom: "16px",
                    }}
                  >
                    <div>
                      <span className="badge badge-gold" style={{ marginBottom: "8px" }}>
                        {lang === "gu" ? prayer.categoryGu : prayer.categoryEn}
                      </span>
                      <h2 style={{ fontSize: "1.65rem", color: "var(--maroon-d)", margin: 0 }}>
                        {lang === "gu" ? prayer.titleGu : prayer.titleEn}
                      </h2>
                    </div>

                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--teal)",
                        background: "var(--teal-light)",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      🕒 {lang === "gu" ? prayer.timingGu : prayer.timingEn}
                    </span>
                  </div>

                  {/* Prayer Verses */}
                  <div
                    style={{
                      fontSize: activeScript === "gu" ? "1.15rem" : "1.05rem",
                      lineHeight: 2,
                      color: "var(--ink)",
                      fontFamily: activeScript === "gu" ? "var(--font-gu-body)" : "var(--font-body)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {verses.map((line, idx) => (
                      <div
                        key={idx}
                        style={{
                          minHeight: line ? "auto" : "16px",
                          fontWeight: line.startsWith("ઓમ જયો") || line.startsWith("Om Jayo") || line.startsWith("બોલો") ? 700 : 400,
                          color: line.startsWith("ઓમ જયો") || line.startsWith("Om Jayo") ? "var(--maroon)" : "inherit",
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
