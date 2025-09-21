"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link component
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({
  language,
  onToggleLanguage,
}: {
  language: "en" | "jp";
  onToggleLanguage: (lang: "en" | "jp") => void;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    navigation: {
      en: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Committee", link: "/committee" },
        { name: "Events", link: "/events" },
        { name: "Sponsors", link: "/sponsors" },
        { name: "Links", link: "/links" },
        { name: "Contact Us", link: "/enquiry" },
      ],
      jp: [
        { name: "ホーム", link: "/" },
        { name: "紹介", link: "/about" },
        { name: "委員会", link: "/committee" },
        { name: "イベント", link: "/events" },
        { name: "スポンサー", link: "/sponsors" },
        { name: "リンク集", link: "/links" },
        { name: "お問い合わせ", link: "/enquiry" },
      ],
    },
    joinUs: {
      en: "Join us",
      jp: "参加する",
    },
  };

  const fontClass = language === "en" ? "font-enCute" : "font-jpCute";

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage && storedLanguage !== language) {
      onToggleLanguage(storedLanguage);
    }
  }, []);

  const handleToggleLanguage = () => {
    const newLanguage = language === "en" ? "jp" : "en";
    onToggleLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            href="/"
            className="block transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
          >
            <img
              src="/images/logo.png"
              alt={
                language === "en"
                  ? "Monash Japanese Club Logo"
                  : "モナッシュ日本クラブのロゴ"
              }
              className="h-10 w-10 md:h-14 md:w-14"
            />
          </Link>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex ml-32">
          <ul
            className={`flex space-x-9 text-[#2b2c2e] font-medium text-sm md:text-base ${fontClass}`}
          >
            {translations.navigation[language].map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.link}
                  className="block pb-1 text-inherit group-hover:text-red-500 transition duration-200"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 ease-out"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={handleToggleLanguage}
            className={`border border-gray-300 px-3 py-2 text-xs md:text-sm text-gray-800 hover:bg-gray-200 transition duration-300 rounded-md w-16 md:w-20 text-center ${fontClass}`}
          >
            {language === "en" ? "English" : "日本語"}
          </button>

          <a
            href="https://clubs.msa.monash.edu/organisation/7786/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block relative bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold text-center overflow-hidden group transition duration-300 ${fontClass}`}
          >
            {translations.joinUs[language]}
            <span className="absolute inset-0 rounded-full border-2 border-red-500 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-300"></span>
          </a>

          {/* Hamburger Button */}
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <RxHamburgerMenu className="h-8 w-8 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul
            className={`flex flex-col space-y-4 px-4 py-4 text-[#2b2c2e] font-medium text-sm ${fontClass}`}
          >
            {translations.navigation[language].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="block py-2 text-inherit hover:text-red-500 transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
