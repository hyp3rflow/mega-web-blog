export const metadata = {
  title: "About - My Blog",
  description: "자기소개",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">About</h1>

      {/* 이름 및 소개 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">최용욱</h2>
        <p className="text-muted leading-relaxed">
          안녕하세요! 웹 개발에 열정을 가진 소프트웨어 엔지니어입니다. 사용자
          경험을 개선하고 깔끔한 코드를 작성하는 것을 좋아합니다. 새로운 기술을
          배우고 이를 실제 프로젝트에 적용하는 과정을 즐깁니다.
        </p>
      </section>

      {/* 학력 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">학력</h2>
        <ul className="space-y-3">
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <p className="font-medium">OO대학교 컴퓨터공학과</p>
              <p className="text-sm text-muted">학사</p>
            </div>
            <span className="text-sm text-muted">2019 - 2023</span>
          </li>
        </ul>
      </section>

      {/* 기술 스택 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">기술 스택</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "HTML/CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-border rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "PostgreSQL", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-border rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "Vercel", "Figma"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-border rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">프로젝트</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-medium">개인 블로그</h3>
            <p className="text-sm text-muted mt-1">
              Next.js와 Tailwind CSS를 활용한 개인 블로그입니다. 마크다운 기반의
              포스트 작성과 정적 사이트 생성을 지원합니다.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                Next.js
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                TypeScript
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                Tailwind CSS
              </span>
            </div>
          </li>
          <li>
            <h3 className="font-medium">할 일 관리 앱</h3>
            <p className="text-sm text-muted mt-1">
              React와 Node.js를 사용한 풀스택 할 일 관리 애플리케이션입니다.
              사용자 인증, CRUD 기능, 실시간 동기화를 지원합니다.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                React
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                Node.js
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                MongoDB
              </span>
            </div>
          </li>
          <li>
            <h3 className="font-medium">날씨 대시보드</h3>
            <p className="text-sm text-muted mt-1">
              외부 API를 활용한 날씨 정보 대시보드입니다. 위치 기반 검색과 주간
              예보 기능을 제공합니다.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                React
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                REST API
              </span>
              <span className="text-xs px-2 py-0.5 bg-border rounded">
                Chart.js
              </span>
            </div>
          </li>
        </ul>
      </section>

      {/* 관심사 및 기타 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">관심사</h2>
        <ul className="space-y-2 text-muted">
          <li>웹 성능 최적화 및 접근성(a11y)</li>
          <li>오픈소스 기여</li>
          <li>클린 아키텍처 및 디자인 패턴</li>
          <li>DevOps 및 CI/CD 파이프라인</li>
          <li>UI/UX 디자인</li>
        </ul>
      </section>
    </div>
  );
}
