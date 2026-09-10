"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { UPCOMING_EVENTS } from "@/data/eventsData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";

export default function EventPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("event_eyebrow")}
            title={t("event_title")}
            description={t("event_text")}
          />
        </div>
      </section>

      {/* Events Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="animate-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "28px",
            }}
          >
            {UPCOMING_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated & Social Community CTA */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <div
            style={{
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--line)",
              padding: "48px 32px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(37, 211, 102, 0.15)",
                color: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
              </svg>
            </div>

            <h2 style={{ marginBottom: "12px" }}>{t("event_stay_title")}</h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "50ch", margin: "0 auto 24px" }}>
              {t("event_stay_text")}
            </p>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
                </svg>
                {t("event_stay_btn")}
              </a>

              <Link href="/gallery" className="btn btn-outline">
                {lang === "gu" ? "ગત વર્ષોની ગેલેરી જુઓ" : "View Past Event Archives"} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
