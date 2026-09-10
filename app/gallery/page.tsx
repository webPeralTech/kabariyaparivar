"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_FOLDERS, GalleryFolderItem, PhotoItem } from "@/data/galleryData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { LightboxModal } from "@/components/LightboxModal";

type CategoryFilter = "all" | "yagna" | "sneh-milan" | "jinnodhar" | "darshan";

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const isGu = lang === "gu";

  // State
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Selected folder object
  const selectedFolder = useMemo(() => {
    if (!selectedFolderId) return null;
    return GALLERY_FOLDERS.find((f) => f.id === selectedFolderId) || null;
  }, [selectedFolderId]);

  // Filtered folders list
  const filteredFolders = useMemo(() => {
    return GALLERY_FOLDERS.filter((folder) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" || folder.category === activeCategory;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        folder.name.toLowerCase().includes(q) ||
        folder.nameGu.toLowerCase().includes(q) ||
        (folder.year && folder.year.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Categories list
  const categories: { id: CategoryFilter; labelEn: string; labelGu: string; icon: string }[] = [
    { id: "all", labelEn: "All Albums", labelGu: "બધા આલ્બમ્સ", icon: "📁" },
    { id: "yagna", labelEn: "Yagna", labelGu: "યજ્ઞ મહોત્સવ", icon: "🪔" },
    { id: "sneh-milan", labelEn: "Sneh Milan", labelGu: "સ્નેહ મિલન", icon: "🤝" },
    { id: "jinnodhar", labelEn: "Jinnodhar", labelGu: "જીર્ણોદ્ધાર & શિલાન્યાસ", icon: "🏛️" },
    { id: "darshan", labelEn: "Mataji Photos", labelGu: "માતાજી દર્શન", icon: "👑" },
  ];

  // Helper for direct photo download
  const handleDownloadPhoto = async (e: React.MouseEvent, photo: PhotoItem) => {
    e.stopPropagation();
    const url = photo.url;
    const filename = (photo.caption || "kabariya-photo").replace(/[/\\?%*:|"<>]/g, "_").slice(0, 40) + ".jpg";

    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      {/* Top Banner Header */}
      <section style={{ paddingBottom: "24px" }}>
        <div className="container">
          <SectionHeader
            eyebrow={t("gallery_eyebrow", "1995 – Today · Savarkundla")}
            title={t("gallery_title", "Photo Gallery & Archives")}
            description={
              isGu
                ? "કાબરીયા પરિવાર મઢ - સાવરકુંડલા ધામ ખાતે યોજાયેલ સમસ્ત યજ્ઞ, સ્નેહ મિલન અને પાવન મહોત્સવના ફોટો આલ્બમ્સ."
                : "Explore complete photo albums and memorable moments of Yagna, Sneh Milan and ceremonies at Kabariya Parivar Madh."
            }
          />
        </div>
      </section>

      {/* Main Container */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* =========================================================
              VIEW 1: ALL ALBUMS / FOLDERS GRID
              ========================================================= */}
          {!selectedFolder ? (
            <div className="animate-fade-up">
              {/* Filter & Search Bar */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px 20px",
                  marginBottom: "32px",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                {/* Search Box */}
                <div
                  style={{
                    position: "relative",
                    flex: "1 1 260px",
                    maxWidth: "380px",
                  }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isGu ? "શોધો (દા.ત. 2024, Yagna, સ્નેહ મિલન)..." : "Search albums (e.g. 2024, Yagna)..."}
                    style={{
                      width: "100%",
                      padding: "10px 16px 10px 38px",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--line)",
                      background: "var(--ivory-d)",
                      fontSize: "0.92rem",
                      color: "var(--ink)",
                      outline: "none",
                      transition: "var(--transition)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--marigold)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--ink-muted)",
                      pointerEvents: "none",
                    }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "var(--ink-muted)",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                    >
                      &times;
                    </button>
                  )}
                </div>

                {/* Category Filter Chips */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    paddingBottom: "4px",
                  }}
                >
                  {categories.map((cat) => {
                    const active = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "7px 16px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: "0.85rem",
                          fontWeight: active ? 700 : 500,
                          color: active ? "var(--white)" : "var(--ink-soft)",
                          background: active ? "var(--maroon)" : "var(--ivory-d)",
                          border: active ? "1px solid var(--maroon)" : "1px solid var(--line)",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          transition: "var(--transition)",
                          boxShadow: active ? "0 4px 12px rgba(122, 36, 54, 0.2)" : "none",
                        }}
                      >
                        <span>{cat.icon}</span>
                        <span>{isGu ? cat.labelGu : cat.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Folders Summary Count */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                  color: "var(--ink-muted)",
                }}
              >
                <span>
                  {isGu ? `કુલ ફોલ્ડર્સ: ${filteredFolders.length}` : `Total Albums: ${filteredFolders.length}`}
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--marigold-d)" }}>
                  {isGu ? "📁 ફોલ્ડર પર ક્લિક કરીને ફોટા જુઓ" : "📁 Click any album to view photos"}
                </span>
              </div>

              {/* Folders Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 270px), 1fr))",
                  gap: "24px",
                }}
              >
                {filteredFolders.map((folder) => (
                  <div
                    key={folder.id}
                    onClick={() => setSelectedFolderId(folder.id)}
                    style={{
                      background: "var(--white)",
                      border: "1.5px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: "var(--shadow-sm)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                    className="gallery-folder-card"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = "var(--marigold)";
                      e.currentTarget.style.boxShadow = "0 12px 28px rgba(122, 36, 54, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--line)";
                      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    {/* Top Folder Accent Bar */}
                    <div
                      style={{
                        height: "4px",
                        background: "var(--gold-gradient)",
                      }}
                    />

                    {/* Cover Preview Image or Decorative Folder Header */}
                    <div
                      style={{
                        position: "relative",
                        height: "140px",
                        background: "linear-gradient(135deg, #2b1117 0%, #15060a 100%)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {folder.coverImage ? (
                        <>
                          <Image
                            src={folder.coverImage}
                            alt={folder.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            style={{
                              objectFit: "cover",
                              opacity: 0.85,
                              transition: "transform 0.4s ease",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                            }}
                          />
                        </>
                      ) : (
                        <div
                          style={{
                            fontSize: "3rem",
                            color: "var(--marigold)",
                            opacity: 0.8,
                          }}
                        >
                          📁
                        </div>
                      )}

                      {/* Folder Badge Pill */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          left: "14px",
                          right: "14px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            background: "rgba(0,0,0,0.65)",
                            backdropFilter: "blur(6px)",
                            border: "1px solid rgba(226, 166, 59, 0.4)",
                            color: "var(--marigold-l)",
                            fontSize: "0.76rem",
                            fontWeight: 700,
                            padding: "3px 10px",
                            borderRadius: "var(--radius-pill)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {folder.year || "Archive"}
                        </span>
                        <span
                          style={{
                            background: "rgba(255, 255, 255, 0.9)",
                            color: "var(--maroon-d)",
                            fontSize: "0.76rem",
                            fontWeight: 700,
                            padding: "3px 10px",
                            borderRadius: "var(--radius-pill)",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <span>📸</span>
                          <span>
                            {folder.photos.length > 0 ? folder.photos.length : folder.photoCount || 10}+
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Folder Info Body */}
                    <div
                      style={{
                        padding: "16px 18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span style={{ fontSize: "1.2rem" }}>📁</span>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "1.15rem",
                            color: "var(--maroon-d)",
                            fontWeight: 700,
                            lineHeight: 1.25,
                          }}
                        >
                          {folder.name}
                        </h3>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "var(--ink-soft)",
                          fontWeight: 500,
                        }}
                      >
                        {folder.nameGu}
                      </p>

                      <div
                        style={{
                          marginTop: "12px",
                          paddingTop: "10px",
                          borderTop: "1px solid var(--line-soft)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: "0.82rem",
                          color: "var(--maroon)",
                          fontWeight: 600,
                        }}
                      >
                        <span>{isGu ? "ફોટો જુઓ" : "Open Folder"}</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state if search found nothing */}
              {filteredFolders.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "64px 20px",
                    background: "var(--ivory-d)",
                    borderRadius: "var(--radius-md)",
                    border: "1px dashed var(--line)",
                    marginTop: "20px",
                  }}
                >
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>🔍</span>
                  <h3 style={{ color: "var(--maroon-d)" }}>
                    {isGu ? "કોઈ આલ્બમ મળ્યો નથી" : "No Albums Found"}
                  </h3>
                  <p style={{ color: "var(--ink-soft)", maxWidth: "40ch", margin: "0 auto 18px" }}>
                    {isGu
                      ? "આપે શોધેલ શબ્દ સાથે મેળ ખાતો કોઈ આલ્બમ નથી. કૃપા કરીને અન્ય નામથી શોધો."
                      : "No folder matched your search. Try searching with a different term."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="btn btn-outline"
                    style={{ fontSize: "0.85rem", padding: "8px 18px" }}
                  >
                    {isGu ? "બધા ફોલ્ડર્સ દર્શાવો" : "Show All Albums"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* =========================================================
               VIEW 2: INSIDE FOLDER VIEW (PHOTOS OF CLICKED FOLDER)
               ========================================================= */
            <div className="animate-fade-up">
              {/* Back Button & Breadcrumbs Navigation */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 20px",
                  marginBottom: "28px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Back Button */}
                <button
                  type="button"
                  onClick={() => setSelectedFolderId(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 18px",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--maroon)",
                    color: "var(--white)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "var(--transition)",
                    boxShadow: "0 2px 8px rgba(122, 36, 54, 0.25)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--maroon-d)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--maroon)")}
                >
                  <span>&larr;</span>
                  <span>{isGu ? "બધા ફોલ્ડર્સ પર પાછા જાઓ" : "Back to All Folders"}</span>
                </button>

                {/* Breadcrumb Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.9rem",
                    color: "var(--ink-soft)",
                  }}
                >
                  <span
                    onClick={() => setSelectedFolderId(null)}
                    style={{ cursor: "pointer", color: "var(--maroon)", fontWeight: 600 }}
                  >
                    📁 {isGu ? "આલ્બમ્સ" : "Albums"}
                  </span>
                  <span>/</span>
                  <span style={{ fontWeight: 700, color: "var(--maroon-d)" }}>{selectedFolder.name}</span>
                </div>
              </div>

              {/* Folder Details Banner */}
              <div
                style={{
                  background: "linear-gradient(135deg, var(--ivory-d) 0%, var(--ivory-warm) 100%)",
                  border: "1px solid var(--line)",
                  borderLeft: "5px solid var(--marigold)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px 24px",
                  marginBottom: "32px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "1.4rem" }}>📁</span>
                    <h2 style={{ margin: 0, fontSize: "1.6rem", color: "var(--maroon-d)" }}>
                      {selectedFolder.name}
                    </h2>
                  </div>
                  <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.95rem", fontWeight: 500 }}>
                    {selectedFolder.nameGu}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="badge badge-gold">
                    {selectedFolder.year || "Archive"}
                  </span>
                  <span className="badge badge-maroon">
                    {selectedFolder.photos.length} {isGu ? "ફોટા ઉપલબ્ધ" : "Photos Available"}
                  </span>
                </div>
              </div>

              {/* Photos Grid */}
              {selectedFolder.photos.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 270px), 1fr))",
                    gap: "20px",
                  }}
                >
                  {selectedFolder.photos.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      style={{
                        position: "relative",
                        height: "230px",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        border: "1px solid var(--line)",
                        cursor: "zoom-in",
                        boxShadow: "var(--shadow-sm)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        background: "#120508",
                      }}
                      className="photo-card-hover"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.caption || selectedFolder.name}
                        className="photo-card-img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />

                      {/* Hover Overlay & Action Bar */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "16px 14px 12px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)",
                          color: "#fff",
                          zIndex: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          gap: "8px",
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              color: "var(--marigold)",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              display: "block",
                            }}
                          >
                            {selectedFolder.year}
                          </span>
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "0.92rem",
                              color: "#fff",
                              display: "block",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {photo.caption || selectedFolder.name}
                          </span>
                        </div>

                        {/* Direct Download Icon Button on Card */}
                        <button
                          type="button"
                          onClick={(e) => handleDownloadPhoto(e, photo)}
                          title="Download photo"
                          aria-label="Download photo directly"
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(6px)",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "var(--transition)",
                            flexShrink: 0,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--marigold)";
                            e.currentTarget.style.color = "var(--maroon-d)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.color = "#fff";
                          }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty folder state */
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    background: "var(--white)",
                    borderRadius: "var(--radius-md)",
                    border: "1px dashed var(--line)",
                  }}
                >
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>📂</span>
                  <h3 style={{ color: "var(--maroon-d)" }}>
                    {isGu ? "આ ફોલ્ડરમાં ફોટો અપલોડ કરવાના બાકી છે" : "Photos Coming Soon for this Album"}
                  </h3>
                  <p style={{ color: "var(--ink-soft)", maxWidth: "45ch", margin: "0 auto 20px" }}>
                    {isGu
                      ? "આ ફોલ્ડર માટે ગૂગલ ડ્રાઈવ API કનેક્ટ થતાં જ તમામ ફોટાઓ આપોઆપ અહીં લોડ થઈ જશે."
                      : "Once Google Drive API is connected in the next step, photos from this drive folder will stream directly here."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFolderId(null)}
                    className="btn btn-outline"
                  >
                    {isGu ? "અન્ય ફોલ્ડર્સ જુઓ" : "View Other Albums"} &rarr;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal with Touch Swipe, Keyboard Arrow Navigation & Direct Download */}
      {selectedFolder && lightboxIndex !== null && (
        <LightboxModal
          photos={selectedFolder.photos}
          currentIndex={lightboxIndex}
          onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
