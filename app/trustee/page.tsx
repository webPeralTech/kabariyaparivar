"use client";

import React from "react";
import { TRUSTEES, BHUVA_SHREE } from "@/data/trusteeData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { PersonCard } from "@/components/PersonCard";

export default function TrusteePage() {
  const { t } = useLanguage();

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
              <PersonCard key={index} person={person} />
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
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
