"use client";

import React from "react";
import { sponsors } from "@/data/sponsors";

const Sponsors: React.FC<{ language: "en" | "jp" }> = ({ language }) => {
  return (
    <main className="w-full bg-[#f8fafc] flex flex-col items-center py-10 px-4">
      {/* 2026 Sponsors Heading */}
      <div className="flex flex-col items-center bg-[#f8fafc] py-10 px-4">
        <h1 className="text-3xl font-bold">
          {language === "en" ? "2026 Sponsors" : "２０２6年のスポンサー"}
        </h1>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center h-auto min-h-[20rem] sm:h-80 justify-between relative"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-bold">{sponsor.name}</h2>
              <p className="text-gray-600 mt-2">
                {sponsor.caption
                  ? sponsor.caption
                  : language === "en"
                  ? "Supports club operations"
                  : "クラブの運営をサポートします"}
              </p>
            </div>
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              {language === "en" ? "Visit Website" : "ウェブサイトを見る"}
            </a>
          </div>
        ))}
      </div>
      {/* Sponsor Enquiry Box */}
      <div className="mt-16 w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center border border-red-200">
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          {language === "en"
            ? "We're always looking for new sponsors!"
            : "私たちは常に新しいスポンサーを募集しています！"}
        </h2>
        <p className="text-gray-700">
          {language === "en" ? (
            <>
              If you&apos;re interested in sponsoring the Monash Japanese Club,
              feel free to reach out via email at{" "}
              <a
                href="mailto:japanese@monashclubs.org"
                className="underline hover:text-blue-800"
                style={{ color: "#f6787a" }}
              >
                japanese@monashclubs.org
              </a>
            </>
          ) : (
            <>
              モナシュ日本語クラブへのスポンサーにご興味のある方は、以下のメールアドレスまでご連絡ください{" "}
              <a
                href="mailto:japanese@monashclubs.org"
                className="underline hover:text-blue-800"
                style={{ color: "#f6787a" }}
              >
                japanese@monashclubs.org
              </a>
            </>
          )}
        </p>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-12">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vTjNQJSzoyl9yg8pHE5LmWRE-prAonkvy6XhA1h8NMb5qiEaoWdabN638rfnpoGvC8n65h8Kb76fWFd/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          {language === "en" ? "Terms and Conditions" : "利用規約"}
        </a>
      </div>
    </main>
  );
};

export default Sponsors;
