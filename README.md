# 신입 개발자 포트폴리오 (React + TypeScript)

개발자 박지성의 포트폴리오 사이트 소스입니다. 실제 포트폴리오는 다음 링크에서 확인하실 수 있습니다: [parkjs.dev](https://www.parkjs.dev/).

## 🚀 주요 특징

- **UI**: Framer Motion 기반 부드러운 트랜지션과 인터랙션
- **다크모드 최적화**: Tailwind 커스텀 팔레트(`primary`, `dark`) 적용
- **컴포넌트 구조화**: `layout / sections / ui / common` 모듈화
- **타입 안정성**: `src/types/project.ts`로 프로젝트 데이터 엄격 타입 관리
- **프로젝트 상세 모달**: STAR/문제해결 기록까지 한 번에 확인

## 🛠️ 기술 스택

- React 19, TypeScript
- Tailwind CSS, @tailwindcss/typography
- Framer Motion, lucide-react, react-icons
- CRA(react-scripts)

## 📁 폴더 구조 개요

```
src/
├── components/
│   ├── common/        # SectionTitle, SocialLinks 등 공용 컴포넌트
│   ├── layout/        # Layout, Sidebar, Header, MobileHeader/Footer
│   ├── sections/      # About, Projects, Experience 등 섹션
│   └── ui/            # Modal, Navigation, ProjectList, ProjectDetailModal
├── data/              # 각 프로젝트/소셜 데이터 소스 (TS)
├── types/             # project 등 데이터 타입 정의
└── index.tsx, App.tsx, index.css
```

실제 섹션/컴포넌트 명은 코드와 동일하게 유지됩니다. 예: `src/components/sections/Projects.tsx`, `src/components/ui/ProjectDetailModal.tsx`.

## 🧩 데이터 모델

프로젝트 데이터는 `src/types/project.ts`의 `Project` 인터페이스를 따릅니다. STAR, 문제해결(문제/원인/해결/대안/결과)까지 구조화되어 있습니다.

예) `src/data/sellermap.ts`, `src/data/pugonargo.ts`, `src/data/npmhub.ts` 등에서 해당 타입으로 내역을 정의하고, `Projects.tsx`에서 배열로 렌더링합니다.

## ▶️ 로컬 실행

사전 요구사항: Node.js 18+, pnpm

```bash
pnpm install
pnpm start
```

빌드:

```bash
pnpm build
```

테스트:

```bash
pnpm test
```

## 🎯 커스터마이징 가이드

- **색상/테마**: `tailwind.config.js`의 `theme.extend.colors.primary`, `dark` 수정
- **소개/경험/프로젝트 텍스트**: `src/components/sections/*.tsx` 및 `src/data/*.ts` 수정
- **프로젝트 카드/상세**: `src/components/ui/ProjectList.tsx`, `ProjectDetailModal.tsx`
- **문제해결 카드**: `src/components/ui/projects/ProjectDetail/*`

## 🔗 링크

- 포트폴리오: [parkjs.dev](https://www.parkjs.dev/)

## 라이선스

본 레포지터리의 소스는 포트폴리오 데모 용도로 공개되어 있으며, 사용에 도움이 되었다면 저장소에 Star를 눌러주시면 감사하겠습니다.
