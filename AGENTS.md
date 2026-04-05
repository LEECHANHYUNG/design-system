# AGENTS.md

이 파일은 AI 에이전트가 이 레포에서 작업할 때 따라야 할 규칙을 정의한다.

## 언어

- 코드 내 주석, 변수명, 타입명: 영어
- 커밋 메시지: 한국어, Conventional Commit (`feat: 버튼 컴포넌트 추가`)
- Storybook story name override: 한국어 허용
- 문서(docs/): 한국어

## Git 워크플로우

1. 새 기능 작업 시 반드시 **git worktree**를 사용하여 격리된 환경에서 작업한다
2. main 브랜치에서 직접 작업하지 않는다
3. 작업 완료 후 **PR을 생성**한다
4. 브랜치 네이밍: `feat/<기능명>`, `fix/<수정명>`, `chore/<작업명>`

```
# 워크플로우
main에서 worktree 생성 → 격리 환경에서 작업 → 커밋 → push → PR 생성
```

## 작업 전 필수 확인

1. `ARCHITECTURE.md`를 읽고 패키지 구조를 이해할 것
2. `docs/design-docs/` 하위 문서를 읽고 컨벤션을 따를 것
3. 기존 컴포넌트(button/)를 레퍼런스로 참고할 것

## 컴포넌트 추가 시 체크리스트

1. `packages/core/src/<name>/` 폴더 생성
2. `<Name>.styles.ts` — PandaCSS recipe (cva 또는 sva)
3. `<Name>.tsx` — 컴포넌트 구현 (useRender + recipe 통합)
4. `<Name>.stories.tsx` — 필수 스토리 (Default, Variants, Sizes, States)
5. `index.ts` — named export
6. `packages/core/src/index.ts`에 barrel export 추가
7. `pnpm build` 및 Storybook 확인

## 금지 사항

- `@base-ui/react` 사용 금지 (제거 예정, 직접 구현으로 대체)
- 인라인 CSS (`style={{...}}`) 지양 — PandaCSS 유틸리티 사용
- core 패키지 외부에 React 컴포넌트 작성 금지
- styled 패키지에 React 컴포넌트 작성 금지
