import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface FAQProps {
  language: "en" | "jp";
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const fontClass = language === "en" ? "font-enCute" : "font-jpCute";
  const faqs = [
    {
      question: {
        en: "What is the Monash Japanese Club?",
        jp: "モナッシュ日本クラブとは何ですか？",
      },
      answer: {
        en: "The Monash Japanese Club is a student-run organization focused on Japanese language and culture.",
        jp: "モナッシュ日本クラブは、日本語と日本文化に焦点を当てた学生運営の団体です。",
      },
    },
    {
      question: {
        en: "How can I join the club?",
        jp: "クラブにはどうやって参加できますか？",
      },
      answer: {
        en: "You can join the club by clicking the 'Join us' button at the top-right corner of this page, which will direct you to the MSA website for registration.",
        jp: "このページの右上にある「Join us」ボタンをクリックし、MSAのウェブサイトで登録することで参加できます。",
      },
    },
    {
      question: {
        en: "What events does the club host?",
        jp: "クラブではどのようなイベントを開催していますか？",
      },
      answer: {
        en: "We host cultural events, language exchange sessions, and social gatherings to bring people together.",
        jp: "文化イベント、語学交流会、ソーシャルギャザリングなど、人々を結びつけるイベントを開催しています。",
      },
    },
    {
      question: {
        en: "Do I need to know Japanese to join?",
        jp: "日本語が分からなくても参加できますか？",
      },
      answer: {
        en: "Not at all! The club is open to anyone interested in Japanese culture and language, regardless of skill level.",
        jp: "もちろんです！スキルレベルに関係なく、日本文化や日本語に興味がある方ならどなたでも参加できます。",
      },
    },
    {
      question: {
        en: "Do I need to be a Monash University student to attend MJC events?",
        jp: "MJCのイベントに参加するには、モナッシュ大学の学生である必要がありますか？",
      },
      answer: {
        en: "Generally, we specify if you need to be a Monash student to attend our events. If no such requirement is mentioned, you can assume that non-Monash students are welcome.",
        jp: "通常、イベントに参加するためにモナッシュ大学の学生である必要があるかどうかを明記しています。特にそのような要件が記載されていない場合、モナッシュ以外の学生も参加可能とお考えください。",
      },
    },
    {
      question: {
        en: "Do I need to be a Monash University student to join MJC?",
        jp: "MJCに加入するには、モナッシュ大学の学生である必要がありますか？",
      },
      answer: {
        en: "No, you don't need to be a Monash student to join. However, membership fees may be slightly higher for non-Monash students.",
        jp: "いいえ、モナッシュ大学の学生でなくても加入できます。ただし、モナッシュ大学の学生以外の場合、会費がやや高くなる場合があります。",
      },
    },
    {
      question: {
        en: "Do I need to be an MJC member to participate in MJC events?",
        jp: "MJCのイベントに参加するには、MJCの会員である必要がありますか？",
      },
      answer: {
        en: "For our weekly Kaiwa sessions, membership is required. For other in-semester events, we usually specify if membership is necessary. Generally, non-members can participate at slightly higher prices.",
        jp: "毎週開催される会話セッションには会員登録が必要です。学期中のその他のイベントについては、会員である必要があるかどうかを明記していますが、通常、非会員も少し高い価格で参加できます。",
      },
    },
    {
      question: {
        en: "How do I become part of the committee?",
        jp: "MJCの委員会の一員になるにはどうすればいいですか？",
      },
      answer: {
        en: "We hold recruitment cycles for our sub-committees during the first few weeks of Semester One and Semester Two. Executive positions are decided through an election process at our Annual General Meeting (AGM), held in the second half of Semester Two each year.",
        jp: "サブ委員会のメンバー募集は、セメスター1とセメスター2の最初の数週間に行われます。エグゼクティブポジションは、毎年セメスター2後半に開催される年次総会（AGM）での選挙プロセスによって決定されます。",
      },
    },
  ];

  return (
    <div
      className="faq-container bg-white p-4 md:p-6 rounded-lg shadow-md mt-4 mx-auto"
      style={{
        width: "100%",
        maxWidth: "1000px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <h2
        className={`text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center ${fontClass}`}
      >
        {language === "en" ? "Frequently Asked Questions" : "よくある質問"}
      </h2>
      <Accordion
        style={{
          width: "100%",
          maxWidth: "490px",
        }}
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={
              <div
                style={{ textAlign: "left", fontWeight: "semi-bold" }}
                className={`${fontClass}`}
              >
                {faq.question[language]}
              </div>
            }
            style={{
              maxWidth: "490px",
              overflow: "hidden",
            }}
            className={`${fontClass}`}
          >
            <p
              className="text-sm md:text-base text-gray-600"
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
                textAlign: "left", // Ensure the content aligns left as well
              }}
            >
              {faq.answer[language]}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
