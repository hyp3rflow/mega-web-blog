import Link from "next/link";
import { getAllPosts } from "@/data/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-3">
          안녕하세요.
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          개발과 기술에 대한 이야기를 기록하는 블로그입니다.
          <br />
          주로 웹 개발, TypeScript, React 등에 관한 글을 작성합니다.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/posts"
            className="text-accent hover:underline"
          >
            글 목록 보기 &rarr;
          </Link>
          <Link
            href="/about"
            className="text-accent hover:underline"
          >
            소개 보기 &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">최근 글</h2>
        <ul className="space-y-6">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="block group">
                <article>
                  <time className="text-sm text-muted">{post.date}</time>
                  <h3 className="text-lg font-medium mt-1 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted mt-1">{post.description}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
