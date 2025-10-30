// components/kreasiku/CreateActivityModal.tsx
"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface CreateActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ActivityFormData) => Promise<void>;
}

export interface ActivityFormData {
  title: string;
  description: string;
  date: string;
  school: string;
}

export const CreateActivityModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreateActivityModalProps) => {
  const [formData, setFormData] = useState<ActivityFormData>({
    title: "",
    description: "",
    date: "",
    school: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({ title: "", description: "", date: "", school: "" });
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      // TODO: Show error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      school: value,
    }));
  };

  const handleClose = () => {
    if (!isSubmitting) {
      // Reset form when closing
      setFormData({ title: "", description: "", date: "", school: "" });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-950">
            Buat Aktivitas Baru
          </DialogTitle>
          <DialogDescription>
            Isi formulir di bawah ini untuk membuat aktivitas belajar baru.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Judul */}
          <div className="space-y-2">
            <Label htmlFor="title">
              Judul Aktivitas <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Contoh: Membaca Buku Cerita"
              required
              disabled={isSubmitting}
              className="rounded-xl"
            />
          </div>

          {/* Tanggal */}
          <div className="space-y-2">
            <Label htmlFor="date">
              Tanggal <span className="text-red-500">*</span>
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="rounded-xl"
            />
          </div>

          {/* Sekolah */}
          <div className="space-y-2">
            <Label htmlFor="school">
              Sekolah <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.school}
              onValueChange={handleSelectChange}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Pilih Sekolah" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sdn1">SDN 1 Makassar</SelectItem>
                <SelectItem value="sdn2">SDN 2 Makassar</SelectItem>
                <SelectItem value="sdn3">SDN 3 Makassar</SelectItem>
                <SelectItem value="smp1">SMP Negeri 1 Makassar</SelectItem>
                <SelectItem value="smp2">SMP Negeri 2 Makassar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="rounded-xl"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
