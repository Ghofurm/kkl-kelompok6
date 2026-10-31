"use client";

import { useEffect, useRef, useState } from "react";
import { gallery, photos } from "@/data/trip";

const filters = [
  { id: 0, label: "Semua" },
  { id: 1, label: "Hari 1" },
  { id: 2, label: "Hari 2" },
  { id: 3, label: "Hari 3" },
  { id: 4, label: "Hari 4" },
  { id: 5, label: "Hari 5" },
];

export function Gallery() {
  const [filter, setFilter] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === 0 ? gallery : gallery.filter((item) => item.day === filter);
  const activeItem = activeIndex === null ? null : visible[activeIndex];
  const activeDocument = activeItem && "document" in activeItem ? activeItem.document : null;
  const activeExternal =
    activeItem && !("document" in activeItem) ? photos[activeItem.photo] : null;
  const activeImage = activeDocument ?? activeExternal;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeItem && !dialog.open) dialog.showModal();
    if (!activeItem && dialog.open) dialog.close();
  }, [activeItem]);

  useEffect(() => {
    setActiveIndex(null);
  }, [filter]);

  const step = (direction: number) => {
    if (activeIndex === null) return;
    const next = (activeIndex + direction + visible.length) % visible.length;
    setActiveIndex(next);
  };

  return (
    <section className="section gallery" id="galeri" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="section-head section-head--gallery">
          <div>
            <h2 id="gallery-title">Bingkai dari Bali</h2>
            <p className="section-support">
              Potongan perjalanan Kelompok 6 dari Semarang sampai Bali. Sebagian besar foto di sini
              adalah dokumentasi langsung kami; beberapa tempat yang tidak sempat diabadikan
              dilengkapi foto dari arsip terbuka.
            </p>
          </div>

          <div className="gallery-filters" role="group" aria-label="Saring foto berdasarkan hari">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={filter === item.id ? "is-active" : ""}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {visible.map((item, index) => {
            const image = "document" in item ? item.document : photos[item.photo];
            const key = "document" in item ? item.document.src : item.photo;
            const tileKey = `${item.day}-${item.place}-${key}`;

            return (
              <a
                key={tileKey}
                className="tile"
                href={image.src}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  setActiveIndex(index);
                }}
                aria-label={`Buka foto: ${item.place}, Hari ${item.day}, ${item.date}`}
              >
                <span className="tile-photo">
                  <img
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="tile-strip">
                  <span className="tile-place">{item.place}</span>
                  <span className="tile-date">
                    Hari {item.day} · {item.date}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="gallery-empty">Belum ada foto untuk hari ini. Coba pilih hari lain.</p>
        )}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Foto diperbesar"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActiveIndex(null);
        }}
      >
        {activeImage && activeItem && (
          <div className="lightbox-inner">
            <div className="lightbox-bar">
              <p>
                {activeItem.place} · Hari {activeItem.day}
              </p>
              <button type="button" className="lightbox-close" onClick={() => setActiveIndex(null)}>
                Tutup
              </button>
            </div>
            <img
              className="lightbox-image"
              src={activeImage.src}
              width={activeImage.width}
              height={activeImage.height}
              alt={activeImage.alt}
            />
            <div className="lightbox-foot">
              {activeDocument ? (
                <p>Foto: Kelompok 6.</p>
              ) : activeExternal ? (
                <p>
                  Foto:{" "}
                  <a href={activeExternal.page} target="_blank" rel="noreferrer">
                    {activeExternal.creator}
                  </a>
                  , {activeExternal.license}, via Wikimedia Commons.
                </p>
              ) : null}
              <div className="lightbox-nav">
                <button type="button" onClick={() => step(-1)} aria-label="Foto sebelumnya">
                  Sebelumnya
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Foto berikutnya">
                  Berikutnya
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
