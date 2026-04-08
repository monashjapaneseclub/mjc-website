"use client";

import { sponsors } from "@/data/sponsors";
import { useState, useEffect } from "react";
import Image from "next/image";

const VISIBLE_COUNT = 3;

const SponsorsCarousel = () => {
  const maxPage = Math.max(sponsors.length - VISIBLE_COUNT, 0);
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));
  const next = () => setPage((p) => (p >= maxPage ? 0 : p + 1));

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [maxPage]);

  return (
    <section className="flex flex-col gap-10 p-12">
      <div className="flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 transition hover:bg-gray-300"
          aria-label="Previous sponsors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Sponsor cards */}
        <div className="flex-1 overflow-hidden">
          <div
            className="grid gap-6 px-4 py-4 transition-transform duration-500 ease-in-out"
            style={{
              gridTemplateColumns: `repeat(${sponsors.length}, 1fr)`,
              width: `${(sponsors.length / VISIBLE_COUNT) * 100}%`,
              transform: `translateX(${-(page * (100 / sponsors.length))}%)`,
            }}
          >
            {sponsors.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video overflow-hidden rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  priority={idx < VISIBLE_COUNT}
                  className="object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 transition hover:bg-gray-300"
          aria-label="Next sponsors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      {maxPage > 0 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                i === page
                  ? "bg-red-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SponsorsCarousel;
