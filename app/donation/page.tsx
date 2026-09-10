"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { BankDetailsCard } from "@/components/BankDetailsCard";

export default function DonationPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("donation_eyebrow")}
            title={t("donation_title")}
            description={t("donation_text")}
          />
        </div>
      </section>

      {/* Main Donation Panel: Bank Card + UPI/Paytm Box */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            {/* Left Column: Bank Transfer Card with Interactive Copy */}
            <div style={{ flex: "1 1 500px" }}>
              <BankDetailsCard />
            </div>

            {/* Right Column: QR Code & Paytm Gateway Box */}
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  background: "var(--ivory-d)",
                  border: "2px dashed var(--marigold)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  marginBottom: "20px",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="60" height="60" style={{ color: "var(--maroon)" }}>
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--maroon-d)", marginTop: "8px" }}>
                  {lang === "gu" ? "UPI / Paytm QR કોડ" : "UPI / Paytm QR Code"}
                </span>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)", marginBottom: "14px" }}>
                {t("donation_qr_text")}
              </p>

              <a
                href={SITE_CONFIG.bankDetails.paytmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%", maxWidth: "260px", marginBottom: "16px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                {t("donation_paytm_btn")}
              </a>

              <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>
                {lang === "gu"
                  ? "ગૂગલ પે, ફોનપે અથવા પેટીએમ દ્વારા સ્કેન કરો"
                  : "Supports GPay, PhonePe, Paytm, BHIM & all UPI apps"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Usage of Donations */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "840px" }}>
          <div
            style={{
              background: "var(--white)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--line)",
              padding: "40px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div className="eyebrow-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{lang === "gu" ? "પારદર્શિતા અને સેવા" : "Transparency & Seva"}</span>
            </div>

            <h2 style={{ marginBottom: "16px" }}>{t("donation_use_title")}</h2>

            <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "var(--ink-soft)" }}>
              {t("donation_use_text")}
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { titleEn: "Temple Upkeep", titleGu: "મઢ જાળવણી & પૂજા", icon: "🏛️" },
                { titleEn: "Annual Yagna", titleGu: "વાર્ષિક યજ્ઞ વ્યવસ્થા", icon: "🔥" },
                { titleEn: "Mahaprasad Seva", titleGu: "મહાપ્રસાદ વિતરણ", icon: "🥣" },
                { titleEn: "Parivar Facilities", titleGu: "યાત્રાળુ સુવિધાઓ", icon: "🤝" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    background: "var(--ivory-d)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--line)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--maroon-d)",
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <span>{lang === "gu" ? item.titleGu : item.titleEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
