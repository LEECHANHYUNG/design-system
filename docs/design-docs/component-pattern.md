# 컴포넌트 아키텍처 패턴

## 파일 구조 (Colocation)

모든 컴포넌트는 `packages/core/src/<name>/` 폴더에 다음 파일을 포함한다:

```
button/
  Button.tsx            # 컴포넌트 구현
  Button.styles.ts      # PandaCSS recipe
  Button.stories.tsx    # Storybook 스토리
  index.ts              # named export
```

## Props 패턴

variant props와 HTML attrs를 flat하게 합친다:

```ts
interface ButtonProps
  extends RenderProp<"button", ButtonState>,
    NonNullable<ButtonVariants> {}

// 사용
<Button variant="solid" size="md" onClick={handleClick}>
  Click me
</Button>
```

- `className`은 항상 `cx()`로 recipe 클래스와 합성한다
- React 19이므로 `forwardRef` 불필요, `ref`는 일반 prop

## 다형성 — render prop

`useRender` 훅(`_lib/useRender.ts`)을 사용하여 render prop 패턴을 지원한다:

```tsx
// JSX element 전달
<Button render={<a href="/" />}>Link Button</Button>

// Callback 전달
<Button render={(props, state) => (
  <a {...props}>
    {props.children}
    {state.disabled ? " (비활성)" : ""}
  </a>
)}>
  Link Button
</Button>
```

### render prop 처리 규칙
- `render`가 없으면 기본 HTML 엘리먼트 렌더링
- `render`가 JSX element면 해당 엘리먼트에 props를 merge
- `render`가 함수면 `(props, state)` 인자로 호출

## Compound 컴포넌트 — Dot Notation

멀티 슬롯 컴포넌트는 dot notation으로 서브컴포넌트를 제공한다:

```tsx
<Tabs.Root size="md">
  <Tabs.List>
    <Tabs.Tab value="one">Tab 1</Tabs.Tab>
    <Tabs.Tab value="two">Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="one">Content 1</Tabs.Panel>
  <Tabs.Panel value="two">Content 2</Tabs.Panel>
</Tabs.Root>
```

### 구현 규칙
- Root 컴포넌트에 variant props를 받고 React context로 서브컴포넌트에 전달
- 모든 서브컴포넌트를 하나의 `<Name>.tsx` 파일에 정의 (300줄 초과 시 분리)
- namespace object로 export: `export const Tabs = { Root, List, Tab, Panel }`

## 내부 유틸리티 (`_lib/`)

| 유틸리티 | 역할 |
|---------|------|
| `useRender` | render prop 처리 훅 (다형성) |
| `mergeProps` | 여러 props 객체를 안전하게 병합 (이벤트 핸들러 체이닝) |
| `composeRef` | 여러 ref를 하나로 합성 |

이 유틸리티는 `@base-ui/react`를 대체하여 직접 구현한 것이다.
외부에 export하지 않으며, `core` 패키지 내부에서만 사용한다.
