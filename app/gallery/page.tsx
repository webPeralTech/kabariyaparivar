"use client";

import React, { useState } from "react";
import { GALLERY_DATA } from "@/data/galleryData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { LightboxModal } from "@/components/LightboxModal";

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState<{ url: string; caption?: string } | null>(null);

  const currentYearData = GALLERY_DATA[selectedYearIndex] || GALLERY_DATA[0];

  return (
    <div>
      {/* Top Banner */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("gallery_eyebrow")}
            title={t("gallery_title")}
            description={t("gallery_text")}
          />
        </div>
      </section>

      {/* Year Tabs Bar */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          backgroundColor: "var(--ivory-d)",
          position: "sticky",
          top: "65px",
          zIndex: 40,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            overflowX: "auto",
            paddingTop: "10px",
            paddingBottom: "10px",
            scrollbarWidth: "none",
          }}
        >
          {GALLERY_DATA.map((item, index) => {
            const isSelected = index === selectedYearIndex;
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedYearIndex(index)}
                style={{
                  padding: "7px 18px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.9rem",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? "var(--white)" : "var(--ink-soft)",
                  backgroundColor: isSelected ? "var(--maroon)" : "var(--white)",
                  border: isSelected ? "1px solid var(--maroon)" : "1px solid var(--line)",
                  whiteSpace: "nowrap",
                  boxShadow: isSelected ? "0 2px 8px rgba(122, 36, 54, 0.25)" : "none",
                  transition: "var(--transition)",
                  cursor: "pointer",
                }}
              >
                {item.year}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Gallery Section */}
      <section>
        <div className="container">
          {/* Header of selected year */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "32px",
              borderBottom: "1px solid var(--line-soft)",
              paddingBottom: "16px",
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: "1.8rem" }}>{currentYearData.title}</h2>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <span className="badge badge-maroon">
                {currentYearData.photos.length}{" "}
                {currentYearData.photos.length === 1 ? t("photo_single") : t("photos_count")}
              </span>
              <span className="badge badge-teal">
                {currentYearData.videos.length}{" "}
                {currentYearData.videos.length === 1 ? t("video_single") : t("videos_count")}
              </span>
            </div>
          </div>

          {/* Photos Grid */}
          <div style={{ marginBottom: "48px" }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--ink-muted)", marginBottom: "16px" }}>
              {lang === "gu" ? "છબીઓ / ફોટા" : "Photographs"}
            </h3>

            {currentYearData.photos.length > 0 ? (
              <div
                className="animate-fade-up"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                  gap: "20px",
                }}
              >
                {currentYearData.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePhoto(photo)}
                    style={{
                      position: "relative",
                      height: "220px",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      border: "1px solid var(--line)",
                      cursor: "zoom-in",
                      boxShadow: "var(--shadow-sm)",
                      transition: "var(--transition)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.borderColor = "var(--marigold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "var(--line)";
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={photo.caption || currentYearData.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                    {photo.caption && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "8px 12px",
                          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                          color: "var(--white)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {photo.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  border: "1px dashed var(--line)",
                  padding: "48px 24px",
                  textAlign: "center",
                  background: "var(--ivory-d)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--ivory-warm)",
                    color: "var(--marigold-d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h4 style={{ color: "var(--maroon-d)", marginBottom: "6px" }}>
                  {t("gallery_empty")}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", margin: 0, maxWidth: "44ch", marginLeft: "auto", marginRight: "auto" }}>
                  {lang === "gu"
                    ? "આ વર્ષના ફોટા Cloudinary દ્વારા galleryData.ts માં સરળતાથી ઉમેરી શકાય છે."
                    : "Photos for this year can be easily added via Cloudinary in galleryData.ts."}
                </p>
              </div>
            )}
          </div>

          {/* Videos Grid */}
          <div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--ink-muted)", marginBottom: "16px" }}>
              {lang === "gu" ? "વીડિયો ઝલક" : "Video Highlights"}
            </h3>

            {currentYearData.videos.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "24px",
                }}
              >
                {currentYearData.videos.map((video, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#000" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.caption || currentYearData.title}
                        allowFullScreen
                        loading="lazy"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                      />
                    </div>
                    {video.caption && (
                      <div style={{ padding: "12px 16px", fontSize: "0.9rem", fontWeight: 600, color: "var(--maroon-d)" }}>
                        {video.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  border: "1px dashed var(--line)",
                  padding: "36px 24px",
                  textAlign: "center",
                  background: "var(--ivory-d)",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-muted)" }}>
                  {lang === "gu"
                    ? "આ વર્ષ માટે કોઈ વીડિયો ઉમેરેલ નથી."
                    : "No videos added for this year."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        src={activePhoto?.url || null}
        caption={activePhoto?.caption}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
