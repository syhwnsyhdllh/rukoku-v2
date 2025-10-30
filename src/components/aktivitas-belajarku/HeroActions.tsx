// components/aktivitas-belajarku/HeroActions.tsx
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

interface HeroActionsProps {
  onSchoolChange?: (school: string) => void;
}

export const HeroActions = ({ onSchoolChange }: HeroActionsProps) => {
  const [selectedSchool, setSelectedSchool] = useState<string>("all");

  const handleSchoolChange = (value: string) => {
    setSelectedSchool(value);
    onSchoolChange?.(value);
  };

  return (
    <div className="w-full sm:w-auto">
      {/* Dropdown Filter Sekolah */}
      <Select value={selectedSchool} onValueChange={handleSchoolChange}>
        <SelectTrigger className="w-full sm:w-64 h-12 rounded-xl bg-white border-none">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <SelectValue placeholder="Pilih Kecamatan" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kecamatan</SelectItem>
          <SelectItem value="bajeng">Bajeng</SelectItem>
          <SelectItem value="bajeng-barat">Bajeng Barat</SelectItem>
          <SelectItem value="barombong">Barombong</SelectItem>
          <SelectItem value="biringbulu">Biringbulu</SelectItem>
          <SelectItem value="bontolempangan">Bontolempangan</SelectItem>
          <SelectItem value="bontomarannu">Bontomarannu</SelectItem>
          <SelectItem value="bontonompo">Bontonompo</SelectItem>
          <SelectItem value="bontonomp-selatan">Bontonompo Selatan</SelectItem>
          <SelectItem value="bungaya">Bungaya</SelectItem>
          <SelectItem value="manuju">Manuju</SelectItem>
          <SelectItem value="pallangga">Pallangga</SelectItem>
          <SelectItem value="parangloe">Parangloe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
