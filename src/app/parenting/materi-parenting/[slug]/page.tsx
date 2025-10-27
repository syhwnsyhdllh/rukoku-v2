import { notFound } from "next/navigation";
import DetailComponents from "@/components/DetailComponents";
import { materiData } from "@/lib/materiData";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function MateriDetailPage({ params }: PageProps) {
  const { slug } = params;
  const materi = materiData[slug];

  if (!materi) {
    notFound();
  }

  return (
    <DetailComponents
      category={materi.category}
      title={materi.title}
      date={materi.date}
      author={materi.author}
      featuredImage={materi.featuredImage}
      content={materi.content}
      type="materi"
      downloadUrl={materi.downloadUrl}
      downloadFileName={materi.downloadFileName}
      backUrl="/parenting/materi-parenting"
    />
  );
}
