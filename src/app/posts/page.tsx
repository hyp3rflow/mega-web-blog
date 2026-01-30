import Link from "next/link";
import { getAllPosts } from "@/data/posts";

export const metadata = {
  title: "Posts - My Blog",
  description: "블로그 글 목록",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Posts</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-border pb-8 last:border-0">
            <Link href={`/posts/${post.slug}`} className="block group">
              <article>
                <time className="text-sm text-muted">{post.date}</time>
                <h2 className="text-xl font-semibold mt-1 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted mt-2 leading-relaxed">
                  {post.description}
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
