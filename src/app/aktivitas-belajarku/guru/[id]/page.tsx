// app/aktivitas-belajarku/guru/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Calendar,
  LogOut,
  GraduationCap,
  FileText,
  BarChart,
} from "lucide-react";
import type { User } from "@/lib/authData";

const GuruDashboard = () => {
  const router = useRouter();
  const params = useParams();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Ambil data user dari localStorage
    const userStr = localStorage.getItem("currentUser");
    if (!userStr) {
      router.push("/aktivitas-belajarku");
      return;
    }

    const user: User = JSON.parse(userStr);

    // Validasi role dan ID
    if (user.role !== "guru" || user.id !== params.id) {
      router.push("/aktivitas-belajarku");
      return;
    }

    setCurrentUser(user);
  }, [params.id, router]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/aktivitas-belajarku");
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-950">
                  {currentUser.name}
                </h1>
                <p className="text-sm text-slate-600">{currentUser.subject}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              Keluar
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Selamat Datang, {currentUser.name}!
            </h2>
            <p className="text-blue-100">
              Anda login sebagai Guru di {currentUser.schoolName}
            </p>
            <Badge className="mt-3 bg-white text-blue-600 hover:bg-white">
              {currentUser.subject}
            </Badge>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total Kelas</p>
                  <h3 className="text-3xl font-bold text-blue-950">3</h3>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Users className="text-blue-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total Siswa</p>
                  <h3 className="text-3xl font-bold text-blue-950">87</h3>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Materi Aktif</p>
                  <h3 className="text-3xl font-bold text-blue-950">12</h3>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <CardTitle className="text-lg">Kelola Materi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Upload dan kelola materi pembelajaran untuk siswa
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                <FileText className="text-green-600" size={24} />
              </div>
              <CardTitle className="text-lg">Buat Tugas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Buat dan kelola tugas untuk siswa Anda
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-3">
                <BarChart className="text-purple-600" size={24} />
              </div>
              <CardTitle className="text-lg">Lihat Nilai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Monitor dan kelola nilai siswa
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
                <Users className="text-orange-600" size={24} />
              </div>
              <CardTitle className="text-lg">Daftar Siswa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Lihat dan kelola data siswa Anda
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                <Calendar className="text-red-600" size={24} />
              </div>
              <CardTitle className="text-lg">Jadwal Mengajar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Lihat jadwal mengajar Anda
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuruDashboard;
