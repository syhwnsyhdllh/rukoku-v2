"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { districts } from "@/lib/sekolahData";

interface HeroActionsProps {
  selectedDistrict: string; // ✅ Tambahkan ini
  onDistrictChange?: (districtId: string) => void;
}

export const HeroActions = ({
  selectedDistrict, // ✅ Tambahkan ini
  onDistrictChange,
}: HeroActionsProps) => {
  // ❌ HAPUS state lokal ini (karena sudah di parent):
  // const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

  const handleDistrictChange = (value: string) => {
    // ❌ HAPUS: setSelectedDistrict(value);
    // ✅ Langsung panggil callback ke parent
    onDistrictChange?.(value);
  };

  return (
    <div className="w-full sm:w-auto">
      {/* Dropdown Filter Kecamatan */}
      <Select value={selectedDistrict} onValueChange={handleDistrictChange}>
        <SelectTrigger className="w-full sm:w-64 h-12 rounded-xl bg-white border-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <SelectValue placeholder="Pilih Kecamatan" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kecamatan</SelectItem>
          {districts.map((district) => (
            <SelectItem key={district.id} value={district.id}>
              {district.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
