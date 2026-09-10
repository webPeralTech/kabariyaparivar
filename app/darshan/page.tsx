"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";

export default function DarshanPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("darshan_eyebrow")}
            title={t("darshan_title")}
            description={t("darshan_text")}
          />
        </div>
      </section>

      {/* Sacred Sihasan Darshan Showcase */}
      <section style={{ paddingTop: 0, paddingBottom: "36px" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              background: "linear-gradient(135deg, var(--white) 0%, var(--ivory-warm) 100%)",
              border: "2px solid var(--marigold)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
            }}
            className="animate-fade-up"
          >
            {/* Header Ribbon */}
            <div
              style={{
                background: "linear-gradient(90deg, var(--maroon-d) 0%, var(--maroon) 50%, var(--maroon-d) 100%)",
                color: "var(--white)",
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.2rem" }}>👑</span>
                <span style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "0.03em" }}>
                  {lang === "gu" ? "શ્રી ખોડિયાર માતાજી પાવન સિંહાસન દર્શન" : "Shree Khodiyar Mataji Sacred Altar Darshan"}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.82rem",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-pill)",
                  background: "rgba(226, 166, 59, 0.25)",
                  color: "var(--marigold-l)",
                  fontWeight: 600,
                  border: "1px solid rgba(226, 166, 59, 0.4)",
                }}
              >
                {lang === "gu" ? "સાવરકુંડલા ધામ" : "Savarkundla Dham"}
              </span>
            </div>

            {/* Sacred Image Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(260px, 45vw, 440px)",
                backgroundColor: "#16070a",
              }}
            >
              <Image
                src="/Mataji%20Sihasan%20Madh%20Horizontal.jpg"
                alt={lang === "gu" ? "શ્રી માતાજી સિંહાસન મઢ દર્શન" : "Shree Mataji Sihasan Madh Darshan"}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 960px"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Holy Shloka & Inscription */}
            <div
              style={{
                padding: "22px 28px",
                background: "var(--ivory-d)",
                borderTop: "1px solid var(--line)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "1.22rem",
                  fontWeight: 700,
                  color: "var(--maroon-d)",
                  lineHeight: 1.6,
                }}
              >
                ॥ રવિ રાંદલને ખોડિયાર, કાબરિયા કુળ દેવતા, સ્થાનક સાવરકુંડલા, &quot;પ્રતાપ&quot; સૌ સમસ્તા. ॥
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.92rem",
                  color: "var(--ink-soft)",
                  fontWeight: 500,
                }}
              >
                {lang === "gu"
                  ? "શ્રી રવિ રાંદલ માતાજી અને શ્રી ખોડિયાર માતાજી સુવર્ણ સિંહાસન - મુખ્ય મઢ, સાવરકુંડલા"
                  : "Shree Ravi Randal Mataji & Shree Khodiyar Mataji Holy Golden Altar - Main Madh, Savarkundla"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Embed */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              background: "var(--white)",
              border: "2px solid var(--marigold)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Stream Header Bar */}
            <div
              style={{
                background: "var(--maroon-d)",
                color: "var(--white)",
                padding: "12px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#FF3B30",
                    boxShadow: "0 0 8px #FF3B30",
                  }}
                />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {lang === "gu" ? "લાઈવ પ્રસારણ" : "Live Broadcast"}
                </span>
              </div>

              <span style={{ fontSize: "0.82rem", color: "var(--marigold)" }}>
                {t("darshan_caption")}
              </span>
            </div>

            {/* Video Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                backgroundColor: "#000",
              }}
            >
              <iframe
                src={SITE_CONFIG.darshan.embedUrl}
                title="Kabariya Parivar Live Darshan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>

            {/* Bottom Caption & Prayer Quick Link */}
            <div
              style={{
                padding: "16px 24px",
                background: "var(--ivory-d)",
                borderTop: "1px solid var(--line)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--ink-soft)" }}>
                {t("darshan_caption")} &bull; {SITE_CONFIG.place}
              </p>
              <Link href="/prayers" className="btn btn-outline" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
                {lang === "gu" ? "આરતી અને સ્તુતિ વાંચો" : "Read Aarti & Prayers"} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aarti Schedule & Help Cards */}
      <section className="section-alt">
        <div className="container">
          <SectionHeader
            title={lang === "gu" ? "દૈનિક આરતી સમયપત્રક" : "Daily Aarti Schedule"}
            description={
              lang === "gu"
                ? "જો લાઈવ સ્ટ્રીમ ઑફલાઇન હોય, તો નીચે દર્શાવેલ આરતી સમયે ફરી મુલાકાત લો."
                : "If the stream is currently offline, please check back during daily aarti times."
            }
            center
          />

          <div className="feature-grid">
            <div className="feature-card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(226, 166, 59, 0.15)",
                  color: "var(--marigold-d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h3>{t("darshan_morning_title")}</h3>
              <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--maroon-d)", margin: "8px 0" }}>
                {t("darshan_morning_time")}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", margin: 0 }}>
                {lang === "gu" ? "મંગળા / સવારની આરતી" : "Morning Mangala Aarti"}
              </p>
            </div>

            <div className="feature-card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--maroon-subtle)",
                  color: "var(--maroon)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3>{t("darshan_evening_title")}</h3>
              <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--maroon-d)", margin: "8px 0" }}>
                {t("darshan_evening_time")}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", margin: 0 }}>
                {lang === "gu" ? "સાંજની સંધ્યા આરતી" : "Evening Sandhya Aarti"}
              </p>
            </div>

            <div className="feature-card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--teal-light)",
                  color: "var(--teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
                </svg>
              </div>
              <h3>{t("darshan_trouble_title")}</h3>
              <p style={{ margin: "8px 0 16px", fontSize: "0.92rem" }}>
                {t("darshan_trouble_text")}
              </p>
              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ padding: "8px 18px", fontSize: "0.85rem", width: "100%" }}
              >
                {lang === "gu" ? "WhatsApp પર સહાય મેળવો" : "WhatsApp Support"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
