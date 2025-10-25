"use client";
import { useState } from "react";

const CardPengaduan = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    aduan: "",
    penjelasan: "",
    file: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pengaduan Anda telah berhasil dikirim!");
    setFormData({
      nama: "",
      email: "",
      aduan: "",
      penjelasan: "",
      file: null,
    });
  };

  return (
    <section className="bg-white relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto lg:px-4 relative z-10 w-full lg:-mt-24">
        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm lg:rounded-3xl shadow-md p-8 md:p-12 ring-1 ring-blue-100">
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="group">
                <label
                  htmlFor="nama"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Masukkan Nama"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#48BCFF] focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Anda"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#48BCFF] focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="group">
              <label
                htmlFor="aduan"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Topik Aduan
              </label>
              <input
                type="text"
                id="aduan"
                name="aduan"
                value={formData.aduan}
                onChange={handleInputChange}
                placeholder="Apa yang Anda Adukan"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#48BCFF] focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label
                htmlFor="penjelasan"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Penjelasan
              </label>
              <textarea
                id="penjelasan"
                name="penjelasan"
                value={formData.penjelasan}
                onChange={handleInputChange}
                placeholder="Penjelasan"
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#48BCFF] focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Bukti Disini
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
                <label
                  htmlFor="file"
                  className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#48BCFF] transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 font-medium group-hover:border-[#48BCFF] group-hover:text-[#046DC2] transition-colors">
                      Browse...
                    </span>
                    <span className="text-gray-500 text-sm">
                      {formData.file ? formData.file.name : "No file selected."}
                    </span>
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#48BCFF] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Format: JPG, PNG, PDF, DOC (Max 5MB)
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#48BCFF] to-[#046DC2] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span className="text-lg">Kirim Pengaduan</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-medium">
                Data Anda aman dan terlindungi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPengaduan;
