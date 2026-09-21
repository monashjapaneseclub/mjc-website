"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FirstSection from "../../components/Home/FirstSection";
import SecondSection from "../../components/Home/SecondSection";
import IGWidget from "../../components/Home/IGWidget";
import SponsorsSection from "../../components/Home/SponsorsSection";
import InfiniteScroll from "../../components/InfiniteScroll";
import BuyMembershipSection from "../../components/Home/BuyMembershipSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = (newLang?: "en" | "jp") => {
    const nextLanguage = newLang || (language === "en" ? "jp" : "en");
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  const translations = {
    sponsorsHeading: {
      en: "2026 Sponsors",
      jp: "2026年のスポンサー",
    },
    followUsOnInstagram: {
      en: "Follow us on IG!",
      jp: "Instagramでフォローしてね！",
    },
  };

  const fontClass = language === "en" ? "font-enCute" : "font-jpCute";

  return (
    <main className={`relative bg-[#f8fafc] ${fontClass}`}>
      <Analytics />
      <SpeedInsights />

      {/* Header with language props */}
      <Header language={language} onToggleLanguage={toggleLanguage} />

      {/* First Page - White Section */}
      <FirstSection language={language} />

      {/* Second Page - Blue Section */}
      <SecondSection language={language} />

      <InfiniteScroll />

      <BuyMembershipSection
        language={language}
        backgroundImage="/images/banner.png"
        year="2026"
      />

      {/* Sponsors Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h1 className={`text-4xl font-bold text-gray-800 mb-6 ${fontClass}`}>
            {translations.sponsorsHeading[language]}
          </h1>
          <SponsorsSection />
        </div>
      </div>

      {/* Divider with Orange Fill */}
      <div
        className="custom-shape-divider-top-1736228918"
        style={{ transform: "scaleY(-1)" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#833AB4"
          ></path>
        </svg>
      </div>

      {/* IG Widget Section */}
      {process.env.NEXT_PUBLIC_IG_WIDGET_REF && (
        <div
          className="py-4 min-h-screen"
          style={{
            background:
              "linear-gradient(to bottom, #833AB4, #E1306C, #FCAF45, #f8fafc)",
          }}
        >
          <h2
            className={`text-5xl font-extrabold text-center uppercase tracking-wide mt-8 ${fontClass}`}
            style={{
              color: "#FFFFFF",
              lineHeight: "1.2",
              letterSpacing: "0.1em",
            }}
          >
            {translations.followUsOnInstagram[language]}
          </h2>

          <div className="mt-4">
            <IGWidget dataRef={process.env.NEXT_PUBLIC_IG_WIDGET_REF} />
          </div>
        </div>
      )}

      <Footer language={language} />
    </main>
  );
}
