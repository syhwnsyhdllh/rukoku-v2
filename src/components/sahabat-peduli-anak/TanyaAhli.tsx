"use client";
import { useState } from "react";

interface Expert {
  name: string;
  title: string;
  avatar: string;
}

interface Question {
  id: number;
  question: string;
  askedBy: string;
  answered: boolean;
  answers: number;
  timeAgo: string;
  excerpt: string;
  answeredBy?: Expert[];
  fullAnswer?: string;
  askedDate?: string;
}

const TanyaAhli = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    description: "",
  });

  const questions: Question[] = [
    {
      id: 1,
      question:
        "Bagaimana ciri-ciri sembuh dari penyakit rheumatoid arthritis itu?",
      askedBy: "Syahwan",
      answered: true,
      answers: 1,
      timeAgo: "1 jam yang lalu",
      excerpt:
        "Dokter saya tiba-tiba mengalami jantung berdetak kencan disertai kulit terasa kasar, sakit kepala, mulut kering, dan agak pusing. Saya mengalami ini udah ...",
      answeredBy: [
        {
          name: "Prof. Dr. Muhammad Jufri, S. Psi., M.Si., M.Psi.",
          title: "Psikolog",
          avatar:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
        },
      ],
      fullAnswer:
        "Dikeluarga saya ada riwayat penyakit rheumatoid arthritis, saya udah sebulanan ini punya tanda2 sakit begkak, memerah, dan hangat ketika di sentuh. dan duduk lama, serta ketika bangun dari tidur itu sendi2 terasa nyeri dok. Perlukah saya periksa RF, ACPA, LED, dan CRP dulu dok? dan ini kan saya minumin obat nyeri dan sembuh dokter. bagaimana Ciri-ciri sembuh dari penyakit rheumatoid arthritis itu?",
      askedDate: "7 Juli 2023",
    },
    {
      id: 2,
      question:
        "Bagaimana ciri-ciri sembuh dari penyakit rheumatoid arthritis itu?",
      askedBy: "Syahwan",
      answered: false,
      answers: 0,
      timeAgo: "1 jam yang lalu",
      excerpt:
        "Dokter saya tiba-tiba mengalami jantung berdetak kencan disertai kulit terasa kasar, sakit kepala, mulut kering, dan agak pusing. Saya mengalami ini udah ...",
    },
    {
      id: 3,
      question: "Apa yang harus dilakukan saat anak tantrum di tempat umum?",
      askedBy: "Budi Santoso",
      answered: true,
      answers: 2,
      timeAgo: "3 jam yang lalu",
      excerpt:
        "Anak saya berusia 3 tahun sering tantrum ketika di mall atau tempat ramai. Bagaimana cara mengatasinya dengan tepat tanpa mempermalukan anak?",
      answeredBy: [
        {
          name: "Athina Saraya, S.Psi., M.Sc",
          title: "Psikolog Anak",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
        },
      ],
    },
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ name: "", question: "", description: "" });
  };

  const QuestionCard = ({ question }: { question: Question }) => (
    <div
      onClick={() => question.answered && setSelectedQuestion(question)}
      className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
        question.answered
          ? "cursor-pointer border-2 border-transparent hover:border-orange-200"
          : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={`https://ui-avatars.com/api/?name=${question.askedBy}&background=random`}
          alt={question.askedBy}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 hover:text-orange-600 transition-colors">
            {question.question}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Oleh: {question.askedBy}</span>
          </div>
          {question.answered && question.answeredBy && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-600">Dijawab Oleh:</span>
              <div className="flex items-center gap-2">
                {question.answeredBy.map((expert, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-6 h-6 rounded-full border-2 border-orange-400"
                    />
                    <span className="text-sm font-medium text-orange-600">
                      {expert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {question.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            </svg>
            <span
              className={
                question.answered
                  ? "text-orange-600 font-semibold"
                  : "text-gray-500"
              }
            >
              {question.answers} Balasan
            </span>
          </div>
          <span className="text-gray-400">{question.timeAgo}</span>
        </div>
        {question.answered && (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            ✓ Terjawab
          </span>
        )}
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                  Konsultasi Online
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Tanya Ahli
              </h2>
              <p className="text-gray-600 text-lg">
                Ajukan pertanyaan Anda kepada para ahli kami
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Buat Pertanyaan
            </button>
          </div>

          {/* Section Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Diskusi Parenting Terbaru
            </h3>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl transform transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Buat pertanyaan
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Masukkan nama:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Masukkan pertanyaan:
                </label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Tulis pertanyaan Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Penjelasan:
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Jelaskan pertanyaan Anda lebih detail..."
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors"
                >
                  Tutup
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                >
                  Buat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-8 shadow-2xl my-8">
            {/* Back Button */}
            <button
              onClick={() => setSelectedQuestion(null)}
              className="mb-6 px-4 py-2 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali ke diskusi
            </button>

            {/* Question Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedQuestion.question}
            </h2>

            {/* Asker Info */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
              <img
                src={`https://ui-avatars.com/api/?name=${selectedQuestion.askedBy}&background=random`}
                alt={selectedQuestion.askedBy}
                className="w-14 h-14 rounded-full border-2 border-orange-300"
              />
              <div>
                <h3 className="font-bold text-gray-900">
                  {selectedQuestion.askedBy}
                </h3>
                <p className="text-sm text-gray-600">Orang Tua</p>
              </div>
            </div>

            {/* Question Content */}
            <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                {selectedQuestion.fullAnswer}
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="8" />
                  </svg>
                  {selectedQuestion.askedDate}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="8" />
                  </svg>
                  23:00
                </span>
              </div>
            </div>

            {/* Answer Section */}
            {selectedQuestion.answeredBy && (
              <div className="border-2 border-orange-200 rounded-2xl p-6 bg-gradient-to-br from-orange-50 to-pink-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Dijawab oleh:
                </h3>
                {selectedQuestion.answeredBy.map((expert, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-14 h-14 rounded-full border-2 border-orange-400"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {expert.name}
                        </h4>
                        <p className="text-sm text-orange-600 font-medium">
                          {expert.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <circle cx="10" cy="10" r="8" />
                        </svg>
                        7 Juli 2023
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <circle cx="10" cy="10" r="8" />
                        </svg>
                        23:00
                      </span>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {selectedQuestion.fullAnswer}
                      </p>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">
                          Oleh:
                        </span>
                        <span className="text-orange-600 hover:underline ml-1 cursor-pointer">
                          {expert.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TanyaAhli;
