"use client";

import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";

interface BuyMembershipSectionProps {
  backgroundImage?: string;
  year: string;
  language: "en" | "jp"; // Add language prop
}

const BuyMembershipSection: React.FC<BuyMembershipSectionProps> = ({
  backgroundImage = "/images/banner.png",
  year = "2026",
  language = "en",
}) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  return (
    <div
      className="relative h-[140vh] md:h-[80vh] lg:h-[70vh] overflow-hidden"
      style={{ height: "auto" }} // Inline height auto to allow Tailwind to override dynamically
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center h-full"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-8">
        {/* Header Section */}
        <div className="bg-white shadow-lg rounded-md px-6 py-4 mt-8 md:mt-4 translate-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 uppercase">
            {language === "en" ? (
              <>
                Become a{" "}
                <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  {year} member
                </span>{" "}
                today!
              </>
            ) : (
              <>
                <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  {year}年のメンバー
                </span>{" "}
                になろう！
              </>
            )}
          </h2>
        </div>

        {/* Membership Benefits */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full max-w-4xl mt-8 pb-8">
          {/* Text Boxes */}
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <div
              ref={ref1}
              className={`p-4 bg-white rounded-lg shadow-md text-center transform transition duration-700 hover:scale-105 ${
                isVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                🎉 {language === "en" ? "Membership Discounts" : "会員割引"}
              </h3>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "Take advantage of exclusive member discounts generously offered by our amazing sponsors!"
                  : "素晴らしいスポンサーから提供される会員限定の特典割引を利用できます！"}
              </p>
            </div>
            <div
              ref={ref2}
              className={`p-4 bg-white rounded-lg shadow-md text-center transform transition duration-700 hover:scale-105 ${
                isVisible2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                🎊 {language === "en" ? "Exclusive Events" : "限定イベント"}
              </h3>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "Access exclusive events, workshops, and cultural activities."
                  : "限定イベント、ワークショップ、文化活動に参加できます。"}
              </p>
            </div>
            <div
              ref={ref3}
              className={`p-4 bg-white rounded-lg shadow-md text-center transform transition duration-700 hover:scale-105 ${
                isVisible3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                🚀 {language === "en" ? "Valuable Resources" : "貴重なリソース"}
              </h3>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "Get access to language resources, study groups, and more!"
                  : "言語リソースや勉強会などにアクセスできます！"}
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="flex items-center justify-center w-full md:w-1/2">
            <a
              href="https://clubs.msa.monash.edu/organisation/7786/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group z-30" // Added z-30 to ensure it stays above
            >
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                {/* Ball Image */}
                <img
                  src="/images/banner.png"
                  alt="Ball Image"
                  className="w-[400px] md:w-[400px] h-auto object-contain rounded-lg shadow-lg"
                />
                {/* Arrow */}
                <img
                  src="/images/whitearrow.png"
                  alt={language === "en" ? "Click Me Arrow" : "クリック矢印"}
                  className="absolute -top-10 -right-10 md:-top-20 md:-right-16 w-[100px] md:w-[150px] h-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyMembershipSection;
