"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Person } from "@/data/trusteeData";
import { useLanguage } from "@/context/LanguageContext";
import { LightboxModal } from "@/components/LightboxModal";

interface PersonCardProps {
  person: Person;
  onPhotoClick?: () => void;
}

export function PersonCard({ person, onPhotoClick }: PersonCardProps) {
  const { lang, t } = useLanguage();
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false);
  const displayName = (lang === "gu" && person.nameGu) ? person.nameGu : person.name;
  const displayRole = (lang === "gu" && person.roleGu) ? person.roleGu : person.role;

  const handlePhotoClick = () => {
    if (!person.photo) return;
    if (onPhotoClick) {
      onPhotoClick();
    } else {
      setIsLocalModalOpen(true);
    }
  };

  return (
    <>
      <div className="people-card">
        <div
          className={`people-photo-frame ${person.photo ? "clickable" : ""}`}
          onClick={handlePhotoClick}
          onKeyDown={(e) => {
            if (person.photo && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handlePhotoClick();
            }
          }}
          role={person.photo ? "button" : undefined}
          tabIndex={person.photo ? 0 : undefined}
          title={person.photo ? (lang === "gu" ? "ફોટો મોટો જોવા ક્લિક કરો" : "Click to view full photo") : undefined}
          aria-label={person.photo ? (lang === "gu" ? `${displayName} નો ફોટો મોટો જોવા ક્લિક કરો` : `View photo of ${displayName}`) : undefined}
        >
          {person.photo ? (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={person.photo}
                alt={displayName}
                fill
                sizes="120px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div className="photo-zoom-hint" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "var(--marigold-d)",
                padding: "10px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, marginTop: "4px", textAlign: "center" }}>
                {t("photo_coming_soon", "Photo coming soon")}
              </span>
            </div>
          )}
        </div>

        <div className="role">{displayRole}</div>
        <h3>{displayName}</h3>

        {person.phone && (
          <a
            href={`tel:${person.phone}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "10px",
              fontSize: "0.85rem",
              color: "var(--ink-soft)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {person.phone}
          </a>
        )}
      </div>

      {isLocalModalOpen && person.photo && (
        <LightboxModal
          src={person.photo}
          caption={`${displayName} — ${displayRole}`}
          onClose={() => setIsLocalModalOpen(false)}
        />
      )}
    </>
  );
}
