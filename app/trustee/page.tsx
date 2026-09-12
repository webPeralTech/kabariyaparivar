"use client";

import React, { useState, useMemo } from "react";
import { TRUSTEES, BHUVA_SHREE } from "@/data/trusteeData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { PersonCard } from "@/components/PersonCard";
import { LightboxModal, LightboxPhoto } from "@/components/LightboxModal";

export default function TrusteePage() {
  const { t, lang } = useLanguage();
  const [lightboxState, setLightboxState] = useState<{
    photos: LightboxPhoto[];
    index: number;
  } | null>(null);

  // Trustees photo list for lightbox
  const trusteePhotos: LightboxPhoto[] = useMemo(() => {
    return TRUSTEES.map((person) => ({
      url: person.photo || "",
      caption: `${(lang === "gu" && person.nameGu) ? person.nameGu : person.name} — ${(lang === "gu" && person.roleGu) ? person.roleGu : person.role}`,
      title: (lang === "gu" && person.nameGu) ? person.nameGu : person.name,
    }));
  }, [lang]);

  // Bhuva Shree photo list for lightbox
  const bhuvaPhotos: LightboxPhoto[] = useMemo(() => {
    return BHUVA_SHREE.map((person) => ({
      url: person.photo || "",
      caption: `${(lang === "gu" && person.nameGu) ? person.nameGu : person.name} — ${(lang === "gu" && person.roleGu) ? person.roleGu : person.role}`,
      title: (lang === "gu" && person.nameGu) ? person.nameGu : person.name,
    }));
  }, [lang]);

  return (
    <div>
      {/* Trustee Committee Section */}
      <section style={{ paddingBottom: "36px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("trustee_eyebrow")}
            title={t("trustee_title")}
            description={t("trustee_text")}
          />

          <div className="people-grid" style={{ marginTop: "32px" }}>
            {TRUSTEES.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
                onPhotoClick={
                  person.photo
                    ? () => setLightboxState({ photos: trusteePhotos, index })
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bhuva Shree Section */}
      <section className="section-alt">
        <div className="container">
          <SectionHeader
            eyebrow={t("bhuva_eyebrow")}
            title={t("bhuva_title")}
            description={t("bhuva_text")}
            center
          />

          <div className="people-grid" style={{ marginTop: "32px" }}>
            {BHUVA_SHREE.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
                onPhotoClick={
                  person.photo
                    ? () => setLightboxState({ photos: bhuvaPhotos, index })
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Next/Prev/Download/Touch/Keyboard */}
      {lightboxState && (
        <LightboxModal
          photos={lightboxState.photos}
          currentIndex={lightboxState.index}
          onIndexChange={(newIdx) =>
            setLightboxState((prev) => (prev ? { ...prev, index: newIdx } : null))
          }
          onClose={() => setLightboxState(null)}
        />
      )}
    </div>
  );
}
