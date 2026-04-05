# ARCHITECTURE.md

## 패키지 구조

```
packages/
  styled/                  # @design-system/styled
    panda.config.mjs       # PandaCSS 설정
    styled-system/          # PandaCSS 생성물 (gitignore)
    src/
      index.ts              # css, cx, cva, sva, patterns, tokens re-export

  core/                    # @design-system/core
    .storybook/             # Storybook 설정
    src/
      _lib/                 # 내부 유틸리티
        useRender.ts        # render prop 다형성 훅
        mergeProps.ts       # props 병합
        composeRef.ts       # ref 합성
        index.ts
      button/               # 컴포넌트별 colocation
        Button.tsx
        Button.styles.ts
        Button.stories.tsx
        index.ts
      tooltip/
        Tooltip.tsx
        Tooltip.styles.ts
        Tooltip.stories.tsx
        index.ts
      ...
      index.ts              # barrel export
```

## 패키지 역할

### `@design-system/styled`
- PandaCSS 설정 및 빌드
- styled-system 생성물 관리
- `css`, `cx`, `cva`, `sva` 함수 export
- layout patterns (`hstack`, `vstack`, `flex`, `grid` 등) export
- design tokens export
- **React 컴포넌트를 포함하지 않는다**

### `@design-system/core`
- 모든 React 컴포넌트
- 컴포넌트별 PandaCSS recipe (`.styles.ts`)
- Storybook 스토리
- 내부 유틸리티 (`_lib/`)
- `@design-system/styled`에서 스타일 유틸리티를 import

## 의존성 방향

```
core ──→ styled ──→ @pandacss/dev
core ──→ @floating-ui/react (포지셔닝)
core ──→ react, react-dom
```

- `core`는 `styled`에 의존한다
- `styled`는 `core`에 의존하지 않는다
- `@base-ui/react`는 사용하지 않는다 (직접 구현)

## 빌드 파이프라인

```
pnpm build
  └─ turbo run build
       ├─ styled: panda codegen → styled-system/ 생성
       └─ core: tsc --noEmit (타입 체크, styled 빌드 후)
```
