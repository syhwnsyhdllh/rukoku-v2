import { useState } from "react";
import {
  Search,
  ChevronDown,
  Users,
  UserCheck,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface SchoolData {
  id: number;
  name: string;
  studentCount: number;
  teacherCount: number;
  totalParticipants: number;
}

interface SchoolTableProps {
  data?: SchoolData[];
}

const SchoolTable = ({ data }: SchoolTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const defaultData: SchoolData[] = [
    {
      id: 1,
      name: "TK/PAUD Kartika 1",
      studentCount: 50,
      teacherCount: 10,
      totalParticipants: 20,
    },
    {
      id: 2,
      name: "TK/PAUD Kartika 2",
      studentCount: 30,
      teacherCount: 10,
      totalParticipants: 30,
    },
    {
      id: 3,
      name: "SD Negeri Mangasa",
      studentCount: 30,
      teacherCount: 20,
      totalParticipants: 40,
    },
    {
      id: 4,
      name: "SD Negeri Mangasa 1",
      studentCount: 40,
      teacherCount: 24,
      totalParticipants: 30,
    },
    {
      id: 5,
      name: "SD Inpres Mangasa",
      studentCount: 30,
      teacherCount: 20,
      totalParticipants: 40,
    },
    {
      id: 6,
      name: "SMP 4 Mangasa",
      studentCount: 20,
      teacherCount: 14,
      totalParticipants: 40,
    },
  ];

  const schoolData = data || defaultData;

  // Filter data berdasarkan search
  const filteredData = schoolData.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const itemsPerPageNum = parseInt(itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPageNum);
  const startIndex = (currentPage - 1) * itemsPerPageNum;
  const endIndex = startIndex + itemsPerPageNum;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Reset ke halaman 1 saat search berubah
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Generate page numbers untuk pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Data Sekolah</h1>
          <p className="text-slate-600 mt-1">
            Kelola dan pantau data sekolah secara efisien
          </p>
        </div>

        {/* Search and Filter Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Cari berdasarkan judul, penulis, atau sekolah..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <Select
                  value={selectedFilter}
                  onValueChange={setSelectedFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Semua Sekolah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Sekolah</SelectItem>
                    <SelectItem value="tk">TK/PAUD</SelectItem>
                    <SelectItem value="sd">SD</SelectItem>
                    <SelectItem value="smp">SMP</SelectItem>
                    <SelectItem value="sma">SMA</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={itemsPerPage}
                  onValueChange={(value) => {
                    setItemsPerPage(value);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 per halaman</SelectItem>
                    <SelectItem value="25">25 per halaman</SelectItem>
                    <SelectItem value="50">50 per halaman</SelectItem>
                    <SelectItem value="100">100 per halaman</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table Card */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                  <TableHead className="w-[60px] font-semibold text-slate-700">
                    No
                  </TableHead>
                  <TableHead className="font-semibold text-slate-700">
                    Nama Sekolah
                  </TableHead>
                  <TableHead className="font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      Jumlah Siswa
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <UserCheck size={16} className="text-green-600" />
                      Jumlah Siswi
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-purple-600" />
                      Total Peserta Didik
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.length > 0 ? (
                  currentData.map((school, index) => (
                    <TableRow key={school.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium text-slate-600">
                        {startIndex + index + 1}
                      </TableCell>
                      <TableCell>
                        <span className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer hover:underline">
                          {school.name}
                        </span>
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {school.studentCount} Siswa
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {school.teacherCount} Siswi
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                        >
                          {school.totalParticipants} Peserta Didik
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-12 text-slate-500"
                    >
                      Tidak ada data yang ditemukan
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination Card */}
        {filteredData.length > 0 && (
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Info */}
                <div className="text-sm text-slate-600">
                  Menampilkan{" "}
                  <span className="font-medium">{startIndex + 1}</span> -{" "}
                  <span className="font-medium">
                    {Math.min(endIndex, filteredData.length)}
                  </span>{" "}
                  dari{" "}
                  <span className="font-medium">{filteredData.length}</span>{" "}
                  data
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={20} />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex gap-1">
                    {getPageNumbers().map((page, index) => (
                      <Button
                        key={index}
                        variant={page === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() =>
                          typeof page === "number" && goToPage(page)
                        }
                        disabled={page === "..."}
                        className={`min-w-9 ${
                          page === "..."
                            ? "cursor-default hover:bg-transparent"
                            : ""
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SchoolTable;
