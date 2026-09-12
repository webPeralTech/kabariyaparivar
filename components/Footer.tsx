"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { TempleMark } from "./TempleMark";

const SOCIAL_META: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
  }
> = {
  whatsapp: {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
      </svg>
    ),
  },
  whatsappGroup: {
    name: "WhatsApp Group",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.66-3.3-1-4.5-1C4.83 13 2 14.5 2 17.25V19h15v-1.75c0-2.75-2.83-4.25-5.5-4.25zm-9-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm9 2c-.28 0-.58.02-.88.06 1.12.8 1.88 1.95 1.88 3.19V19h5v-1.75c0-2.75-2.83-4.25-6-4.25zm0-2c1.66 0 3-1.34 3-3s-1.34-3-3-3c-.41 0-.79.08-1.15.23.72.8 1.15 1.86 1.15 3.02s-.43 2.22-1.15 3.02c.36.15.74.23 1.15.23z" />
      </svg>
    ),
  },
  facebook: {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  instagram: {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  youtube: {
    name: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  twitter: {
    name: "X (Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
};


export function Footer() {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--ivory-d)",
        borderTop: "2px solid var(--line)",
        paddingTop: "64px",
        paddingBottom: "32px",
        marginTop: "auto",
        position: "relative",
      }}
    >
      {/* Decorative top border garland / accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--gold-gradient)",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div
                style={{
                  position: "relative",
                  width: "44px",
                  height: "44px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--marigold)",
                  background: "var(--white)",
                }}
              >
                <Image
                  src="/images.png"
                  alt="Kabariya Parivar Logo"
                  fill
                  sizes="44px"
                  style={{ objectFit: "contain", padding: "2px" }}
                />
              </div>
              <h4 style={{ margin: 0, fontSize: "1.4rem", color: "var(--maroon-d)" }}>
                {lang === "gu" ? SITE_CONFIG.nameGu : SITE_CONFIG.name}
              </h4>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: "34ch" }}>
              {t("footer_about")}
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
              <a
                href={SITE_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-gold"
                style={{ textDecoration: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}
                title={lang === "gu" ? "ગૂગલ મેપ પર લોકેશન જુઓ" : "View Location on Google Maps"}
              >
                <span>📍</span> {lang === "gu" ? "સાવરકુંડલા, અમરેલી" : "Savarkundla, Amreli"}
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                color: "var(--maroon-d)",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "8px",
              }}
            >
              {t("footer_explore")}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "28px",
                  height: "2px",
                  background: "var(--marigold)",
                }}
              />
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 18px" }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink-soft)",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--maroon)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-soft)")}
                >
                  {t(link.key, lang === "gu" ? link.labelGu : link.labelEn)}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Contact */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                color: "var(--maroon-d)",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "8px",
              }}
            >
              {t("footer_connect")}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "28px",
                  height: "2px",
                  background: "var(--marigold)",
                }}
              />
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{ color: "var(--ink-soft)", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                style={{ color: "var(--ink-soft)", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--ink-soft)", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {lang === "gu" ? "ગૂગલ મેપ નેવિગેશન" : "Google Maps Direction"}
              </a>
              <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
                {Object.entries(SITE_CONFIG.socials).map(([key, url]) => {
                  const meta = SOCIAL_META[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`footer-social-icon ${key}`}
                      aria-label={meta ? meta.name : key}
                      title={meta ? meta.name : key}
                    >
                      {meta ? meta.icon : key}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.85rem",
            color: "var(--ink-muted)",
          }}
        >
          <span>{t("footer_property")}</span>
          <span>
            &copy; {currentYear} {lang === "gu" ? SITE_CONFIG.nameGu : SITE_CONFIG.name}. {t("footer_rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
