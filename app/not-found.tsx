import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        padding: "100px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid var(--marigold)",
          boxShadow: "var(--shadow-gold)",
          background: "var(--white)",
        }}
      >
        <Image
          src="/images.png"
          alt="Kabariya Parivar Logo"
          fill
          sizes="90px"
          style={{ objectFit: "contain", padding: "6px" }}
        />
      </div>
      <h1 style={{ marginTop: "24px", marginBottom: "12px", fontSize: "3rem" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--maroon)" }}>
        Page Not Found / પૃષ્ઠ મળ્યું નથી
      </h2>
      <p style={{ maxWidth: "42ch", marginBottom: "28px" }}>
        The page you are looking for might have been moved or does not exist.
        <br />
        તમે જે પૃષ્ઠ શોધી રહ્યા છો તે ખસેડવામાં આવ્યું હોઈ શકે છે.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home / મુખ્ય પૃષ્ઠ પર જાઓ
      </Link>
    </div>
  );
}
