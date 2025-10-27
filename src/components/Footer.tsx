"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    lainnya: [
      { label: "Dinas Pendidikan Kab. Gowa", href: "/disdik" },
      { label: "Website Kab. Gowa", href: "https://gowakab.go.id" },
      { label: "Gowa", href: "/gowa" },
    ],
  };

  const socialMedia = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Lainnya Column */}
            <div>
              <h3 className="text-sm font-bold text-blue-950 mb-4 uppercase">
                Lainnya
              </h3>
              <ul className="space-y-3">
                {footerLinks.lainnya.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-950 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alamat Column */}
            <div>
              <h3 className="text-sm font-bold text-blue-950 mb-4 uppercase">
                Alamat
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600 leading-relaxed">
                  Jl. Mesjid Raya, Sungguminasa, Kec. Somba Opu, Kabupaten Gowa
                </li>
                <li className="text-sm text-gray-600 leading-relaxed">
                  Perumahan Graha Ananda Blok A No.12 Kec. Somba Opu Kel.
                  Batangkaluku (Sekretariat)
                </li>
              </ul>
            </div>

            {/* Empty column for spacing on larger screens */}
            <div className="hidden lg:block"></div>

            {/* Social Media Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#046DC2] mb-6 sm:mb-8 lg:mb-16">
                RUKOKU
              </h1>
              <h3 className="text-sm font-bold text-blue-950 mb-4">
                Social Media
              </h3>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-[#046DC2]/10 flex items-center justify-center text-[#046DC2] hover:bg-[#046DC2] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Copyright © {new Date().getFullYear()} Disdikgowa. All Rights
              Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a
                href="/terms"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
