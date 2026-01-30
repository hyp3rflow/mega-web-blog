import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/data/posts";
import Markdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} - My Blog`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="mb-8">
        <Link
          href="/posts"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          &larr; 목록으로
        </Link>
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <time className="text-sm text-muted mt-2 block">{post.date}</time>
      </header>
      <div className="prose">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
