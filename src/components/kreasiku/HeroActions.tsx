// components/kreasiku/HeroActions.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CreateActivityModal } from "./CreateActivityModal";

export const HeroActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitActivity = async (data: any) => {
    // Logic submit aktivitas baru
    console.log("Creating new activity:", data);
    // TODO: Implementasi API call
    // Example:
    // try {
    //   const response = await fetch('/api/activities', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });
    //   if (response.ok) {
    //     toast.success('Aktivitas berhasil dibuat!');
    //   }
    // } catch (error) {
    //   toast.error('Gagal membuat aktivitas');
    // }
  };

  return (
    <>
      <div className="w-full sm:w-auto">
        {/* Button Buat Aktivitas */}
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto h-12 rounded-xl bg-blue-950"
        >
          <Plus className="h-4 w-4 mr-2" />
          Buat Aktivitas
        </Button>
      </div>

      {/* Modal */}
      <CreateActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitActivity}
      />
    </>
  );
};
