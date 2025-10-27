// app/kreasiku/[slug]/page.tsx
import { notFound } from "next/navigation";
import DetailComponents from "@/components/DetailComponents";
import { kreasiData, getKreasiList } from "@/lib/kreasiData";
import { KreasikuGrid } from "@/components/KreasikuCard";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function KreasiDetailPage({ params }: PageProps) {
  const { slug } = params;
  const kreasi = kreasiData[slug];

  if (!kreasi) {
    notFound();
  }

  // Ambil 4 karya lainnya (selain yang sedang dibuka)
  const allKreasi = getKreasiList();
  const otherKreasi = allKreasi
    .filter((k) => k.slug !== slug) // Exclude karya yang sedang dibuka
    .slice(0, 4); // Ambil 4 karya pertama

  return (
    <>
      <DetailComponents
        school={kreasi.school}
        title={kreasi.title}
        date={kreasi.date}
        author={kreasi.author}
        class={kreasi.class}
        media={kreasi.media}
        content={kreasi.content}
        type="kreasi"
        backUrl="/kreasiku"
      />

      {/* Section Karya Lainnya */}
      {otherKreasi.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 ">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
              Karya Lainnya
            </h2>
            <p className="text-gray-600">
              Jelajahi karya-karya menarik lainnya dari siswa-siswa kami
            </p>
          </div>

          <KreasikuGrid kreasis={otherKreasi} />
        </section>
      )}
    </>
  );
}
