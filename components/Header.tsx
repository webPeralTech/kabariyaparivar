"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG, NAV_LINKS } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { TempleMark } from "./TempleMark";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const pathname = usePathname();
  const { lang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const socialLinks = [
    {
      name: "WhatsApp",
      url: SITE_CONFIG.socials.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: SITE_CONFIG.socials.facebook,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5H17V3.7C16.6 3.6 15.4 3.5 14 3.5c-2.8 0-4.7 1.7-4.7 4.9v2.5H6.6V14h2.7v7Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: SITE_CONFIG.socials.youtube,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7c.2 1 1 1.8 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.8 2.8 0 0 0 2-2c.4-1.5.4-4.7.4-4.7ZM10 15.2V8.8L15.8 12Z" />
        </svg>
      ),
    },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
        boxShadow: scrolled ? "0 4px 20px rgba(32, 26, 24, 0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top Header Row */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "12px",
          paddingBottom: "12px",
          gap: "16px",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "var(--ink)",
          }}
          aria-label="Kabariya Parivar Home"
        >
          <div className="header-brand-logo">
            <Image
              src="/kabariya%20logo/1000544246.jpg"
              alt="Kabariya Parivar Logo"
              fill
              sizes="(max-width: 600px) 46px, 60px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div>
            <div className="header-brand-title">
              {lang === "gu" ? SITE_CONFIG.nameGu : SITE_CONFIG.name}
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--marigold-d)",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {lang === "gu" ? SITE_CONFIG.taglineGu : SITE_CONFIG.tagline}
            </div>
          </div>
        </Link>

        {/* Right Tools: Socials, Language, Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Social Icons (Desktop) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            className="header-socials"
          >
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  color: "var(--ink-soft)",
                  background: "var(--ivory-d)",
                  border: "1px solid var(--line)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--maroon)";
                  e.currentTarget.style.borderColor = "var(--marigold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ink-soft)";
                  e.currentTarget.style.borderColor = "var(--line)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Bilingual Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              padding: "8px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--line)",
              background: "var(--ivory-d)",
              color: "var(--maroon-d)",
            }}
            className="mobile-menu-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar (Desktop) */}
      <nav
        style={{
          borderTop: "1px solid var(--line-soft)",
          background: "rgba(250, 245, 235, 0.7)",
        }}
        className="desktop-nav-wrap"
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingTop: "6px",
            paddingBottom: "6px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  position: "relative",
                  padding: "8px 4px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.98rem",
                  letterSpacing: "0.02em",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--maroon-d)" : "var(--ink-soft)",
                  whiteSpace: "nowrap",
                  transition: "var(--transition)",
                }}
              >
                {t(link.key, lang === "gu" ? link.labelGu : link.labelEn)}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      height: "2.5px",
                      background: "var(--gold-gradient)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--white)",
            borderBottom: "2px solid var(--marigold)",
            padding: "20px 24px",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: "slideDown 0.28s var(--ease) forwards",
          }}
          className="mobile-drawer"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.02em",
                  fontSize: "1.05rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--maroon)" : "var(--ink)",
                  background: isActive ? "var(--ivory-d)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{t(link.key, lang === "gu" ? link.labelGu : link.labelEn)}</span>
                {isActive && (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--marigold)",
                    }}
                  />
                )}
              </Link>
            );
          })}

          <div
            style={{
              paddingTop: "16px",
              marginTop: "8px",
              borderTop: "1px solid var(--line)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              {lang === "gu" ? "સંપર્ક કરો:" : "Connect with us:"}
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--maroon)",
                    padding: "6px",
                    background: "var(--ivory-d)",
                    borderRadius: "50%",
                    display: "flex",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav-wrap {
            display: none;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .header-socials {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
