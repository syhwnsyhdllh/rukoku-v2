// Type Definitions
export interface SchoolData {
  id: number;
  name: string;
  type: "tk" | "sdn" | "sdi" | "smp";
  studentCount: number;
  teacherCount: number;
  totalParticipants: number;
  districtId: string;
}

export interface District {
  id: string;
  name: string;
}

export interface DistrictStats {
  districtId: string;
  districtName: string;
  totalSchools: number;
  totalTK: number;
  totalSDN: number;
  totalSDI: number;
  totalSMP: number;
  totalStudents: number;
  totalTeachers: number;
  totalParticipants: number;
}

// Districts Data - 18 Kecamatan di Kabupaten Gowa
export const districts: District[] = [
  { id: "somba_opu", name: "Somba Opu" },
  { id: "bontomarannu", name: "Bontomarannu" },
  { id: "pattallassang", name: "Pattallassang" },
  { id: "pallangga", name: "Pallangga" },
  { id: "barombong", name: "Barombong" },
  { id: "bajeng", name: "Bajeng" },
  { id: "bajeng_barat", name: "Bajeng Barat" },
  { id: "tinggimoncong", name: "Tinggimoncong" },
  { id: "tombolo_pao", name: "Tombolo Pao" },
  { id: "parangloe", name: "Parangloe" },
  { id: "manuju", name: "Manuju" },
  { id: "bungaya", name: "Bungaya" },
  { id: "bontolempangan", name: "Bontolempangan" },
  { id: "tompobulu", name: "Tompobulu" },
  { id: "biringbulu", name: "Biringbulu" },
  { id: "parigi", name: "Parigi" },
  { id: "bontonompo", name: "Bontonompo" },
  { id: "bontonompo_selatan", name: "Bontonompo Selatan" },
];

