# 하네스 구축 실행 계획

## 상태: 진행 중

## 목표

디자인 시스템 컴포넌트 개발을 위한 일관된 하네스 구축

## Phase 1: 패키지 리팩토링
1. [ ] `packages/core` → `packages/styled`로 이름 변경
2. [ ] `packages/styled`에서 Button 소스 제거, 유틸리티만 re-export
3. [ ] `packages/styled/panda.config.mjs` include 확장
4. [ ] 새 `packages/core` 생성 (React 컴포넌트 패키지)
5. [ ] `packages/components` 내용 마이그레이션 후 제거

## Phase 2: 내부 유틸리티 구현
6. [ ] `_lib/useRender.ts` — render prop 처리 훅
7. [ ] `_lib/mergeProps.ts` — props 병합 유틸리티
8. [ ] `_lib/composeRef.ts` — ref 합성 유틸리티

## Phase 3: Button 레퍼런스 구현
9. [ ] `Button.styles.ts` — cva recipe
10. [ ] `Button.tsx` — useRender + recipe 통합
11. [ ] `Button.stories.tsx` — 필수 스토리
12. [ ] Storybook 설정 이전

## Phase 4: Tooltip 마이그레이션
13. [ ] `Tooltip.styles.ts` — cva recipe
14. [ ] `Tooltip.tsx` — @floating-ui/react + useRender
15. [ ] `Tooltip.stories.tsx` — 필수 스토리

## Phase 5: 빌드 검증
16. [ ] `pnpm build` 정상 동작
17. [ ] `pnpm storybook` 정상 동작
