"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

type RoleDetails = {
  role: { en: string; jp: string };
  name: { en: string; jp: string };
  degree: { en: string; jp: string; studyAbroad?: { en: string; jp: string } };
  imageUrl: string;
  description: { en: string; jp: string };
  linkedin?: string;
};

const roles: RoleDetails[] = [
  {
    role: { en: "President", jp: "会長" },
    name: { en: "Eugene Wang", jp: "ユージン・ワン" },
    degree: {
      en: "Degrees: Laws (Honours), Commerce, and Diploma of Languages (Japanese)",
      jp: "専攻: 法学（優等）、商学、言語学ディプロマ（日本語）",
    },
    imageUrl: "/images/com/eugene.png",
    description: {
      en: "Oversees the club's operations and ensures its success by providing leadership and vision.",
      jp: "クラブの運営を監督し、リーダーシップとビジョンを提供して成功を確実にします。",
    },
    linkedin: "https://www.linkedin.com/in/eugene-wang-7aaa69138/",
  },
  {
    role: { en: "Vice President", jp: "副会長" },
    name: { en: "Ain Mohiddin", jp: "アン・モヒディン" },
    degree: {
      en: "Degrees: Laws (Honours) and Commerce",
      jp: "専攻: 法学（優等）と商学",
    },
    imageUrl: "/images/com/ain.png",
    description: {
      en: "Assists the president and takes over their duties when necessary. Coordinates with all departments.",
      jp: "会長を補佐し、必要に応じてその職務を引き継ぎます。全ての部署と調整します。",
    },
    linkedin: "https://www.linkedin.com/in/ain-mohiddin-1a3462216/",
  },
  {
    role: { en: "Treasurer", jp: "会計担当" },
    name: { en: "Yanling Chen", jp: "ヤンリン・チェン" },
    degree: {
      en: "Degrees: Commerce and Biomedical Science",
      jp: "専攻: 商学と生物医学科学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Handles all financial matters, including budgets, expenses, and financial reporting.",
      jp: "予算、費用、財務報告など、全ての財務問題を処理します。",
    },
    linkedin: "https://www.linkedin.com/in/yanling-chen-5723a6262/",
  },
  {
    role: { en: "Assistant Treasurer", jp: "会計補佐" },
    name: { en: "Max Ramsay", jp: "マックス・ラムゼイ" },
    degree: {
      en: "Degrees: Commerce and Diploma of Languages (Japanese)",
      jp: "専攻: 商学と言語学ディプロマ（日本語）",
      studyAbroad: {
        en: "Exchange Semester: Hitotsubashi University",
        jp: "留学先: 一橋大学",
      },
    },
    imageUrl: "/images/com/max.png",
    description: {
      en: "Assists the treasurer with financial tasks and ensures records are accurate.",
      jp: "会計担当を補佐し、財務タスクをサポートし、記録の正確性を確保します。",
    },
    linkedin: "https://www.linkedin.com/in/max-ramsay-19568523a/",
  },
  {
    role: { en: "Secretary", jp: "書記" },
    name: { en: "Lin Nakayama", jp: "中山凛音" },
    degree: {
      en: "Degree: Science",
      jp: "専攻: 理学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Takes minutes during meetings, manages correspondence, and maintains club records.",
      jp: "会議中の議事録を取り、通信を管理し、クラブの記録を維持します。",
    },
    linkedin: "https://www.linkedin.com/in/lin-nakayama-51525829a/",
  },
  {
    role: { en: "Marketing Director", jp: "マーケティング担当" },
    name: { en: "Chinatsu Kanasaka", jp: "金坂知夏" },
    degree: {
      en: "Degrees: Secondary Education and Arts",
      jp: "専攻: 中等教育と文学",
    },
    imageUrl: "/images/com/chinatsu.png",
    description: {
      en: "Develops marketing strategies to increase club visibility and engagement.",
      jp: "クラブの認知度と参加を高めるためのマーケティング戦略を策定します。",
    },
    linkedin: "https://www.linkedin.com/in/chinatsu-kanasaka/",
  },
  {
    role: { en: "Events Director", jp: "イベント担当" },
    name: { en: "Teruki Yamashita", jp: "山下照生" },
    degree: {
      en: "Degrees: Radiography and Medical Imaging",
      jp: "専攻: 放射線撮影と医療画像学",
    },
    imageUrl: "/images/com/teruki.png",
    description: {
      en: "Organizes and coordinates events, ensuring they run smoothly.",
      jp: "イベントを企画し、調整してスムーズに進行するようにします。",
    },
    linkedin: "https://www.linkedin.com/in/teruki-yamashita-4284a0278/",
  },
  {
    role: { en: "Sponsorship Director", jp: "スポンサーシップ担当" },
    name: { en: "Konon Kuboi", jp: "久保井このん" },
    degree: {
      en: "Degrees: Arts and Global Studies",
      jp: "専攻: 文学と国際学",
    },
    imageUrl: "/images/com/konon.png",
    description: {
      en: "Establishes partnerships and secures resources for club activities.",
      jp: "パートナーシップを築き、クラブ活動のための資源を確保します。",
    },
    linkedin: "https://www.linkedin.com/in/konon-kuboi-5a40a7295/",
  },
  {
    role: { en: "Education Director", jp: "教育担当" },
    name: { en: "Sara Ando", jp: "安藤紗楽" },
    degree: {
      en: "Degrees: Secondary and Primary Education (Special and Inclusive Education)",
      jp: "専攻: 中等と初等教育（特別支援教育とインクルーシブ教育）",
    },
    imageUrl: "/images/com/sara.png",
    description: {
      en: "Organizes workshops, training, and educational resources for members.",
      jp: "メンバー向けにワークショップ、トレーニング、と教育リソースを企画します。",
    },
  },
  {
    role: { en: "IT Director", jp: "IT担当" },
    name: { en: "Matthew Yau", jp: "マシュー・ヤウ" },
    degree: {
      en: "Degrees: Commerce, Computer Science, and Diploma of Languages (Japanese)",
      jp: "専攻: 商学、コンピュータサイエンス、言語学ディプロマ（日本語）",
      studyAbroad: {
        en: "Exchange Semester: The University of Tokyo",
        jp: "留学先: 東京大学",
      },
    },
    imageUrl: "/images/com/matt.jpg",
    description: {
      en: "Oversees the club's technology infrastructure and leads the development and maintenance of the club's website.",
      jp: "クラブの技術基盤を監督し、ウェブサイトの開発と維持を主導します。",
    },
    linkedin: "https://www.linkedin.com/in/matthewwyau",
  },
];

