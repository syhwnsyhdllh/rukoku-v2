"use client";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu Parenting?",
      answer:
        "Parenting merupakan serangkaian interaksi berkelanjutan antara orang tua dan anak, yaitu proses yang menyebabkan perubahan kedua bela pihak (Martin & Colbert: 1997)",
    },
    {
      id: 2,
      question: "Apa tujuan diadakan Parenting?",
      answer:
        "Tujuan parenting adalah untuk membangun hubungan yang sehat antara orang tua dan anak, mengembangkan karakter positif anak, serta memberikan keterampilan pengasuhan yang efektif kepada orang tua dalam mendidik dan membimbing anak-anak mereka.",
    },
    {
      id: 3,
      question: "Siapa sasaran Parenting?",
      answer:
        "Sasaran parenting adalah orang tua, calon orang tua, kakek nenek, pengasuh, dan siapa saja yang terlibat dalam pengasuhan anak. Program ini juga ditujukan untuk guru dan pendidik yang ingin memahami lebih dalam tentang perkembangan anak.",
    },
    {
      id: 4,
      question: "Mengapa ilmu Parenting penting bagi orang tua dan guru?",
      answer:
        "Ilmu parenting penting karena membantu orang tua dan guru memahami tahapan perkembangan anak, mengenali kebutuhan emosional dan psikologis mereka, serta menerapkan metode pengasuhan yang tepat. Hal ini sangat berpengaruh terhadap pembentukan karakter dan masa depan anak.",
    },
    {
      id: 5,
      question: "Faktor apa saja yang mempengaruhi pola asuh anak?",
      answer:
        "Beberapa faktor yang mempengaruhi pola asuh anak meliputi: latar belakang budaya keluarga, tingkat pendidikan orang tua, kondisi ekonomi, pengalaman masa kecil orang tua, lingkungan sosial, nilai dan keyakinan keluarga, serta kondisi psikologis orang tua.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Pertanyaan Yang Sering
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ditanyakan
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isOpen ? "ring-2 ring-blue-400 shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon Circle */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 rotate-180"
                          : "bg-blue-100 group-hover:bg-blue-200"
                      }`}
                    >
                      <svg
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-blue-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Question Text */}
                    <h3
                      className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-blue-600"
                          : "text-gray-800 group-hover:text-blue-600"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <div
                    className={`flex-shrink-0 ml-4 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isOpen
                          ? "text-blue-600"
                          : "text-gray-400 group-hover:text-blue-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content with Smooth Animation */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6">
                    {/* Decorative Line */}
                    <div className="w-full h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent mb-4"></div>

                    {/* Answer Text */}
                    <div className="pl-16 pr-4">
                      <p className="text-gray-600 leading-relaxed text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-600 font-medium">
              Masih ada pertanyaan? Hubungi kami untuk informasi lebih lanjut
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
