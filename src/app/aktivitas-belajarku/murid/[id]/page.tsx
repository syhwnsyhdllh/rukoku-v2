// app/aktivitas-belajarku/murid/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Trophy,
  Calendar,
  LogOut,
  BookMarked,
  FileText,
  Award,
  Clock,
} from "lucide-react";
import type { User } from "@/lib/authData";

const MuridDashboard = () => {
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
    if (user.role !== "murid" || user.id !== params.id) {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <BookMarked className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-950">
                  {currentUser.name}
                </h1>
                <p className="text-sm text-slate-600">{currentUser.class}</p>
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
        <Card className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Selamat Datang, {currentUser.name}!
            </h2>
            <p className="text-purple-100">
              Anda login sebagai Murid di {currentUser.schoolName}
            </p>
            <Badge className="mt-3 bg-white text-purple-600 hover:bg-white">
              {currentUser.class}
            </Badge>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Rata-rata Nilai</p>
                  <h3 className="text-3xl font-bold text-blue-950">85</h3>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Award className="text-blue-600" size={24} />
                </div>
              </div>
              <Progress value={85} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Tugas Selesai</p>
                  <h3 className="text-3xl font-bold text-blue-950">12/15</h3>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <FileText className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">
                    Materi Dipelajari
                  </p>
                  <h3 className="text-3xl font-bold text-blue-950">24</h3>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Poin</p>
                  <h3 className="text-3xl font-bold text-blue-950">450</h3>
                </div>
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Menu */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-blue-950 mb-4">
              Menu Pembelajaran
            </h3>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Materi Pelajaran</CardTitle>
                    <p className="text-sm text-slate-600">
                      Akses semua materi pembelajaran
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <FileText className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tugas & Kuis</CardTitle>
                    <p className="text-sm text-slate-600">
                      Lihat dan kerjakan tugas Anda
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Award className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Nilai & Rapor</CardTitle>
                    <p className="text-sm text-slate-600">
                      Monitor perkembangan nilai Anda
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <Trophy className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Prestasi & Penghargaan
                    </CardTitle>
                    <p className="text-sm text-slate-600">
                      Lihat pencapaian dan badge Anda
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-950 mb-4">
              Aktivitas Terbaru
            </h3>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock size={18} className="text-blue-600" />
                  Tugas Mendatang
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-4 border-red-500 pl-3">
                  <p className="font-medium text-sm">Matematika - Kuis Bab 5</p>
                  <p className="text-xs text-slate-600">
                    Deadline: 3 hari lagi
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3">
                  <p className="font-medium text-sm">
                    Bahasa Indonesia - Essay
                  </p>
                  <p className="text-xs text-slate-600">
                    Deadline: 5 hari lagi
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium text-sm">IPA - Laporan Praktikum</p>
                  <p className="text-xs text-slate-600">
                    Deadline: 1 minggu lagi
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar size={18} className="text-purple-600" />
                  Jadwal Hari Ini
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">07:00 - 08:30</span>
                  <Badge variant="secondary">Matematika</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">08:30 - 10:00</span>
                  <Badge variant="secondary">B. Indonesia</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">10:15 - 11:45</span>
                  <Badge variant="secondary">IPA</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuridDashboard;
