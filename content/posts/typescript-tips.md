---
title: "TypeScript 실용 팁 모음"
date: "2025-01-10"
description: "TypeScript를 더 효과적으로 사용하기 위한 실용적인 팁들을 정리했습니다."
---

# TypeScript 실용 팁 모음

TypeScript를 실무에서 사용하면서 유용했던 패턴과 팁들을 공유합니다.

## 1. 유틸리티 타입 활용하기

TypeScript는 다양한 내장 유틸리티 타입을 제공합니다.

```typescript
// Partial - 모든 속성을 선택적으로
interface User {
  name: string;
  email: string;
  age: number;
}

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}

// Pick - 특정 속성만 선택
type UserPreview = Pick<User, "name" | "email">;

// Omit - 특정 속성 제외
type UserWithoutAge = Omit<User, "age">;
```

## 2. 타입 가드 패턴

런타임에서 타입을 안전하게 좁히는 방법입니다.

```typescript
interface Cat {
  type: "cat";
  meow(): void;
}

interface Dog {
  type: "dog";
  bark(): void;
}

type Animal = Cat | Dog;

function handleAnimal(animal: Animal) {
  if (animal.type === "cat") {
    animal.meow(); // Cat으로 추론됨
  } else {
    animal.bark(); // Dog으로 추론됨
  }
}
```

## 3. const assertion

`as const`를 사용하면 리터럴 타입으로 추론됩니다.

```typescript
const colors = ["red", "green", "blue"] as const;
// readonly ["red", "green", "blue"]

type Color = (typeof colors)[number];
// "red" | "green" | "blue"
```

## 마무리

TypeScript의 타입 시스템을 잘 활용하면 런타임 에러를 줄이고 개발자 경험을 크게 향상시킬 수 있습니다.
