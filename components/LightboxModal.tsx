"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface LightboxModalProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

export function LightboxModal({ src, caption, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!src) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(18, 14, 13, 0.92)",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        cursor: "zoom-out",
        animation: "fadeIn 0.25s ease",
      }}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image lightbox"
        style={{
          position: "absolute",
          top: "24px",
          right: "28px",
          color: "var(--white)",
          fontSize: "2rem",
          lineHeight: 1,
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "var(--transition)",
        }}
      >
        &times;
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "default",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "75vh",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            border: "2px solid var(--marigold)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption || "Gallery Photo"}
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {caption && (
          <div
            style={{
              marginTop: "16px",
              color: "var(--white)",
              fontSize: "1.05rem",
              fontFamily: "var(--font-display)",
              textAlign: "center",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "6px 18px",
              borderRadius: "var(--radius-pill)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
