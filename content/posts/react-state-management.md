---
title: "React 상태 관리 비교: Context vs Zustand vs Jotai"
date: "2025-01-05"
description: "React에서 자주 사용되는 상태 관리 라이브러리들을 비교해봅니다."
---

# React 상태 관리 비교

React 앱이 커지면 상태 관리가 중요해집니다. 대표적인 세 가지 방법을 비교해보겠습니다.

## React Context API

React에 내장된 상태 공유 메커니즘입니다.

**장점:**
- 별도 라이브러리 설치 불필요
- React 공식 API
- 간단한 상태에 적합

**단점:**
- 리렌더링 최적화가 어려움
- Provider 중첩이 깊어질 수 있음

## Zustand

최소한의 API를 제공하는 경량 상태 관리 라이브러리입니다.

```typescript
import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

**장점:**
- 매우 간단한 API
- Provider 불필요
- 좋은 TypeScript 지원

## Jotai

원자(atom) 기반의 상태 관리 라이브러리입니다.

```typescript
import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**장점:**
- 세밀한 리렌더링 제어
- 파생 상태 처리가 직관적
- React Suspense와 자연스럽게 통합

## 어떤 것을 선택해야 할까?

| 기준 | Context | Zustand | Jotai |
|------|---------|---------|-------|
| 러닝 커브 | 낮음 | 낮음 | 보통 |
| 번들 크기 | 0 | ~1KB | ~2KB |
| 리렌더링 최적화 | 어려움 | 쉬움 | 쉬움 |
| 복잡한 상태 | 부적합 | 적합 | 적합 |

> 프로젝트의 복잡도와 팀의 선호도에 맞게 선택하는 것이 가장 중요합니다.