// Schools Data - Distributed across 18 districts in Kabupaten Gowa
export const schools: SchoolData[] = [
  // Kecamatan Somba Opu
  {
    id: 1,
    name: "TK Pertiwi Somba Opu",
    type: "tk",
    studentCount: 65,
    teacherCount: 16,
    totalParticipants: 42,
    districtId: "somba_opu",
  },
  {
    id: 2,
    name: "TK Dharma Wanita Somba Opu",
    type: "tk",
    studentCount: 58,
    teacherCount: 14,
    totalParticipants: 38,
    districtId: "somba_opu",
  },
  {
    id: 3,
    name: "SD Negeri 1 Sungguminasa",
    type: "sdn",
    studentCount: 185,
    teacherCount: 48,
    totalParticipants: 125,
    districtId: "somba_opu",
  },
  {
    id: 4,
    name: "SD Negeri 2 Sungguminasa",
    type: "sdn",
    studentCount: 172,
    teacherCount: 45,
    totalParticipants: 115,
    districtId: "somba_opu",
  },
  {
    id: 5,
    name: "SD Inpres Romangpolong",
    type: "sdi",
    studentCount: 145,
    teacherCount: 38,
    totalParticipants: 95,
    districtId: "somba_opu",
  },
  {
    id: 6,
    name: "SMP Negeri 1 Somba Opu",
    type: "smp",
    studentCount: 225,
    teacherCount: 58,
    totalParticipants: 180,
    districtId: "somba_opu",
  },

  // Kecamatan Bontomarannu
  {
    id: 7,
    name: "TK Aisyiyah Bontomarannu",
    type: "tk",
    studentCount: 42,
    teacherCount: 10,
    totalParticipants: 28,
    districtId: "bontomarannu",
  },
  {
    id: 8,
    name: "SD Negeri Bontomarannu",
    type: "sdn",
    studentCount: 128,
    teacherCount: 34,
    totalParticipants: 85,
    districtId: "bontomarannu",
  },
  {
    id: 9,
    name: "SD Inpres Bontomarannu",
    type: "sdi",
    studentCount: 95,
    teacherCount: 26,
    totalParticipants: 62,
    districtId: "bontomarannu",
  },
  {
    id: 10,
    name: "SMP Negeri 2 Bontomarannu",
    type: "smp",
    studentCount: 165,
    teacherCount: 42,
    totalParticipants: 125,
    districtId: "bontomarannu",
  },

  // Kecamatan Pattallassang
  {
    id: 11,
    name: "TK Pembina Pattallassang",
    type: "tk",
    studentCount: 38,
    teacherCount: 9,
    totalParticipants: 25,
    districtId: "pattallassang",
  },
  {
    id: 12,
    name: "SD Negeri Pattallassang",
    type: "sdn",
    studentCount: 112,
    teacherCount: 30,
    totalParticipants: 75,
    districtId: "pattallassang",
  },
  {
    id: 13,
    name: "SD Inpres Tamaona",
    type: "sdi",
    studentCount: 88,
    teacherCount: 24,
    totalParticipants: 58,
    districtId: "pattallassang",
  },
  {
    id: 14,
    name: "SMP Negeri 1 Pattallassang",
    type: "smp",
    studentCount: 148,
    teacherCount: 38,
    totalParticipants: 112,
    districtId: "pattallassang",
  },

  // Kecamatan Pallangga
  {
    id: 15,
    name: "TK Islam Terpadu Pallangga",
    type: "tk",
    studentCount: 52,
    teacherCount: 13,
    totalParticipants: 35,
    districtId: "pallangga",
  },
  {
    id: 16,
    name: "SD Negeri Pallangga",
    type: "sdn",
    studentCount: 158,
    teacherCount: 42,
    totalParticipants: 105,
    districtId: "pallangga",
  },
  {
    id: 17,
    name: "SD Inpres Pallangga",
    type: "sdi",
    studentCount: 122,
    teacherCount: 32,
    totalParticipants: 82,
    districtId: "pallangga",
  },
  {
    id: 18,
    name: "SMP Negeri 3 Pallangga",
    type: "smp",
    studentCount: 195,
    teacherCount: 50,
    totalParticipants: 152,
    districtId: "pallangga",
  },

  // Kecamatan Barombong
  {
    id: 19,
    name: "TK Kartika Barombong",
    type: "tk",
    studentCount: 35,
    teacherCount: 8,
    totalParticipants: 22,
    districtId: "barombong",
  },
  {
    id: 20,
    name: "SD Negeri Barombong",
    type: "sdn",
    studentCount: 98,
    teacherCount: 26,
    totalParticipants: 65,
    districtId: "barombong",
  },
  {
    id: 21,
    name: "SD Inpres Barombong",
    type: "sdi",
    studentCount: 75,
    teacherCount: 20,
    totalParticipants: 50,
    districtId: "barombong",
  },
  {
    id: 22,
    name: "SMP Negeri 1 Barombong",
    type: "smp",
    studentCount: 132,
    teacherCount: 35,
    totalParticipants: 98,
    districtId: "barombong",
  },

  // Kecamatan Bajeng
  {
    id: 23,
    name: "TK Tunas Harapan Bajeng",
    type: "tk",
    studentCount: 45,
    teacherCount: 11,
    totalParticipants: 30,
    districtId: "bajeng",
  },
  {
    id: 24,
    name: "SD Negeri Bajeng",
    type: "sdn",
    studentCount: 142,
    teacherCount: 37,
    totalParticipants: 95,
    districtId: "bajeng",
  },
  {
    id: 25,
    name: "SD Inpres Bajeng Barat",
    type: "sdi",
    studentCount: 108,
    teacherCount: 29,
    totalParticipants: 72,
    districtId: "bajeng",
  },
  {
    id: 26,
    name: "SMP Negeri 2 Bajeng",
    type: "smp",
    studentCount: 178,
    teacherCount: 46,
    totalParticipants: 138,
    districtId: "bajeng",
  },

  // Kecamatan Bajeng Barat
  {
    id: 27,
    name: "TK PAUD Sejahtera Bajeng Barat",
    type: "tk",
    studentCount: 32,
    teacherCount: 7,
    totalParticipants: 20,
    districtId: "bajeng_barat",
  },
  {
    id: 28,
    name: "SD Negeri Limbung",
    type: "sdn",
    studentCount: 92,
    teacherCount: 25,
    totalParticipants: 62,
    districtId: "bajeng_barat",
  },
  {
    id: 29,
    name: "SD Inpres Limbung",
    type: "sdi",
    studentCount: 68,
    teacherCount: 18,
    totalParticipants: 45,
    districtId: "bajeng_barat",
  },
  {
    id: 30,
    name: "SMP Negeri 1 Bajeng Barat",
    type: "smp",
    studentCount: 118,
    teacherCount: 32,
    totalParticipants: 88,
    districtId: "bajeng_barat",
  },

  // Kecamatan Tinggimoncong
  {
    id: 31,
    name: "TK Pembina Tinggimoncong",
    type: "tk",
    studentCount: 28,
    teacherCount: 6,
    totalParticipants: 18,
    districtId: "tinggimoncong",
  },
  {
    id: 32,
    name: "SD Negeri Tinggimoncong",
    type: "sdn",
    studentCount: 85,
    teacherCount: 23,
    totalParticipants: 56,
    districtId: "tinggimoncong",
  },
  {
    id: 33,
    name: "SD Inpres Malino",
    type: "sdi",
    studentCount: 72,
    teacherCount: 19,
    totalParticipants: 48,
    districtId: "tinggimoncong",
  },
  {
    id: 34,
    name: "SMP Negeri 1 Tinggimoncong",
    type: "smp",
    studentCount: 105,
    teacherCount: 28,
    totalParticipants: 78,
    districtId: "tinggimoncong",
  },

  // Kecamatan Tombolo Pao
  {
    id: 35,
    name: "TK Pertiwi Tombolo Pao",
    type: "tk",
    studentCount: 40,
    teacherCount: 10,
    totalParticipants: 26,
    districtId: "tombolo_pao",
  },
  {
    id: 36,
    name: "SD Negeri Tombolo",
    type: "sdn",
    studentCount: 118,
    teacherCount: 31,
    totalParticipants: 78,
    districtId: "tombolo_pao",
  },
  {
    id: 37,
    name: "SD Inpres Pao",
    type: "sdi",
    studentCount: 95,
    teacherCount: 26,
    totalParticipants: 62,
    districtId: "tombolo_pao",
  },
  {
    id: 38,
    name: "SMP Negeri 2 Tombolo Pao",
    type: "smp",
    studentCount: 152,
    teacherCount: 40,
    totalParticipants: 115,
    districtId: "tombolo_pao",
  },

  // Kecamatan Parangloe
  {
    id: 39,
    name: "TK Dharma Wanita Parangloe",
    type: "tk",
    studentCount: 36,
    teacherCount: 9,
    totalParticipants: 24,
    districtId: "parangloe",
  },
  {
    id: 40,
    name: "SD Negeri Parangloe",
    type: "sdn",
    studentCount: 102,
    teacherCount: 27,
    totalParticipants: 68,
    districtId: "parangloe",
  },
  {
    id: 41,
    name: "SD Inpres Parangloe",
    type: "sdi",
    studentCount: 82,
    teacherCount: 22,
    totalParticipants: 55,
    districtId: "parangloe",
  },
  {
    id: 42,
    name: "SMP Negeri 1 Parangloe",
    type: "smp",
    studentCount: 138,
    teacherCount: 36,
    totalParticipants: 102,
    districtId: "parangloe",
  },

  // Kecamatan Manuju
  {
    id: 43,
    name: "TK Aisyiyah Manuju",
    type: "tk",
    studentCount: 30,
    teacherCount: 7,
    totalParticipants: 19,
    districtId: "manuju",
  },
  {
    id: 44,
    name: "SD Negeri Manuju",
    type: "sdn",
    studentCount: 78,
    teacherCount: 21,
    totalParticipants: 52,
    districtId: "manuju",
  },
  {
    id: 45,
    name: "SD Inpres Manuju",
    type: "sdi",
    studentCount: 62,
    teacherCount: 17,
    totalParticipants: 42,
    districtId: "manuju",
  },
  {
    id: 46,
    name: "SMP Negeri 1 Manuju",
    type: "smp",
    studentCount: 95,
    teacherCount: 26,
    totalParticipants: 72,
    districtId: "manuju",
  },

  // Kecamatan Bungaya
  {
    id: 47,
    name: "TK Pembina Bungaya",
    type: "tk",
    studentCount: 34,
    teacherCount: 8,
    totalParticipants: 22,
    districtId: "bungaya",
  },
  {
    id: 48,
    name: "SD Negeri Bungaya",
    type: "sdn",
    studentCount: 88,
    teacherCount: 24,
    totalParticipants: 58,
    districtId: "bungaya",
  },
  {
    id: 49,
    name: "SD Inpres Bungaya",
    type: "sdi",
    studentCount: 70,
    teacherCount: 19,
    totalParticipants: 46,
    districtId: "bungaya",
  },
  {
    id: 50,
    name: "SMP Negeri 1 Bungaya",
    type: "smp",
    studentCount: 112,
    teacherCount: 30,
    totalParticipants: 85,
    districtId: "bungaya",
  },

  // Kecamatan Bontolempangan
  {
    id: 51,
    name: "TK Tunas Bangsa Bontolempangan",
    type: "tk",
    studentCount: 26,
    teacherCount: 6,
    totalParticipants: 17,
    districtId: "bontolempangan",
  },
  {
    id: 52,
    name: "SD Negeri Bontolempangan",
    type: "sdn",
    studentCount: 72,
    teacherCount: 20,
    totalParticipants: 48,
    districtId: "bontolempangan",
  },
  {
    id: 53,
    name: "SD Inpres Bontolempangan",
    type: "sdi",
    studentCount: 58,
    teacherCount: 16,
    totalParticipants: 38,
    districtId: "bontolempangan",
  },
  {
    id: 54,
    name: "SMP Negeri 1 Bontolempangan",
    type: "smp",
    studentCount: 88,
    teacherCount: 24,
    totalParticipants: 66,
    districtId: "bontolempangan",
  },

  // Kecamatan Tompobulu
  {
    id: 55,
    name: "TK Pertiwi Tompobulu",
    type: "tk",
    studentCount: 31,
    teacherCount: 7,
    totalParticipants: 20,
    districtId: "tompobulu",
  },
  {
    id: 56,
    name: "SD Negeri Tompobulu",
    type: "sdn",
    studentCount: 82,
    teacherCount: 22,
    totalParticipants: 54,
    districtId: "tompobulu",
  },
  {
    id: 57,
    name: "SD Inpres Tompobulu",
    type: "sdi",
    studentCount: 65,
    teacherCount: 18,
    totalParticipants: 43,
    districtId: "tompobulu",
  },
  {
    id: 58,
    name: "SMP Negeri 1 Tompobulu",
    type: "smp",
    studentCount: 98,
    teacherCount: 27,
    totalParticipants: 74,
    districtId: "tompobulu",
  },

  // Kecamatan Biringbulu
  {
    id: 59,
    name: "TK Dharma Wanita Biringbulu",
    type: "tk",
    studentCount: 38,
    teacherCount: 9,
    totalParticipants: 25,
    districtId: "biringbulu",
  },
  {
    id: 60,
    name: "SD Negeri Biringbulu",
    type: "sdn",
    studentCount: 108,
    teacherCount: 29,
    totalParticipants: 72,
    districtId: "biringbulu",
  },
  {
    id: 61,
    name: "SD Inpres Biringbulu",
    type: "sdi",
    studentCount: 85,
    teacherCount: 23,
    totalParticipants: 56,
    districtId: "biringbulu",
  },
  {
    id: 62,
    name: "SMP Negeri 1 Biringbulu",
    type: "smp",
    studentCount: 135,
    teacherCount: 36,
    totalParticipants: 102,
    districtId: "biringbulu",
  },

  // Kecamatan Parigi
  {
    id: 63,
    name: "TK Islam Parigi",
    type: "tk",
    studentCount: 33,
    teacherCount: 8,
    totalParticipants: 21,
    districtId: "parigi",
  },
  {
    id: 64,
    name: "SD Negeri Parigi",
    type: "sdn",
    studentCount: 95,
    teacherCount: 26,
    totalParticipants: 63,
    districtId: "parigi",
  },
  {
    id: 65,
    name: "SD Inpres Parigi",
    type: "sdi",
    studentCount: 75,
    teacherCount: 20,
    totalParticipants: 50,
    districtId: "parigi",
  },
  {
    id: 66,
    name: "SMP Negeri 1 Parigi",
    type: "smp",
    studentCount: 122,
    teacherCount: 33,
    totalParticipants: 92,
    districtId: "parigi",
  },

  // Kecamatan Bontonompo
  {
    id: 67,
    name: "TK Pembina Bontonompo",
    type: "tk",
    studentCount: 48,
    teacherCount: 12,
    totalParticipants: 32,
    districtId: "bontonompo",
  },
  {
    id: 68,
    name: "SD Negeri Bontonompo",
    type: "sdn",
    studentCount: 138,
    teacherCount: 36,
    totalParticipants: 92,
    districtId: "bontonompo",
  },
  {
    id: 69,
    name: "SD Inpres Bontonompo",
    type: "sdi",
    studentCount: 105,
    teacherCount: 28,
    totalParticipants: 70,
    districtId: "bontonompo",
  },
  {
    id: 70,
    name: "SMP Negeri 1 Bontonompo",
    type: "smp",
    studentCount: 172,
    teacherCount: 45,
    totalParticipants: 132,
    districtId: "bontonompo",
  },

  // Kecamatan Bontonompo Selatan
  {
    id: 71,
    name: "TK Aisyiyah Bontonompo Selatan",
    type: "tk",
    studentCount: 29,
    teacherCount: 7,
    totalParticipants: 19,
    districtId: "bontonompo_selatan",
  },
  {
    id: 72,
    name: "SD Negeri Bontonompo Selatan",
    type: "sdn",
    studentCount: 78,
    teacherCount: 21,
    totalParticipants: 52,
    districtId: "bontonompo_selatan",
  },
  {
    id: 73,
    name: "SD Inpres Bontonompo Selatan",
    type: "sdi",
    studentCount: 62,
    teacherCount: 17,
    totalParticipants: 41,
    districtId: "bontonompo_selatan",
  },
  {
    id: 74,
    name: "SMP Negeri 1 Bontonompo Selatan",
    type: "smp",
    studentCount: 92,
    teacherCount: 25,
    totalParticipants: 70,
    districtId: "bontonompo_selatan",
  },
];

