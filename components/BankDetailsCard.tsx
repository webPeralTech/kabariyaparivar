"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export function BankDetailsCard() {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const rows = [
    { labelKey: "donation_label_acname", value: SITE_CONFIG.bankDetails.accountName, copyable: false },
    { labelKey: "donation_label_acnum", value: SITE_CONFIG.bankDetails.accountNumber, copyable: true, id: "acnum" },
    { labelKey: "donation_label_ifsc", value: SITE_CONFIG.bankDetails.ifscCode, copyable: true, id: "ifsc" },
    { labelKey: "donation_label_bank", value: SITE_CONFIG.bankDetails.bankAndBranch, copyable: false },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(145deg, var(--maroon) 0%, var(--maroon-d) 100%)",
        color: "var(--white)",
        borderRadius: "var(--radius-lg)",
        padding: "36px",
        boxShadow: "var(--shadow-lg)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(226, 166, 59, 0.3)",
      }}
    >
      {/* Decorative Golden Pattern Corner Accent */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(226,166,59,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          paddingBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--gold-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ink)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M4 10l8-6 8 6" />
            </svg>
          </div>
          <h3 style={{ margin: 0, color: "var(--white)", fontSize: "1.4rem" }}>
            {t("donation_bank_title", "Bank Transfer Details")}
          </h3>
        </div>

        <span className="badge badge-gold">
          {t("donation_eyebrow", "Seva")}
        </span>
      </div>

      {/* Details Table */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {rows.map((row) => (
          <div
            key={row.labelKey}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--marigold)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {t(row.labelKey)}
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.02em" }}>
                {row.value}
              </div>
            </div>

            {row.copyable && (
              <button
                type="button"
                onClick={() => handleCopy(row.value, row.id!)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: copiedKey === row.id ? "var(--marigold)" : "rgba(255, 255, 255, 0.15)",
                  color: copiedKey === row.id ? "var(--ink)" : "var(--white)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  transition: "var(--transition)",
                }}
              >
                {copiedKey === row.id ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t("donation_copied", "Copied!")}
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {t("donation_copy_btn", "Copy")}
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "24px",
          paddingTop: "18px",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.85)", maxWidth: "42ch" }}>
          {t("donation_receipt")}
        </p>

        <a
          href={SITE_CONFIG.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-white"
          style={{ fontSize: "0.88rem", padding: "10px 20px" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1.3.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
          </svg>
          {t("donation_whatsapp_btn")}
        </a>
      </div>
    </div>
  );
}
