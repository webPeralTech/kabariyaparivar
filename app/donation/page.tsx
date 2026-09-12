"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { BankDetailsCard } from "@/components/BankDetailsCard";
import { LightboxModal, LightboxPhoto } from "@/components/LightboxModal";

export default function DonationPage() {
  const { lang, t } = useLanguage();
  const [activeLightbox, setActiveLightbox] = useState<LightboxPhoto | null>(null);
  const [copiedGroupLink, setCopiedGroupLink] = useState(false);

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedGroupLink(true);
      setTimeout(() => setCopiedGroupLink(false), 2500);
    } catch {
      // fallback
    }
  };

  const paymentQrPhoto: LightboxPhoto = {
    url: "/qr_codes/PaymentQr.jpeg",
    caption: `${SITE_CONFIG.bankDetails.accountName} · TID: ${SITE_CONFIG.bankDetails.tid || "62816522"} (HDFC Bank SmartHub)`,
    title: lang === "gu" ? "સત્તાવાર UPI / પેમેન્ટ QR કોડ" : "Official UPI / Payment QR Code",
  };

  const whatsappQrPhoto: LightboxPhoto = {
    url: "/qr_codes/WhatsappGroup.jpeg",
    caption: lang === "gu"
      ? "કાબરીયા પરિવાર 01 સત્તાવાર WhatsApp ગ્રુપ"
      : "Kabariya Parivar 01 Official WhatsApp Group",
    title: lang === "gu" ? "WhatsApp ગ્રુપ QR કોડ" : "WhatsApp Group QR Code",
  };

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
      <section style={{ paddingTop: 0, paddingBottom: "36px" }}>
        <div className="container">
          <div
            className="animate-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            {/* Left Column: Bank Transfer Card with Interactive Copy */}
            <div style={{ flex: "1 1 480px" }}>
              <BankDetailsCard />
            </div>

            {/* Right Column: Official Payment QR Code & Gateway Box */}
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                {/* Header Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(226, 166, 59, 0.15)",
                    color: "var(--maroon-d)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    border: "1px solid rgba(226, 166, 59, 0.4)",
                  }}
                >
                  <span>⚡</span>
                  <span>{lang === "gu" ? "ઇન્સ્ટન્ટ UPI પેમેન્ટ" : "Instant UPI Payment"}</span>
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "var(--maroon-d)", marginBottom: "4px" }}>
                  {lang === "gu" ? "સત્તાવાર પેમેન્ટ QR કોડ" : "Official Payment QR Code"}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--ink-muted)", marginBottom: "18px" }}>
                  {SITE_CONFIG.bankDetails.accountName}
                </p>

                {/* Clickable QR Code Frame */}
                <div
                  className="qr-preview-box"
                  onClick={() => setActiveLightbox(paymentQrPhoto)}
                  title={t("donation_qr_zoom_hint")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveLightbox(paymentQrPhoto);
                    }
                  }}
                  style={{
                    width: "220px",
                    height: "270px",
                    margin: "0 auto 16px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/qr_codes/PaymentQr.jpeg"
                    alt="Kabariya Parivar Payment QR Code"
                    fill
                    sizes="220px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                  <div className="qr-zoom-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="28" height="28">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    <span>{t("donation_qr_zoom_hint")}</span>
                  </div>
                </div>

                {/* TID & Details */}
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--maroon-d)",
                    marginBottom: "12px",
                  }}
                >
                  TID: <span style={{ fontFamily: "monospace", letterSpacing: "1px" }}>62816522</span> · HDFC SmartHub
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", marginBottom: "16px" }}>
                  {t("donation_qr_text")}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => setActiveLightbox(paymentQrPhoto)}
                  className="btn btn-gold"
                  style={{ width: "100%", maxWidth: "280px" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                  {lang === "gu" ? "મોટો QR કોડ & ડાઉનલોડ" : "Expand & Download QR"}
                </button>

                <span style={{ fontSize: "0.78rem", color: "var(--ink-muted)", marginTop: "4px" }}>
                  {lang === "gu"
                    ? "ગૂગલ પે, ફોનપે, પેટીએમ અથવા ભીમ દ્વારા સ્કેન કરો"
                    : "Supports GPay, PhonePe, Paytm, BHIM & all UPI apps"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community & Official Group Section */}
      <section style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "48px 0" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, rgba(37, 211, 102, 0.04) 0%, rgba(226, 166, 59, 0.06) 100%)",
              border: "1.5px solid rgba(37, 211, 102, 0.25)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 32px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "36px",
                alignItems: "center",
              }}
            >
              {/* Left Box: WhatsApp Group QR Code */}
              <div style={{ textAlign: "center" }}>
                <div
                  className="qr-preview-box"
                  onClick={() => setActiveLightbox(whatsappQrPhoto)}
                  title={t("donation_qr_zoom_hint")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveLightbox(whatsappQrPhoto);
                    }
                  }}
                  style={{
                    width: "210px",
                    height: "260px",
                    margin: "0 auto 12px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/qr_codes/WhatsappGroup.jpeg"
                    alt="Kabariya Parivar WhatsApp Group QR Code"
                    fill
                    sizes="210px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="qr-zoom-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="28" height="28">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    <span>{t("donation_qr_zoom_hint")}</span>
                  </div>
                </div>

                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#075e54" }}>
                  Kabariya Parivar 01 ✅
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--ink-soft)", marginTop: "4px" }}>
                  {t("whatsapp_group_scan_text")}
                </div>
              </div>

              {/* Right Box: Info & Join Actions */}
              <div>
                <div className="eyebrow-mark" style={{ marginBottom: "8px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>{t("whatsapp_group_eyebrow")}</span>
                </div>

                <h2 style={{ fontSize: "1.7rem", color: "var(--maroon-d)", marginBottom: "14px", lineHeight: 1.25 }}>
                  {t("whatsapp_group_title")}
                </h2>

                <p style={{ fontSize: "0.98rem", lineHeight: 1.65, color: "var(--ink-soft)", marginBottom: "22px" }}>
                  {t("whatsapp_group_text")}
                </p>

                {/* Benefits Bullet Points */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", marginBottom: "26px" }}>
                  {[
                    {
                      icon: "📢",
                      en: "Get instant announcements for annual Yagna & festivals",
                      gu: "વાર્ષિક યજ્ઞ, ઉત્સવો અને સ્નેહમિલનની ત્વરિત સત્તાવાર માહિતી",
                    },
                    {
                      icon: "📸",
                      en: "Receive HD photo albums & video highlights",
                      gu: "મઢ મહોત્સવોના ફોટો આલ્બમ્સ અને વિડિયો અપડેટ્સ",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--ink)" }}>
                      <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                      <span>{lang === "gu" ? item.gu : item.en}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Actions */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <a
                    href={SITE_CONFIG.socials.whatsappGroup || "https://chat.whatsapp.com/HrM82SM2mFFJdWotk7MV5g?s=qt&p=i&mlu=4&ilr=4"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ fontSize: "0.96rem", padding: "12px 24px" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                    </svg>
                    <span>{t("whatsapp_group_btn")}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyLink(SITE_CONFIG.socials.whatsappGroup || "https://chat.whatsapp.com/HrM82SM2mFFJdWotk7MV5g?s=qt&p=i&mlu=4&ilr=4")}
                    className="btn btn-outline"
                    style={{ fontSize: "0.9rem", padding: "11px 20px" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copiedGroupLink ? t("whatsapp_group_copied") : t("whatsapp_group_copy_btn")}</span>
                  </button>

                  {/* <a
                    href={SITE_CONFIG.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: "0.9rem", padding: "11px 20px" }}
                    title={t("donation_whatsapp_btn")}
                  >
                    <span>💬</span>
                    <span>{t("donation_whatsapp_btn")}</span>
                  </a> */}
                </div>
              </div>
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

      {/* Lightbox for QR Codes */}
      {activeLightbox && (
        <LightboxModal
          src={activeLightbox.url}
          caption={activeLightbox.caption}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
}
