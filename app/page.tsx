"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BHUVA_SHREE } from "@/data/trusteeData";
import { UPCOMING_EVENTS } from "@/data/eventsData";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";

export default function HomePage() {
  const { lang, t } = useLanguage();
  const nextEvent = UPCOMING_EVENTS[0];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(250, 245, 235, 0.7) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div className="container">
          <div className="hero-grid animate-fade-up">
            {/* Copy Column */}
            <div className="animate-fade-up delay-1">
              <div className="eyebrow-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2 4 8v13h16V8Z" />
                  <path d="M9 21v-7h6v7" />
                </svg>
                <span>{t("hero_eyebrow")}</span>
              </div>

              <h1 style={{ marginBottom: "16px" }}>{t("hero_title")}</h1>

              <p
                style={{
                  fontSize: "1.18rem",
                  lineHeight: 1.65,
                  maxWidth: "52ch",
                  marginBottom: "28px",
                  color: "var(--ink-soft)",
                }}
              >
                {t("hero_lede")}
              </p>

              <div className="hero-btn-group">
                <Link href="/darshan" className="btn btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {t("hero_btn_darshan")}
                </Link>
                <Link href="/donation" className="btn btn-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {t("hero_btn_donate")}
                </Link>
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span className="badge badge-teal">
                  ✦ {t("hero_established", "Tradition carried forward since 1995")}
                </span>
              </div>
            </div>

            {/* Visual Column - Temple Showcase Photo */}
            <div className="animate-scale-in delay-2">
              <div className="hero-photo-wrap">
                <Image
                  src="/DEV_0528.JPG"
                  alt="Shree Khodiyar Mataji Mandir Savarkundla"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(8px)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-pill)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    border: "1px solid var(--marigold)",
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: "0.95rem" }}>🚩</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--maroon-d)" }}>
                    {lang === "gu" ? "॥ જય માતાજી ॥" : "|| Jay Mataji ||"}
                  </span>
                </div>

                {/* Bottom Overlay Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px 20px 18px",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 65%, transparent 100%)",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "10px",
                    zIndex: 2,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--marigold)",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      {lang === "gu" ? "સાવરકુંડલા ધામ" : "Savarkundla Dham"}
                    </span>
                    <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#fff", fontWeight: 700 }}>
                      {lang === "gu" ? "શ્રી ખોડિયાર માતાજી મંદિર" : "Shree Khodiyar Mataji Mandir"}
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.85)" }}>
                      {lang === "gu" ? "સમસ્ત કાબરીયા પરિવાર માતાજી મઢ" : "Samast Kabariya Parivar Mataji Madh"}
                    </p>
                  </div>

                  <Link
                    href="/location"
                    style={{
                      padding: "6px 14px",
                      borderRadius: "var(--radius-pill)",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {lang === "gu" ? "દર્શન & સ્થાન" : "Location"} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Sihasan Photo Section */}
      <section
        style={{
          paddingTop: "24px",
          paddingBottom: "40px",
        }}
      >
        <div className="container">
          <div className="sihasan-frame animate-fade-up">
            <Image
              src="/Mataji%20Sihasan%20Madh%20Horizontal.jpg"
              alt="Shree Mataji Sihasan Madh"
              width={1200}
              height={972}
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* Welcome & Heritage Mosaic Section */}
      <section>
        <div className="container">
          <SectionHeader
            eyebrow={t("welcome_eyebrow")}
            title={t("welcome_title")}
            description={t("welcome_text")}
          />

          <div className="mosaic-grid animate-fade-up">
            {[
              {
                labelEn: "Parivar Bhavan",
                labelGu: "કાબરીયા પરિવાર ભવન",
                icon: "🏢",
                imageSrc: "/DEV_0525.JPG",
                tagGu: "સંકુલ & ભવન",
                tagEn: "Parivar Bhavan",
                objectPosition: "center top",
              },
              {
                labelEn: "Temple Mandap",
                labelGu: "શ્રી મંદિર મંડપ દર્શન",
                icon: "⛺",
                imageSrc: "/DEV_0528.JPG",
                tagGu: "સાવરકુંડલા ધામ",
                tagEn: "Savarkundla Dham",
                objectPosition: "center",
              },
              {
                labelEn: "Temple Entrance",
                labelGu: "શ્રી મંદિર પરિસર પ્રવેશદ્વાર",
                icon: "🏛️",
                imageSrc: "/DEV_0379.JPG",
                tagGu: "પરિસર દર્શન",
                tagEn: "Temple Complex",
                objectPosition: "center top",
              },
              {
                labelEn: "Sura Pura Dada",
                labelGu: "શ્રી સુરા પૂરા દાદા અને માતાજી",
                icon: "🪔",
                imageSrc: "/DEV_0431.JPG",
                tagGu: "પાવન સ્થાનક",
                tagEn: "Sacred Shrine",
                objectPosition: "center",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="photo-card-hover"
                style={{
                  height: "240px",
                  background: "#18060a",
                }}
              >
                {item.imageSrc ? (
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src={item.imageSrc}
                      alt={lang === "gu" ? item.labelGu : item.labelEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="photo-card-img"
                      style={{ objectFit: "cover", objectPosition: item.objectPosition || "center" }}
                    />
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
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--marigold)",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {lang === "gu" ? item.tagGu : item.tagEn}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: "0.98rem", color: "#fff" }}>
                        {lang === "gu" ? item.labelGu : item.labelEn}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="ph-photo" style={{ height: "100%" }}>
                    <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                    <span style={{ fontWeight: 600, color: "var(--maroon-d)" }}>
                      {lang === "gu" ? item.labelGu : item.labelEn}
                    </span>
                    <span style={{ fontSize: "0.78rem" }}>
                      {t("photo_coming_soon", "Photo coming soon")}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/gallery" className="btn btn-outline">
              {t("view_full_gallery", "View Full Gallery")} &rarr;
            </Link>
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

          <div className="people-grid">
            {BHUVA_SHREE.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/trustee" className="btn btn-outline">
              {lang === "gu" ? "સંપૂર્ણ ટ્રસ્ટી કમિટી જુઓ" : "View Full Trustee Committee"} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Event Section */}
      {nextEvent && (
        <section style={{ backgroundColor: "var(--white)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "36px",
                alignItems: "center",
              }}
            >
              <div>
                <SectionHeader
                  eyebrow={t("event_eyebrow")}
                  title={lang === "gu" ? "આગામી મુખ્ય ઉત્સવ" : "Featured Upcoming Event"}
                  description={
                    lang === "gu"
                      ? "પરિવારના દરેક સભ્યોને મઢ ખાતે પધારવા ભાવભર્યું આમંત્રણ છે."
                      : "All parivar family members are cordially invited to gather at the Madh."
                  }
                />
                <div style={{ marginTop: "24px" }}>
                  <Link href="/event" className="btn btn-dark">
                    {lang === "gu" ? "બધા કાર્યક્રમો જુઓ" : "View All Events"} &rarr;
                  </Link>
                </div>
              </div>

              <div>
                <EventCard event={nextEvent} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Find Your Way / Feature Navigation Cards */}
      <section className="section-alt">
        <div className="container">
          <SectionHeader
            title={t("findway_title")}
            description={t("findway_text")}
            center
          />

          <div className="feature-grid">
            <Link href="/darshan" className="feature-card">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "var(--maroon-subtle)",
                  color: "var(--maroon)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3>{t("card_darshan_title")}</h3>
              <p>{t("card_darshan_text")}</p>
            </Link>

            <Link href="/donation" className="feature-card">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "rgba(226, 166, 59, 0.15)",
                  color: "var(--marigold-d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>{t("card_donation_title")}</h3>
              <p>{t("card_donation_text")}</p>
            </Link>

            <Link href="/gallery" className="feature-card">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "var(--teal-light)",
                  color: "var(--teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3>{t("card_gallery_title")}</h3>
              <p>{t("card_gallery_text")}</p>
            </Link>

            <Link href="/location" className="feature-card">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "var(--ivory-warm)",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>{t("card_location_title")}</h3>
              <p>{t("card_location_text")}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