// Helper Functions
export function getSchoolsByDistrict(districtId: string): SchoolData[] {
  if (districtId === "all") return schools;
  return schools.filter((school) => school.districtId === districtId);
}

export function getDistrictStats(districtId: string): DistrictStats {
  const districtSchools =
    districtId === "all" ? schools : getSchoolsByDistrict(districtId);
  const district = districts.find((d) => d.id === districtId);

  return {
    districtId,
    districtName:
      districtId === "all" ? "Semua Kecamatan" : district?.name || "",
    totalSchools: districtSchools.length,
    totalTK: districtSchools.filter((s) => s.type === "tk").length,
    totalSDN: districtSchools.filter((s) => s.type === "sdn").length,
    totalSDI: districtSchools.filter((s) => s.type === "sdi").length,
    totalSMP: districtSchools.filter((s) => s.type === "smp").length,
    totalStudents: districtSchools.reduce((sum, s) => sum + s.studentCount, 0),
    totalTeachers: districtSchools.reduce((sum, s) => sum + s.teacherCount, 0),
    totalParticipants: districtSchools.reduce(
      (sum, s) => sum + s.totalParticipants,
      0
    ),
  };
}

export function getAllDistrictsStats(): DistrictStats[] {
  return [
    getDistrictStats("all"),
    ...districts.map((d) => getDistrictStats(d.id)),
  ];
}

export function searchSchools(
  query: string,
  districtId: string = "all",
  schoolType: string = "all"
): SchoolData[] {
  let filteredSchools = getSchoolsByDistrict(districtId);

  if (schoolType !== "all") {
    filteredSchools = filteredSchools.filter((s) => s.type === schoolType);
  }

  if (query.trim()) {
    const searchTerm = query.toLowerCase();
    filteredSchools = filteredSchools.filter((s) =>
      s.name.toLowerCase().includes(searchTerm)
    );
  }

  return filteredSchools;
}

// Export default object with all utilities
export default {
  districts,
  schools,
  getSchoolsByDistrict,
  getDistrictStats,
  getAllDistrictsStats,
  searchSchools,
};
