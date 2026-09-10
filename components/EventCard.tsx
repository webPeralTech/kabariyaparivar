"use client";

import React from "react";
import { EventItem } from "@/data/eventsData";
import { useLanguage } from "@/context/LanguageContext";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const { lang } = useLanguage();
  const isGu = lang === "gu";

  return (
    <div className="feature-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
          gap: "12px",
        }}
      >
        <span className="badge badge-gold">
          {isGu ? event.badgeGu || "ઉત્સવ" : event.badgeEn || "Event"}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.85rem",
            color: "var(--maroon)",
            fontWeight: 600,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{isGu ? event.dateGu : event.dateEn}</span>
        </div>
      </div>

      <h3 style={{ fontSize: "1.35rem", marginBottom: "10px" }}>
        {isGu ? event.titleGu : event.titleEn}
      </h3>

      <p style={{ fontSize: "0.93rem", lineHeight: 1.6, flexGrow: 1 }}>
        {isGu ? event.descriptionGu : event.descriptionEn}
      </p>

      <div
        style={{
          marginTop: "18px",
          paddingTop: "14px",
          borderTop: "1px solid var(--line)",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          fontSize: "0.86rem",
          color: "var(--ink-soft)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" style={{ color: "var(--teal)" }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{isGu ? event.locationGu : event.locationEn}</span>
        </div>

        {(event.timeGu || event.timeEn) && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" style={{ color: "var(--marigold-d)" }}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{isGu ? event.timeGu : event.timeEn}</span>
          </div>
        )}
      </div>
    </div>
  );
}
