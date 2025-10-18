"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Aktivitas belajarku", href: "#" },
    { label: "Kegiatan sekolahku", href: "#" },
    { label: "Kreasiku", href: "#" },
    { label: "Parenting", href: "#" },
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-10 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center justify-center py-3">
              <Image
                src="/images/logoRukoku.png"
                alt="RUKOKU Logo"
                className="h-full object-contain"
                width={150}
                height={50}
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 flex-1 ml-20">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-[#046DC2] font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Actions - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium hidden lg:block transition-colors duration-300 whitespace-nowrap"
              >
                Sahabat peduli anak
              </a>
              <button className="bg-[#046DC2] hover:bg-[#1BA3E0] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:shadow-lg transform hover:scale-105">
                Hope & Care
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative z-[60]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay - Hidden, menu is full screen */}
      <div className="hidden"></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Image
              src="/images/logoRukoku.png"
              alt="RUKOKU Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="flex flex-col flex-1 py-6 overflow-y-auto">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 px-6 py-4 border-b"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 px-6 py-4 border-b"
              onClick={toggleMenu}
            >
              Sahabat peduli anak
            </a>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t">
            <button className="w-full bg-[#046DC2] hover:bg-[#1BA3E0] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Hope & Care
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