const ClubRoleDisplay = ({ language }: { language: "en" | "jp" }) => {
  const [selectedRole, setSelectedRole] = useState<RoleDetails>(roles[0]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col w-full p-4 -mt-12 sm:-mt-24">
      {/* Title Header */}
      <h1 className="text-3xl font-bold text-center mb-8">
        {language === "en" ? "2025 Executive Committee" : "2025年度役員委員会"}
      </h1>
      {/* Mobile Role Selection Dropdown */}
      <div className="block md:hidden mb-6">
        <select
          className="w-full p-2 border rounded-md"
          value={selectedRole.role.en}
          onChange={(e) => {
            const selected = roles.find(
              (role) => role.role.en === e.target.value
            );
            if (selected) setSelectedRole(selected);
          }}
        >
          {roles.map((role) => (
            <option key={role.role.en} value={role.role.en}>
              {language === "en" ? role.role.en : role.role.jp}
            </option>
          ))}
        </select>
      </div>
      {/* Main Role Display Section */}
      <div className="flex flex-col md:flex-row w-full mb-8">
        {/* Sidebar for Desktop */}
        <div className="hidden md:block w-1/4 p-4 border-r pr-8 mr-16">
          {roles.map((role) => (
            <div
              key={role.role.en}
              className={`cursor-pointer p-2 ${
                selectedRole.role.en === role.role.en
                  ? "text-black font-bold"
                  : "text-gray-500"
              } hover:bg-gray-200`}
              onClick={() => setSelectedRole(role)}
            >
              {language === "en" ? role.role.en : role.role.jp}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row flex-1 gap-8">
          {/* Image */}
          <div className="flex-shrink-0 md:w-72 md:h-72">
            <img
              src={selectedRole.imageUrl}
              alt={`${selectedRole.role.en} portrait`}
              className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-sm bg-white p-4 shadow-lg border border-gray-300"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              {language === "en" ? selectedRole.role.en : selectedRole.role.jp}
            </h3>
            <h2 className="text-2xl font-bold mt-2 flex items-center">
              {language === "en" ? selectedRole.name.en : selectedRole.name.jp}
              {selectedRole.linkedin && (
                <a
                  href={selectedRole.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:text-red-500"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
            </h2>
            <p className="text-sm text-gray-700 italic mt-2">
              {language === "en"
                ? selectedRole.degree.en
                : selectedRole.degree.jp}
            </p>
            {selectedRole.degree.studyAbroad && (
              <p className="text-sm text-gray-700 font-bold mt-1">
                {language === "en"
                  ? selectedRole.degree.studyAbroad.en
                  : selectedRole.degree.studyAbroad.jp}
              </p>
            )}

            <p className="mt-4 text-gray-600">
              {language === "en"
                ? selectedRole.description.en
                : selectedRole.description.jp}
            </p>
          </div>
        </div>
      </div>

      {/* Past Committees Section */}
      <div className="relative mt-16">
        {/* Past Committees Section */}
        <div className="relative z-10 p-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "en" ? "Past Committees" : "過去の委員会"}
          </h2>

          {/* Committees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2025 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2025</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Eugene Wang
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Ain Mohiddin
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Yanling Chen
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Lin Nakayama
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Max Ramsay
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Chinatsu Kanasaka
                </li>
                <li>
                  <span className="font-semibold">Events Director:</span> Teruki Yamashita
                </li>
                <li>
                  <span className="font-semibold">Education Director:</span>{" "}
                  Sara Ando
                </li>
                <li>
                  <span className="font-semibold">Sponsorship Director:</span>{" "}
                  Konon Kuboi
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Matthew Yau
                </li>
              </ul>
            </div>

            {/* 2024 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2024</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Samantha Xu
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Haya
                  Weeraratne
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Ain Mohiddin
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Eugene Wang
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Theo Gunawan
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Hikari Hyodo
                </li>
                <li>
                  <span className="font-semibold">Events Director:</span> Ethan
                  Wong
                </li>
                <li>
                  <span className="font-semibold">Education Director:</span>{" "}
                  Joanne Lee
                </li>
                <li>
                  <span className="font-semibold">Sponsorship Director:</span>{" "}
                  Yanling Chen
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Paul Zheng
                </li>
              </ul>
            </div>

            {/* 2023 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2023</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Annie Mao
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Isaac
                  Barnes
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Luyan Chen
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Quoc Nguyen
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Khoa Nguyen
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Caitlin Samuels
                </li>
                <li>
                  <span className="font-semibold">Events Director:</span> Midori
                  Hong
                </li>
                <li>
                  <span className="font-semibold">Education Director:</span>{" "}
                  Jannice Chiu
                </li>
                <li>
                  <span className="font-semibold">Sponsorship Director:</span>{" "}
                  Itsuki Kashima
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Paul Zheng
                </li>
              </ul>
            </div>

            {/* 2022 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2022</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> William
                  Giang
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Annie
                  Mao
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Quoc Nguyen
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Thao Ha
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Sylvia Tan
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Hieu Ha
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> James
                  Harvey
                </li>
              </ul>
            </div>

            {/* 2021 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2021</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Tommy Nguyen
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Jasmine
                  Pearman
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Patrick Lieu
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Yoshiya Mori
                </li>
                <li>
                  <span className="font-semibold">Education Director:</span>{" "}
                  William Giang
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Sylvia Tan
                </li>
                <li>
                  <span className="font-semibold">Sponsorship Director:</span>{" "}
                  Hieu Ha
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Sereena Chhor
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> James
                  Harvey
                </li>
              </ul>
            </div>

            {/* Add remaining years similarly */}
            {/* 2020 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2020</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Tommy Nguyen
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Felicia
                  Adiputra
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Jessica Yao
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Yoshiya Mori
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Patrick Lieu
                </li>
                <li>
                  <span className="font-semibold">Events Director:</span> Kai
                  Inglis
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Jasmine Pearman
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Sereena
                  Chhor
                </li>
              </ul>
            </div>

            {/* 2019 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2019</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Jessica Yao
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Patrick
                  Lieu
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Felicia
                  Adiputra
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Aichi
                  Tsuchihira
                </li>
                <li>
                  <span className="font-semibold">Assistant Treasurer:</span>{" "}
                  Yoshiya Mori
                </li>
                <li>
                  <span className="font-semibold">Marketing Director:</span>{" "}
                  Jasmine Pearman
                </li>
                <li>
                  <span className="font-semibold">Events Director:</span> Tommy
                  Nguyen
                </li>
                <li>
                  <span className="font-semibold">Sponsorship Director:</span>{" "}
                  Nao Hisada
                </li>
                <li>
                  <span className="font-semibold">Education Director:</span>{" "}
                  James Amodeo
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Sereena
                  Chhor
                </li>
              </ul>
            </div>

            {/* 2010 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2010</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Saori
                  Mizoguchi
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Lola
                  Sundin
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Kai Feng Hoa
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Shimpei
                  Yamashita
                </li>
                <li>
                  <span className="font-semibold">Event Coordinators:</span>{" "}
                  Mandy Wong, Kasumi Umehara and Fiona McCandless
                </li>
                <li>
                  <span className="font-semibold">Publicity Director:</span> Eri
                  Ichise
                </li>
                <li>
                  <span className="font-semibold">Liason Director:</span> Chris
                  Kelly
                </li>
                <li>
                  <span className="font-semibold">Newsletter Editor:</span> Juan
                  Ospina
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Stuart
                  Shattock
                </li>
              </ul>
            </div>

            {/* 2010 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2009</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Katja
                  Petrovic
                </li>
                <li>
                  <span className="font-semibold">Vice President:</span> Krystle
                  Chua
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Lola Sundin
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Andrew Ooi
                </li>
                <li>
                  <span className="font-semibold">Event Coordinators:</span>{" "}
                  Andrew Baillie, Scott Godinagh and Fiona McCandless
                </li>
                <li>
                  <span className="font-semibold">Publicity Director:</span>{" "}
                  Henry Chen
                </li>
                <li>
                  <span className="font-semibold">Liason Director:</span> Paul
                  Tucker
                </li>
                <li>
                  <span className="font-semibold">Newsletter Editor:</span> Tim
                  Wallis
                </li>
                <li>
                  <span className="font-semibold">IT Director:</span> Stuart
                  Shattock
                </li>
              </ul>
            </div>

            {/* 2008 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">2008</h3>
              <ul className="text-gray-700">
                <li>
                  <span className="font-semibold">President:</span> Bradford
                  Chrisafis
                </li>
                <li>
                  <span className="font-semibold">Vice President: </span> Orie
                </li>
                <li>
                  <span className="font-semibold">Treasurer: </span> Katja
                  Petrovic
                </li>
                <li>
                  <span className="font-semibold">Secretary: </span> Tom
                </li>
                <li>
                  <span className="font-semibold">Event Coordinators: </span>{" "}
                  Mari, Matthew Bode and Warwick
                </li>
                <li>
                  <span className="font-semibold">Publicity Director: </span>
                  Natalie
                </li>
                <li>
                  <span className="font-semibold">Liason Director: </span>
                  Krystle
                </li>
                <li>
                  <span className="font-semibold">Newsletter Editor: </span>
                  Tim Wallis
                </li>
                <li>
                  <span className="font-semibold">IT Director: </span>
                  Ryuichi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubRoleDisplay;
