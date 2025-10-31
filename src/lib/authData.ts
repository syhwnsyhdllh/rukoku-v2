// lib/authData.ts

export type UserRole = "guru" | "murid";

export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  role: UserRole;
  schoolId: number; // ✅ Ubah ke number sesuai SchoolData
  schoolName: string;
  districtId: string; // ✅ Tambahkan districtId
  class?: string; // Khusus murid
  subject?: string; // Khusus guru
}

// Data Guru - Disesuaikan dengan sekolah di Kabupaten Gowa
export const teachersData: User[] = [
  // Guru di Somba Opu
  {
    id: "G001",
    username: "pak.ahmad",
    password: "guru123",
    name: "Ahmad Hidayat, S.Pd",
    role: "guru",
    schoolId: 1,
    schoolName: "TK Pertiwi Somba Opu",
    districtId: "somba_opu",
    subject: "Guru Kelas",
  },
  {
    id: "G002",
    username: "bu.siti",
    password: "guru123",
    name: "Siti Nurhaliza, S.Pd",
    role: "guru",
    schoolId: 3,
    schoolName: "SD Negeri 1 Sungguminasa",
    districtId: "somba_opu",
    subject: "Matematika",
  },
  {
    id: "G003",
    username: "pak.rahman",
    password: "guru123",
    name: "Abd. Rahman, S.Pd",
    role: "guru",
    schoolId: 6,
    schoolName: "SMP Negeri 1 Somba Opu",
    districtId: "somba_opu",
    subject: "IPA",
  },

  // Guru di Bontomarannu
  {
    id: "G004",
    username: "bu.aisyah",
    password: "guru123",
    name: "Aisyah Mutmainnah, S.Pd",
    role: "guru",
    schoolId: 7,
    schoolName: "TK Aisyiyah Bontomarannu",
    districtId: "bontomarannu",
    subject: "Guru Kelas",
  },
  {
    id: "G005",
    username: "pak.ilham",
    password: "guru123",
    name: "Ilham Saputra, S.Pd",
    role: "guru",
    schoolId: 10,
    schoolName: "SMP Negeri 2 Bontomarannu",
    districtId: "bontomarannu",
    subject: "Bahasa Indonesia",
  },

  // Guru di Pallangga
  {
    id: "G006",
    username: "bu.fatimah",
    password: "guru123",
    name: "Fatimah Azzahra, S.Pd",
    role: "guru",
    schoolId: 16,
    schoolName: "SD Negeri Pallangga",
    districtId: "pallangga",
    subject: "Bahasa Inggris",
  },
  {
    id: "G007",
    username: "pak.rizal",
    password: "guru123",
    name: "Muhammad Rizal, S.Pd",
    role: "guru",
    schoolId: 18,
    schoolName: "SMP Negeri 3 Pallangga",
    districtId: "pallangga",
    subject: "Matematika",
  },

  // Guru di Bajeng
  {
    id: "G008",
    username: "bu.nurul",
    password: "guru123",
    name: "Nurul Hidayah, S.Pd",
    role: "guru",
    schoolId: 24,
    schoolName: "SD Negeri Bajeng",
    districtId: "bajeng",
    subject: "IPS",
  },

  // Guru di Bontonompo
  {
    id: "G009",
    username: "pak.basri",
    password: "guru123",
    name: "Basri Mahmud, S.Pd",
    role: "guru",
    schoolId: 68,
    schoolName: "SD Negeri Bontonompo",
    districtId: "bontonompo",
    subject: "PKn",
  },
  {
    id: "G010",
    username: "bu.hasna",
    password: "guru123",
    name: "Hasna Amalia, S.Pd",
    role: "guru",
    schoolId: 70,
    schoolName: "SMP Negeri 1 Bontonompo",
    districtId: "bontonompo",
    subject: "Seni Budaya",
  },
];

