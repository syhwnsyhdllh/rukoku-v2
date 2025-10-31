import { useState } from "react";
import {
  Search,
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
import { getSchoolsByDistrict, type SchoolData } from "@/lib/sekolahData";

interface SchoolTableProps {
  data?: SchoolData[];
  districtId?: string;
}

const SchoolTable = ({ data, districtId = "all" }: SchoolTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const schoolData = data || getSchoolsByDistrict(districtId);

  // Filter data berdasarkan search dan type
  const filteredData = schoolData.filter((school) => {
    const matchesSearch = school.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || school.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Pagination calculations
  const itemsPerPageNum = parseInt(itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPageNum);
  const startIndex = (currentPage - 1) * itemsPerPageNum;
  const endIndex = startIndex + itemsPerPageNum;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Reset ke halaman 1 saat search atau filter berubah
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
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
    <div className="w-full min-h-screen py-8 md:py-16 xl:px-4 lg:px-20 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
            Data Sekolah
          </h1>
          <p className="text-slate-600 mt-1 text-sm md:text-base">
            Kelola dan pantau data sekolah secara efisien
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Cari berdasarkan nama sekolah"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-5 max-w-md rounded-xl "
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-full md:w-[180px] py-5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                <SelectValue placeholder="Semua Sekolah" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Sekolah</SelectItem>
                <SelectItem value="tk">TK/PAUD</SelectItem>
                <SelectItem value="sdn">SD Negeri</SelectItem>
                <SelectItem value="sdi">SD Inpres</SelectItem>
                <SelectItem value="smp">SMP</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={itemsPerPage}
              onValueChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full md:w-[160px] py-5 rounded-xl">
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

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden lg:block">
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
                          <div className="flex flex-col gap-1">
                            <h3 className="text-md font-medium text-blue-600 cursor-pointer hover:text-blue-700">
                              {school.name}
                            </h3>
                          </div>
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
        </div>

        {/* Mobile Card View - Hidden on desktop */}
        <div className="lg:hidden space-y-4">
          {currentData.length > 0 ? (
            currentData.map((school, index) => (
              <Card
                key={school.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Header with number and name */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-slate-700">
                            {startIndex + index + 1}.
                          </span>
                          <h3 className="text-md lg:text-lg font-semibold text-blue-600 cursor-pointer hover:text-blue-700">
                            {school.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                          <Users size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Siswa</p>
                          <p className="text-sm font-semibold text-slate-700">
                            {school.studentCount}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                          <UserCheck size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Siswi</p>
                          <p className="text-sm font-semibold text-slate-700">
                            {school.teacherCount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                            <GraduationCap
                              size={16}
                              className="text-purple-600"
                            />
                          </div>
                          <span className="text-xs text-slate-500">
                            Total Peserta Didik
                          </span>
                        </div>
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                          {school.totalParticipants} Peserta
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-slate-500">
                Tidak ada data yang ditemukan
              </CardContent>
            </Card>
          )}
        </div>

        {/* Pagination Card */}
        {filteredData.length > 0 && (
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Info */}
                <div className="text-xs md:text-sm text-slate-600">
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
                    className="h-8 w-8 md:h-10 md:w-10"
                  >
                    <ChevronLeft size={16} className="md:w-5 md:h-5" />
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
                        className={`min-w-8 h-8 md:min-w-9 md:h-10 text-xs md:text-sm ${
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
                    className="h-8 w-8 md:h-10 md:w-10"
                  >
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
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
