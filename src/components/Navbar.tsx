"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Check if menu item is active - EXACT MATCH
  const isActive = (href: string) => {
    return pathname === href;
  };

  // Check if parent menu with dropdown is active
  const isParentActive = (dropdownItems: { href: string }[]) => {
    return dropdownItems.some((item) => pathname === item.href);
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
    { label: "Aktivitas belajarku", href: "/aktivitas-belajarku" },
    {
      label: "Kegiatan sekolahku",
      href: "/kegiatan-sekolahku",
      dropdown: [
        { label: "Event Sekolah", href: "/kegiatan-sekolahku/event-sekolahku" },
        {
          label: "Galeri Foto",
          href: "/kegiatan-sekolahku/galeri-kegiatan-sekolahku",
        },
      ],
    },
    { label: "Kreasiku", href: "/kreasiku" },
    {
      label: "Parenting",
      href: "/parenting",
      dropdown: [
        { label: "Agenda Parenting", href: "/parenting/agenda-parenting" },
        { label: "Materi Parenting", href: "/parenting/materi-parenting" },
        {
          label: "Galeri Kegiatan Parenting",
          href: "/parenting/galeri-parenting",
        },
      ],
    },
  ];

  return (
    <>
      <header
        className={`lg:sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-50/70 backdrop-blur-lg shadow-md "
            : "bg-white shadow-sm"
        }`}
      >
        <div className="xl:container mx-auto px-4 md:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Logo - Always visible and responsive */}
            <Link
              href="/"
              className="flex items-center justify-center py-2 lg:py-3 shrink-0"
            >
              <Image
                src="/images/logoRukoku.png"
                alt="RUKOKU Logo"
                className="h-10 lg:h-12 xl:h-14 w-auto object-contain"
                width={150}
                height={50}
                priority
              />
            </Link>

            {/* Desktop Navigation - Hidden until lg */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-6 flex-1 lg:ml-4 xl:ml-12 flex-nowrap">
              {menuItems.map((item, index) => {
                const itemIsActive = item.dropdown
                  ? isParentActive(item.dropdown)
                  : isActive(item.href);

                return (
                  <div key={index} className="relative group">
                    {item.dropdown ? (
                      <>
                        <button
                          className={`font-medium transition-colors duration-300 relative group flex items-center gap-1 lg:text-[15px] xl:text-base whitespace-nowrap ${
                            itemIsActive
                              ? "text-[#046DC2] font-bold"
                              : "text-gray-700 hover:text-[#046DC2]"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className="transition-transform group-hover:rotate-180"
                          />
                          <span
                            className={`absolute left-0 bottom-0 h-0.5 bg-[#046DC2] transition-all duration-300 ${
                              itemIsActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                          <div className="py-2">
                            {item.dropdown.map((subItem, subIndex) => {
                              const subItemIsActive = isActive(subItem.href);
                              return (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                                    subItemIsActive
                                      ? "bg-blue-50 text-[#046DC2] font-bold"
                                      : "text-gray-700 hover:bg-blue-50 hover:text-[#046DC2]"
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-medium transition-colors duration-300 relative group lg:text-[15px] xl:text-base whitespace-nowrap ${
                          itemIsActive
                            ? "text-[#046DC2] font-bold"
                            : "text-gray-700 hover:text-[#046DC2]"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 bg-[#046DC2] transition-all duration-300 ${
                            itemIsActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-6 shrink-0">
              <Link
                href="/sahabat-peduli-anak"
                className={`font-medium transition-colors duration-300 whitespace-nowrap relative group lg:text-[15px] xl:text-base ${
                  isActive("/sahabat-peduli-anak")
                    ? "text-[#046DC2] font-bold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Sahabat peduli anak
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#046DC2] transition-all duration-300 ${
                    isActive("/sahabat-peduli-anak")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/hope-care"
                className="bg-[#046DC2] hover:bg-[#1BA3E0] text-white lg:px-4 xl:px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:shadow-lg transform hover:scale-105 lg:text-[15px] xl:text-base"
              >
                Hope & Care
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative z-[60] shrink-0"
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

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src="/images/logoRukoku.png"
                alt="RUKOKU Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="flex flex-col flex-1 py-6 overflow-y-auto">
            {menuItems.map((item, index) => {
              const itemIsActive = item.dropdown
                ? isParentActive(item.dropdown)
                : isActive(item.href);

              return (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full text-left font-medium transition-all duration-300 px-6 py-4 border-b flex items-center justify-between ${
                          itemIsActive
                            ? "text-[#046DC2] bg-blue-50 font-bold"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Mobile Dropdown */}
                      {openDropdown === item.label && (
                        <div className="bg-gray-50">
                          {item.dropdown.map((subItem, subIndex) => {
                            const subItemIsActive = isActive(subItem.href);
                            return (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className={`block transition-all duration-300 px-12 py-3 text-sm ${
                                  subItemIsActive
                                    ? "text-[#046DC2] bg-blue-100 font-bold"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                }`}
                                onClick={toggleMenu}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-all duration-300 px-6 py-4 border-b block ${
                        itemIsActive
                          ? "text-[#046DC2] bg-blue-50 font-bold"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              href="/sahabat-peduli-anak"
              className={`font-medium transition-all duration-300 px-6 py-4 border-b block ${
                isActive("/sahabat-peduli-anak")
                  ? "text-[#046DC2] bg-blue-50 font-bold"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={toggleMenu}
            >
              Sahabat peduli anak
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t">
            <Link
              href="/hope-care"
              className="w-full bg-[#046DC2] hover:bg-[#1BA3E0] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 block text-center"
              onClick={toggleMenu}
            >
              Hope & Care
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
