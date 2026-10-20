"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/trip";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Bali Trip Journal, kembali ke halaman utama">
        <span className="wordmark-title">Bali Trip Journal</span>
        <span className="wordmark-sub">KKL Informatika UPGRIS 2026</span>
      </Link>

      <nav className="site-nav" aria-label="Navigasi utama">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-tools">
        <ThemeToggle />
        <a className="btn btn--small header-cta" href={site.reportUrl} download>
          Unduh laporan
        </a>
        <button
          className="menu-button"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="menu-sheet"
        aria-label="Menu situs"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setMenuOpen(false);
        }}
      >
        <div className="menu-sheet__inner">
          <div className="menu-sheet__top">
            <span className="menu-sheet__name">Bali Trip Journal</span>
            <button className="menu-close" type="button" onClick={() => setMenuOpen(false)}>
              Tutup
            </button>
          </div>
          <nav className="menu-sheet__nav" aria-label="Navigasi seluler">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={site.reportUrl} download onClick={() => setMenuOpen(false)}>
              Unduh laporan
            </a>
          </nav>
          <p className="menu-sheet__meta">
            {site.dates} · {site.programme}
          </p>
        </div>
      </dialog>
    </header>
  );
}

function ThemeToggle() {
  const [label, setLabel] = useState("Ganti mode terang atau gelap");

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setLabel(current === "light" ? "Ganti ke mode malam" : "Ganti ke mode siang");
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#ded7c5" : "#121917");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage can be blocked; the class on the root still changes for this visit
    }
    setLabel(next === "light" ? "Ganti ke mode malam" : "Ganti ke mode siang");
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
      </svg>
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
      </svg>
      <span className="sr-only">Ganti tema</span>
    </button>
  );
}
