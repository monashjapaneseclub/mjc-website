"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

type Person = {
  name: { en: string; jp: string };
  degree: { en: string; jp: string; studyAbroad?: { en: string; jp: string } };
  description: { en: string; jp: string };
  linkedin?: string;
};

type RoleDetails = {
  role: { en: string; jp: string };
  people: Person[];
};

const roles: RoleDetails[] = [
  {
    role: { en: "President", jp: "会長" },
    people: [
      {
        name: { en: "Renji Chan", jp: "チャン 連治" },
        degree: {
          en: "Degrees: Bachelor of Arts (Linguistics and Japanese) ",
          jp: "専攻: 文学士（言語学・日本語） ",
        },
        description: {
          en: "Organizes workshops, training, and educational resources for members.",
          jp: "メンバー向けにワークショップ、トレーニング、と教育リソースを企画します。",
        },
        linkedin: "https://www.linkedin.com/in/renji-chan-3a7b64313/",
      },
    ],
  },
  {
    role: { en: "Vice President", jp: "副会長" },
    people: [
      {
        name: { en: "Chihana Perera ", jp: "ペレーラ 千花" },
        degree: {
          en: "Degrees: Bachelor of Science (Psychology) and Music",
          jp: "専攻: 理学士（心理学）および音楽学士",
        },
        description: {
          en: "Organizes and coordinates events, ensuring they run smoothly.",
          jp: "イベントを企画し、調整してスムーズに進行するようにします。",
        },
        linkedin: "https://www.linkedin.com/in/chihana-perera/",
      },
    ],
  },
  {
    role: { en: "Treasurer", jp: "会計担当" },
    people: [
      {
        name: { en: "Haruka Cooper", jp: "クーパー 遥" },
        degree: {
          en: "Degrees: Bachelor of Laws (Honours) and Arts",
          jp: "専攻: 法学（優等）および文学",
        },
        description: {
          en: "Establishes partnerships and secures resources for club activities.",
          jp: "パートナーシップを築き、クラブ活動のための資源を確保します。",
        },
        linkedin: "https://www.linkedin.com/in/haruka-c-548036360/",
      },
    ],
  },
  {
    role: { en: "Assistant Treasurer", jp: "会計補佐" },
    people: [
      {
        name: { en: "Miyu Cho", jp: "趙 美柚" },
        degree: {
          en: "Degrees: Bachelor of Commerce",
          jp: "専攻: 商学学士",
        },
        description: {
          en: "Takes minutes during meetings, manages correspondence, and maintains club records.",
          jp: "会議中の議事録を取り、通信を管理し、クラブの記録を維持します。",
        },
        linkedin: "https://www.linkedin.com/in/miyu-cho-47b235356/",
      },
    ],
  },
  {
    role: { en: "Secretary", jp: "書記" },
    people: [
      {
        name: { en: "Hugo Cheung", jp: "チュン　ヒューゴ" },
        degree: {
          en: "Degrees: Bachelor of Civil Engineering(Honours)",
          jp: "専攻: 土木工学学士（優等学位）",
        },
        description: {
          en: "Develops marketing strategies to increase club visibility and engagement.",
          jp: "クラブの認知度と参加を高めるためのマーケティング戦略を策定します。",
        },
        linkedin: "https://www.linkedin.com/in/hugo-cheung-073252338/",
      },
    ],
  },
  {
    role: { en: "Marketing Director", jp: "マーケティング担当" },
    people: [
      {
        name: { en: "Natsumi Mochizuki", jp: "望月　夏光" },
        degree: {
          en: "Degree:Bachelor of Arts (Psychology Major, Japanese minor)",
          jp: "専攻: 文学士（心理学専攻、日本語副専攻）",
        },
        description: {
          en: "Develops marketing strategies to increase club visibility and engagement.",
          jp: "クラブの認知度と参加を高めるためのマーケティング戦略を策定します。",
        },
        linkedin: "https://www.linkedin.com/in/natsumi-mochizuki-013b81384/",
      },
    ],
  },
  {
    role: { en: "Events Director", jp: "イベント担当" },
    people: [
      {
        name: { en: "Ethan Du", jp: "デュ イーサン" },
        degree: {
          en: "Degrees: Bachelor of Biomedical science",
          jp: "専攻: 生物医学科学の学士号",
        },
        description: {
          en: "Organizes and coordinates events, ensuring they run smoothly.",
          jp: "イベントを企画し、調整してスムーズに進行するようにします。",
        },
      },
    ],
  },
  {
    role: { en: "Sponsorship Director", jp: "スポンサーシップ担当" },
    people: [
      {
        name: { en: "Sophia David", jp: "デービッド ソフィア" },
        degree: {
          en: "Degrees: Bachelor of Commerce (Finance) and Arts (Japanese Studies)",
          jp: "専攻: 商学（金融）および文学（日本学）の学士号",
        },
        description: {
          en: "Establishes partnerships and secures resources for club activities.",
          jp: "パートナーシップを築き、クラブ活動のための資源を確保します。",
        },
        linkedin: "https://www.linkedin.com/in/sophia-david-280b963b7/",
      },
    ],
  },
  {
    role: { en: "Education Co-Directors", jp: "教育部門 共同ディレクター" },
    people: [
      {
        name: { en: "Mia Kurata-Hsu", jp: "倉田美亜" },
        degree: {
          en: "Degrees: Bachelor of Arts (Psychology Major, Japanese minor)",
          jp: "専攻: 文学士（心理学専攻、日本語副専攻）",
        },
        description: {
          en: "Organizes workshops, training, and educational resources for members.",
          jp: "メンバー向けにワークショップ、トレーニング、と教育リソースを企画します。",
        },
        linkedin: "https://www.linkedin.com/in/mia-kurata-hsu/",
      },
      {
        name: { en: "Sara Ando", jp: "安藤紗楽" },
        degree: {
          en: "Degrees: Bachelor of Education(Honours) in Primary and Secondary Inclusive and Special Education",
          jp: "専攻: 教育学学士（名誉学士課程）初等・中等包括・特別支援教育専攻",
        },
        description: {
          en: "Organizes workshops, training, and educational resources for members.",
          jp: "メンバー向けにワークショップ、トレーニング、と教育リソースを企画します。",
        },
        linkedin: "https://www.linkedin.com/in/sara-ando-86331a411/",
      },
    ],
  },
  {
    role: { en: "IT Director", jp: "IT担当" },
    people: [
      {
        name: { en: "Solato Hiranuma", jp: "平沼　宙和" },
        degree: {
          en: "Degrees: Computer Science",
          jp: "専攻: コンピュータサイエンス",
        },
        description: {
          en: "Oversees the club's technology infrastructure and leads the development and maintenance of the club's website.",
          jp: "クラブの技術基盤を監督し、ウェブサイトの開発と維持を主導します。",
        },
        linkedin: "https://www.linkedin.com/in/solato-hiranuma-3120042b5/",
      },
    ],
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
        {language === "en" ? "2026 Executive Committee" : "2026年度役員委員会"}
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
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            {language === "en" ? selectedRole.role.en : selectedRole.role.jp}
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mt-2">
            {selectedRole.people.map((person) => (
              <div key={person.name.en} className="flex-1">
                <h2 className="text-2xl font-bold flex items-center">
                  {language === "en" ? person.name.en : person.name.jp}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-red-500"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </h2>
                <p className="text-sm text-gray-700 italic mt-2">
                  {language === "en" ? person.degree.en : person.degree.jp}
                </p>
                {person.degree.studyAbroad && (
                  <p className="text-sm text-gray-700 font-bold mt-1">
                    {language === "en"
                      ? person.degree.studyAbroad.en
                      : person.degree.studyAbroad.jp}
                  </p>
                )}

                <p className="mt-4 text-gray-600">
                  {language === "en"
                    ? person.description.en
                    : person.description.jp}
                </p>
              </div>
            ))}
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
          
              {/* 2026 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">2026</h3>
                <ul className="text-gray-700">
                  <li>
                    <span className="font-semibold">President:</span> Sara Ando
                  </li>
                  <li>
                    <span className="font-semibold">Vice President:</span> Teruki Yamashita
                  </li>
                  <li>
                    <span className="font-semibold">Treasurer:</span> Konon Kuboi
                  </li>
                  <li>
                    <span className="font-semibold">Secretary:</span> Chinatsu Kanasaka
                  </li>
                  <li>
                    <span className="font-semibold">Assistant Treasurer:</span>{" "}
                    Lin Nakayama
                  </li>
                  <li>
                    <span className="font-semibold">Marketing Director:</span>{" "}
                    Akihiro Kobayashi
                  </li>
                  <li>
                    <span className="font-semibold">Events Director:</span> Hugo Mukai
                  </li>
                  <li>
                    <span className="font-semibold">Education Co-Director:</span>{" "}
                    Chihana Perera
                  </li>
                  <li>
                    <span className="font-semibold">Education Co-Director:</span>{" "}
                    Renji Chan
                  </li>
                  <li>
                    <span className="font-semibold">Sponsorship Director:</span>{" "}
                    Konon Kuboi
                  </li>
                  <li>
                    <span className="font-semibold">IT Director:</span> Jin Heng Pang
                  </li>
                </ul>
              </div>

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
