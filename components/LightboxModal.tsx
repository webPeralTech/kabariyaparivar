"use client";

import React, { useEffect, useRef, useCallback } from "react";

export interface LightboxPhoto {
  url: string;
  caption?: string;
  title?: string;
}

interface LightboxModalProps {
  // Can be called with single photo (legacy) or full album array
  src?: string | null;
  caption?: string;
  photos?: LightboxPhoto[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  onClose: () => void;
}

export function LightboxModal({
  src,
  caption,
  photos,
  currentIndex = 0,
  onIndexChange,
  onClose,
}: LightboxModalProps) {
  // Normalize photos list
  const photoList: LightboxPhoto[] = React.useMemo(() => {
    if (photos && photos.length > 0) return photos;
    if (src) return [{ url: src, caption }];
    return [];
  }, [photos, src, caption]);

  const activeIndex = currentIndex < photoList.length ? currentIndex : 0;
  const activePhoto = photoList[activeIndex] || null;

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (photoList.length <= 1) return;
    const newIdx = activeIndex === 0 ? photoList.length - 1 : activeIndex - 1;
    onIndexChange?.(newIdx);
  }, [activeIndex, photoList.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (photoList.length <= 1) return;
    const newIdx = activeIndex === photoList.length - 1 ? 0 : activeIndex + 1;
    onIndexChange?.(newIdx);
  }, [activeIndex, photoList.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activePhoto, onClose, handlePrev, handleNext]);

  // Touch Swipe detection
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Direct Photo Download
  const downloadCurrentPhoto = async () => {
    if (!activePhoto) return;
    const fileUrl = activePhoto.url;
    const filename =
      activePhoto.caption?.replace(/[/\\?%*:|"<>]/g, "_").slice(0, 40) ||
      fileUrl.split("/").pop() ||
      "kabariya-parivar-photo.jpg";

    try {
      const res = await fetch(fileUrl);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename.endsWith(".jpg") || filename.endsWith(".png") || filename.endsWith(".JPG") ? filename : `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Direct anchor download fallback
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!activePhoto) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(14, 10, 9, 0.95)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        cursor: "zoom-out",
        userSelect: "none",
        animation: "fadeIn 0.25s ease",
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10002,
          pointerEvents: "auto",
        }}
      >
        {/* Photo Counter Pill */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "6px 14px",
            borderRadius: "var(--radius-pill)",
            color: "#fff",
            fontSize: "0.85rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>📷</span>
          <span>
            {activeIndex + 1} / {photoList.length}
          </span>
        </div>

        {/* Action Buttons: Download & Close */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Direct Download Button */}
          <button
            type="button"
            onClick={downloadCurrentPhoto}
            aria-label="Download high resolution photo"
            title="Download Photo"
            style={{
              color: "#fff",
              background: "rgba(226, 166, 59, 0.35)",
              border: "1px solid var(--marigold)",
              borderRadius: "var(--radius-pill)",
              padding: "7px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.86rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--marigold)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(226, 166, 59, 0.35)")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            title="Close (Esc)"
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              lineHeight: 1,
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
          >
            &times;
          </button>
        </div>
      </div>

      {/* Main Image Frame with Swipe Detection */}
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          maxWidth: "92vw",
          maxHeight: "82vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "default",
          zIndex: 10001,
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "75vh",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.65)",
            border: "2px solid var(--marigold)",
            background: "#0d0507",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activePhoto.url}
            alt={activePhoto.caption || "Kabariya Parivar Photo"}
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Caption */}
        {activePhoto.caption && (
          <div
            style={{
              marginTop: "14px",
              color: "#fff",
              fontSize: "1rem",
              fontFamily: "var(--font-display)",
              textAlign: "center",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(6px)",
              padding: "7px 20px",
              borderRadius: "var(--radius-pill)",
              border: "1px solid rgba(226, 166, 59, 0.4)",
              maxWidth: "90%",
            }}
          >
            {activePhoto.caption}
          </div>
        )}
      </div>

      {/* Desktop Prev Button (Left) */}
      {photoList.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous photo"
          title="Previous Photo (Left Arrow)"
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10002,
            transition: "var(--transition)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--maroon)";
            e.currentTarget.style.borderColor = "var(--marigold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.55)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Desktop Next Button (Right) */}
      {photoList.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next photo"
          title="Next Photo (Right Arrow)"
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10002,
            transition: "var(--transition)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--maroon)";
            e.currentTarget.style.borderColor = "var(--marigold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.55)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Mobile Swipe Guidance Hint */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "0.78rem",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          pointerEvents: "none",
        }}
      >
        <span>👈 Swipe left/right or use arrows 👉</span>
      </div>
    </div>
  );
}
