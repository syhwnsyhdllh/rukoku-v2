"use client";
import { useState } from "react";
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
  onDistrictChange?: (districtId: string) => void;
}

export const HeroActions = ({ onDistrictChange }: HeroActionsProps) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    onDistrictChange?.(value);
  };

  return (
    <div className="w-full sm:w-auto">
      {/* Dropdown Filter Sekolah */}
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
