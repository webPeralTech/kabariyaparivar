"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";

export default function LocationPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("location_eyebrow")}
            title={t("location_title")}
            description={t("location_text")}
          />
        </div>
      </section>

      {/* Temple Landmark & Map Showcase */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="animate-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {/* Temple Exterior Landmark Photo */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "2px solid var(--marigold)",
                display: "flex",
                flexDirection: "column",
                minHeight: "440px",
              }}
            >
              <div
                style={{
                  background: "var(--maroon-d)",
                  color: "var(--white)",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🏛️</span>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>
                    {lang === "gu" ? "મંદિર પરિસર અને મંડપ દર્શન" : "Temple Complex & Mandap"}
                  </span>
                </div>
                <span style={{ fontSize: "0.78rem", color: "var(--marigold)" }}>
                  {lang === "gu" ? "સાવરકુંડલા" : "Savarkundla"}
                </span>
              </div>

              <div style={{ position: "relative", flex: 1, minHeight: "320px", width: "100%" }}>
                <Image
                  src="/DEV_0528.JPG"
                  alt={lang === "gu" ? "શ્રી ખોડિયાર માતાજી મંદિર પરિસર સાવરકુંડલા" : "Temple Complex Savarkundla"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  padding: "12px 18px",
                  background: "var(--ivory-d)",
                  borderTop: "1px solid var(--line)",
                  fontSize: "0.85rem",
                  color: "var(--ink-soft)",
                  fontWeight: 500,
                }}
              >
                {lang === "gu"
                  ? "શ્રી ખોડિયાર માતાજી મંદિર - સાવરકુંડલા ધામ"
                  : "Shree Khodiyar Mataji Mandir - Savarkundla Dham"}
              </div>
            </div>

            {/* Google Map Embed */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "2px solid var(--marigold)",
                minHeight: "440px",
                display: "flex",
                flexDirection: "column",
                background: "var(--white)",
              }}
            >
              <div
                style={{
                  background: "var(--maroon-d)",
                  color: "var(--white)",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📍</span>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>
                    {lang === "gu" ? "લાઈવ ગૂગલ મેપ નેવિગેશન" : "Live Google Maps Navigation"}
                  </span>
                </div>
                <span style={{ fontSize: "0.78rem", color: "var(--marigold)" }}>
                  GPS
                </span>
              </div>

              <div style={{ position: "relative", flex: 1, minHeight: "320px", width: "100%" }}>
                <iframe
                  src={SITE_CONFIG.mapsUrl}
                  title="Kabariya Parivar Madh Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div
                style={{
                  padding: "12px 18px",
                  background: "var(--ivory-d)",
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                  {SITE_CONFIG.place}
                </span>
                <a
                  href={SITE_CONFIG.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--maroon-d)" }}
                >
                  {lang === "gu" ? "મેપમાં ખોલો" : "Open in Maps"} &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details & Direct Map Action */}
          <div
            className="animate-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            {/* Address Card */}
            <div className="feature-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--maroon-subtle)",
                    color: "var(--maroon)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 style={{ margin: 0 }}>{t("location_address_title")}</h3>
              </div>

              <p style={{ lineHeight: 1.7, marginBottom: "16px" }}>
                <strong>{lang === "gu" ? SITE_CONFIG.nameGu : SITE_CONFIG.name}</strong>
                <br />
                {lang === "gu"
                  ? "માતાજી મઢ, સાવરકુંડલા"
                  : "Mataji Madh, Savarkundla"}
                <br />
                {lang === "gu"
                  ? "જિલ્લો: અમરેલી, ગુજરાત, ભારત"
                  : "Dist. Amreli, Gujarat, India"}
              </p>

              <a
                href={SITE_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <span>📍</span> {t("location_directions_btn")} &rarr;
              </a>
            </div>

            {/* Contact Card */}
            <div className="feature-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(226, 166, 59, 0.15)",
                    color: "var(--marigold-d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 style={{ margin: 0 }}>{t("location_contact_title")}</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)", display: "block" }}>
                    {lang === "gu" ? "ફોન નંબર" : "Phone"}
                  </span>
                  <a href={`tel:${SITE_CONFIG.phone}`} style={{ fontWeight: 600, color: "var(--maroon)" }}>
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)", display: "block" }}>
                    {lang === "gu" ? "ઈમેલ" : "Email"}
                  </span>
                  <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontWeight: 600, color: "var(--maroon)" }}>
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "8px 16px" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
                </svg>
                {lang === "gu" ? "WhatsApp પર સંપર્ક કરો" : "Contact on WhatsApp"}
              </a>
            </div>

            {/* Travel Connectivity Guide */}
            <div className="feature-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--teal-light)",
                    color: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <h3 style={{ margin: 0 }}>
                  {lang === "gu" ? "કેવી રીતે પહોંચવું" : "How to Reach"}
                </h3>
              </div>

              <div style={{ fontSize: "0.88rem", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "8px" }}>
                <div>
                  <strong>{lang === "gu" ? "રેલવે:" : "Railway:"}</strong>{" "}
                  {lang === "gu" ? "સાવરકુંડલા રેલવે સ્ટેશન (SVKD)" : "Savarkundla Railway Station (SVKD)"}
                </div>
                <div>
                  <strong>{lang === "gu" ? "રોડ માર્ગ:" : "Roadway:"}</strong>{" "}
                  {lang === "gu" ? "અમરેલી, ભાવનગર અને રાજકોટથી સીધી બસ સેવા" : "Direct GSRTC bus connectivity from Amreli, Bhavnagar & Rajkot"}
                </div>
                <div>
                  <strong>{lang === "gu" ? "હવાઈ મથક:" : "Airport:"}</strong>{" "}
                  {lang === "gu" ? "રાજકોટ (RAJ) / અમદાવાદ (AMD)" : "Rajkot (RAJ) or Ahmedabad (AMD)"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