// Data Murid - Disesuaikan dengan sekolah di Kabupaten Gowa
export const studentsData: User[] = [
  // Murid di Somba Opu
  {
    id: "M001",
    username: "andi.murid",
    password: "murid123",
    name: "Andi Muh. Fadhil",
    role: "murid",
    schoolId: 1,
    schoolName: "TK Pertiwi Somba Opu",
    districtId: "somba_opu",
    class: "Kelompok B",
  },
  {
    id: "M002",
    username: "nurul.murid",
    password: "murid123",
    name: "Nurul Aini Fitria",
    role: "murid",
    schoolId: 3,
    schoolName: "SD Negeri 1 Sungguminasa",
    districtId: "somba_opu",
    class: "Kelas 4A",
  },
  {
    id: "M003",
    username: "fadli.murid",
    password: "murid123",
    name: "Muhammad Fadli",
    role: "murid",
    schoolId: 4,
    schoolName: "SD Negeri 2 Sungguminasa",
    districtId: "somba_opu",
    class: "Kelas 5B",
  },
  {
    id: "M004",
    username: "sari.murid",
    password: "murid123",
    name: "Sari Dewi Putri",
    role: "murid",
    schoolId: 6,
    schoolName: "SMP Negeri 1 Somba Opu",
    districtId: "somba_opu",
    class: "Kelas 7A",
  },

  // Murid di Bontomarannu
  {
    id: "M005",
    username: "rizki.murid",
    password: "murid123",
    name: "Rizki Ramadhan",
    role: "murid",
    schoolId: 7,
    schoolName: "TK Aisyiyah Bontomarannu",
    districtId: "bontomarannu",
    class: "Kelompok A",
  },
  {
    id: "M006",
    username: "ayu.murid",
    password: "murid123",
    name: "Ayu Lestari",
    role: "murid",
    schoolId: 8,
    schoolName: "SD Negeri Bontomarannu",
    districtId: "bontomarannu",
    class: "Kelas 3A",
  },
  {
    id: "M007",
    username: "irfan.murid",
    password: "murid123",
    name: "Irfan Hidayatullah",
    role: "murid",
    schoolId: 10,
    schoolName: "SMP Negeri 2 Bontomarannu",
    districtId: "bontomarannu",
    class: "Kelas 8B",
  },

  // Murid di Pallangga
  {
    id: "M008",
    username: "zahra.murid",
    password: "murid123",
    name: "Zahra Amelia",
    role: "murid",
    schoolId: 15,
    schoolName: "TK Islam Terpadu Pallangga",
    districtId: "pallangga",
    class: "Kelompok B",
  },
  {
    id: "M009",
    username: "dimas.murid",
    password: "murid123",
    name: "Dimas Prasetyo",
    role: "murid",
    schoolId: 16,
    schoolName: "SD Negeri Pallangga",
    districtId: "pallangga",
    class: "Kelas 6A",
  },
  {
    id: "M010",
    username: "putri.murid",
    password: "murid123",
    name: "Putri Aulia Rahman",
    role: "murid",
    schoolId: 18,
    schoolName: "SMP Negeri 3 Pallangga",
    districtId: "pallangga",
    class: "Kelas 9A",
  },

  // Murid di Bajeng
  {
    id: "M011",
    username: "alif.murid",
    password: "murid123",
    name: "Alif Maulana",
    role: "murid",
    schoolId: 23,
    schoolName: "TK Tunas Harapan Bajeng",
    districtId: "bajeng",
    class: "Kelompok A",
  },
  {
    id: "M012",
    username: "dewi.murid",
    password: "murid123",
    name: "Dewi Sartika",
    role: "murid",
    schoolId: 24,
    schoolName: "SD Negeri Bajeng",
    districtId: "bajeng",
    class: "Kelas 5A",
  },

  // Murid di Bontonompo
  {
    id: "M013",
    username: "hafiz.murid",
    password: "murid123",
    name: "Hafiz Abdullah",
    role: "murid",
    schoolId: 67,
    schoolName: "TK Pembina Bontonompo",
    districtId: "bontonompo",
    class: "Kelompok B",
  },
  {
    id: "M014",
    username: "rina.murid",
    password: "murid123",
    name: "Rina Kartika",
    role: "murid",
    schoolId: 68,
    schoolName: "SD Negeri Bontonompo",
    districtId: "bontonompo",
    class: "Kelas 4B",
  },
  {
    id: "M015",
    username: "arya.murid",
    password: "murid123",
    name: "Arya Wijaya",
    role: "murid",
    schoolId: 70,
    schoolName: "SMP Negeri 1 Bontonompo",
    districtId: "bontonompo",
    class: "Kelas 8A",
  },
];

// Gabungkan semua user
export const allUsers: User[] = [...teachersData, ...studentsData];

// Fungsi untuk login
export const authenticateUser = (
  username: string,
  password: string
): User | null => {
  const user = allUsers.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
};

// Fungsi untuk mendapatkan user berdasarkan schoolId
export const getUsersBySchool = (schoolId: number): User[] => {
  return allUsers.filter((user) => user.schoolId === schoolId);
};

// Fungsi untuk mendapatkan guru di sekolah tertentu
export const getTeachersBySchool = (schoolId: number): User[] => {
  return teachersData.filter((teacher) => teacher.schoolId === schoolId);
};

// Fungsi untuk mendapatkan murid di sekolah tertentu
export const getStudentsBySchool = (schoolId: number): User[] => {
  return studentsData.filter((student) => student.schoolId === schoolId);
};

// Fungsi untuk mendapatkan user berdasarkan districtId
export const getUsersByDistrict = (districtId: string): User[] => {
  return allUsers.filter((user) => user.districtId === districtId);
};
