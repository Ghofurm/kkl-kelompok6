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
  const activePhoto = activeItem ? photos[activeItem.photo] : null;

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
              Foto tempat yang kami lewati, dari Kota Lama Semarang sampai Jimbaran. Semua foto di
              sini berasal dari Wikimedia Commons, bukan dokumentasi kelompok.
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
            const photo = photos[item.photo];
            return (
              <a
                key={`${item.photo}-${item.place}`}
                className="tile"
                href={photo.src}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  setActiveIndex(index);
                }}
                aria-label={`Buka foto: ${item.place}, Hari ${item.day}, ${item.date}`}
              >
                <span className="tile-photo">
                  <img
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
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
          <p className="gallery-empty">
            {filter === 5
              ? "Hari 5 hanya berisi perjalanan pulang ke Semarang. Belum ada foto dari hari itu."
              : "Belum ada foto untuk hari ini. Coba pilih hari lain."}
          </p>
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
        {activePhoto && activeItem && (
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
              src={activePhoto.src}
              width={activePhoto.width}
              height={activePhoto.height}
              alt={activePhoto.alt}
            />
            <div className="lightbox-foot">
              <p>
                Foto:{" "}
                <a href={activePhoto.page} target="_blank" rel="noreferrer">
                  {activePhoto.creator}
                </a>
                , {activePhoto.license}, via Wikimedia Commons.
              </p>
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
