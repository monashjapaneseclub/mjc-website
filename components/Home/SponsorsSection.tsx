"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./SponsorsCarousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sponsors } from "@/data/sponsors";

const SponsorsCarousel: React.FC = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      autoplay: 6000,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide carousel-container">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {sponsors.map((sponsor, index) => (
            <li key={index} className="glide__slide">
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="slide-content">
                  <img src={sponsor.image} alt={sponsor.name} />
                  <p className="slide-caption font-roboto">{sponsor.name}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation Arrows */}
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div
        className="glide__bullets mb-8 mt-2 relative"
        data-glide-el="controls[nav]"
      >
        {sponsors.map((_, index) => (
          <button
            key={index}
            className="glide__bullet"
            data-glide-dir={`=${index}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SponsorsCarousel;
