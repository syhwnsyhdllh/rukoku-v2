import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function yang sudah ada (untuk styling dengan Tailwind)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ========================================
// TAMBAHKAN FUNCTION BARU DI BAWAH INI
// ========================================

/**
 * Generate slug dari string title
 * @param title - Judul yang akan diconvert ke slug
 * @returns slug yang SEO-friendly
 * @example generateSlug("Daun Botto Botto obat Luka Luar") // "daun-botto-botto-obat-luka-luar"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Hapus karakter spesial
    .replace(/\s+/g, "-") // Ganti spasi dengan -
    .replace(/-+/g, "-"); // Hapus multiple -
}

/**
 * Format tanggal ke format Indonesia
 * @param date - Date object atau string
 * @returns Formatted date string
 * @example formatDate("2024-01-15") // "15 Januari 2024"
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Truncate text dengan maksimal karakter tertentu
 * @param text - Text yang akan dipotong
 * @param maxLength - Maksimal panjang karakter (default: 150)
 * @returns Truncated text dengan ...
 * @example truncateText("Lorem ipsum dolor sit amet...", 20) // "Lorem ipsum dolor..."
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Format tanggal relatif (e.g., "2 hari yang lalu")
 * @param date - Date object atau string
 * @returns Relative time string
 */
export function getRelativeTime(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return "Baru saja";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} menit yang lalu`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} hari yang lalu`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 604800)} minggu yang lalu`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} bulan yang lalu`;
  return `${Math.floor(diffInSeconds / 31536000)} tahun yang lalu`;
}
