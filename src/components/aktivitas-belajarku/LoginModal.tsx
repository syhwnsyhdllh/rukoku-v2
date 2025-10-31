// components/aktivitas-belajarku/LoginModal.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SchoolData } from "@/lib/sekolahData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, User, AlertCircle, Loader2 } from "lucide-react";
import { authenticateUser } from "@/lib/authData";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName: string;
  schoolId: number; // ✅ Ubah ke number
}

export const LoginModal = ({
  isOpen,
  onClose,
  schoolName,
  schoolId,
}: LoginModalProps) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulasi loading
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Validasi input
    if (!username || !password) {
      setError("Username dan password harus diisi");
      setIsLoading(false);
      return;
    }

    // Authenticate user
    const user = authenticateUser(username, password);

    if (!user) {
      setError("Username atau password salah");
      setIsLoading(false);
      return;
    }

    // Validasi apakah user terdaftar di sekolah ini
    if (user.schoolId !== schoolId) {
      setError(`Anda tidak terdaftar di ${schoolName}`);
      setIsLoading(false);
      return;
    }

    // Simpan user data ke localStorage (atau bisa pakai context/state management)
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirect berdasarkan role
    if (user.role === "guru") {
      router.push(`/aktivitas-belajarku/guru/${user.id}`);
    } else {
      router.push(`/aktivitas-belajarku/murid/${user.id}`);
    }

    // Reset form
    setUsername("");
    setPassword("");
    setIsLoading(false);
    onClose();
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-950">
            Login ke Sekolah
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {schoolName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          {/* Username Input */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-slate-700">
              Username
            </Label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={18}
              />
              <Input
                id="username"
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 h-11"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-700">
              Password
            </Label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={18}
              />
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-11"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Info Kredensial Demo */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-800 font-medium mb-1">
              Demo Credentials:
            </p>
            <div className="text-xs text-blue-700 space-y-1">
              <p>
                <strong>Guru:</strong> pak.budi / guru123
              </p>
              <p>
                <strong>Murid:</strong> ani.siswa / murid123
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isLoading}
            >
              Batal
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Masuk"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
