// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";
import DetailComponents from "@/components/DetailComponents";

// Generate static params untuk static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata untuk SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | RUKOKU",
      description: "Halaman yang Anda cari tidak ditemukan",
    };
  }

  return {
    title: `${post.title} | RUKOKU`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
    keywords: post.tags?.join(", "),
  };
}

// Main Page Component
export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  // Jika blog post tidak ditemukan, tampilkan 404
  if (!post) {
    notFound();
  }

  return (
    <DetailComponents
      category={post.category}
      title={post.title}
      date={post.date}
      author={post.author}
      featuredImage={post.featuredImage}
      content={post.content}
      type={post.type}
      downloadUrl={post.downloadUrl}
      downloadFileName={post.downloadFileName}
    />
  );
}
