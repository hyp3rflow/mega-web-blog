---
title: "Next.js 시작하기"
date: "2025-01-15"
description: "Next.js의 기본 개념과 프로젝트 설정 방법을 알아봅니다."
---

# Next.js 시작하기

Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트 생성, API 라우트 등 다양한 기능을 제공합니다.

## 왜 Next.js인가?

- **서버 사이드 렌더링(SSR)**: SEO에 유리하고 초기 로딩 속도가 빠릅니다.
- **파일 기반 라우팅**: 디렉토리 구조만으로 라우팅이 설정됩니다.
- **API Routes**: 별도의 백엔드 없이 API를 만들 수 있습니다.
- **최적화**: 이미지, 폰트, 스크립트 최적화가 내장되어 있습니다.

## 프로젝트 생성

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## App Router

Next.js 13부터 도입된 App Router는 `app` 디렉토리를 사용합니다. 각 폴더가 URL 경로에 매핑되며, `page.tsx` 파일이 해당 경로의 페이지가 됩니다.

```
app/
├── layout.tsx    # 공통 레이아웃
├── page.tsx      # / 경로
├── about/
│   └── page.tsx  # /about 경로
└── posts/
    └── page.tsx  # /posts 경로
```

## 마무리

Next.js는 React 생태계에서 가장 인기 있는 프레임워크 중 하나입니다. 공식 문서를 참고하여 더 깊이 있는 내용을 학습해보세요.
