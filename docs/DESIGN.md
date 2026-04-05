# DESIGN.md

디자인 시스템의 설계 원칙과 문서 구조를 정의한다.

## 문서 구조

```
docs/
  design-docs/          # 설계 문서 (컨벤션, 패턴)
    index.md             # 설계 문서 목차
    component-pattern.md # 컴포넌트 아키텍처 패턴
    styling-rules.md     # 스타일링 규칙
    storybook-rules.md   # Storybook 규칙
  exec-plans/           # 실행 계획
    active/              # 진행 중인 계획
    completed/           # 완료된 계획
  references/           # 외부 참조 문서
```

## 설계 원칙

1. **Colocation**: 컴포넌트와 관련된 모든 파일(스타일, 스토리, 테스트)은 같은 폴더에 위치한다
2. **최소 의존성**: 직접 구현 가능한 것은 외부 라이브러리에 의존하지 않는다
3. **일관성**: 모든 컴포넌트는 동일한 패턴을 따른다
4. **접근성**: 모든 인터랙티브 컴포넌트는 ARIA, 키보드 인터랙션을 지원한다
