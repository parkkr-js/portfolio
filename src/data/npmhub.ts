import type { Project } from "../types/project";

export const npmHubProject: Project = {
  slug: "npm-hub",
  title: "기존 npm 사이트를 개선할 수 있을까?",
  subtitle: "npm 패키지 검색·비교·평가 플랫폼",
  serviceName: "npm.hub",
  period: "2024.12 - 2025.02",
  position: "Frontend Developer",
  description:
    "초보 개발자가 설치 전 패키지의 신뢰성과 인기도를 판단하기 어려운 문제를 해결하기 위해, 다운로드·GitHub·트렌드·검색 결과를 통합해 한 화면에서 비교·선택할 수 있도록 만든 웹앱.",
  image: "/asset/img/project2.webp",
  technologies: [
    "Next.js",
    "TypeScript",
    "Recoil",
    "Tailwind CSS + shadcn/ui",
    "Axios",
    "Recharts",
    "React Markdown",
    "use-debounce",
    "google-trends-api"
  ],
  github: "https://github.com/parkkr-js/npm-hub",
  githubPrivate: false,
  external: "https://npm-hub.vercel.app/",

  // Background
  background: [
    "*기존 npm 사이트만으로는 설치 전 패키지의 활용도·신뢰성(인기도, 최근성, 실제 사례)을 파악하기 어려움*",
    "*다운로드, GitHub 스타, 검색 트렌드, 웹 검색 결과가 분절되어 판단 비용이 큼*"
  ],

  // Key Feature
  keyFeatures: [
    "*설치 전 판단에 필요한 핵심 신호(다운로드·스타·트렌드·검색 사례)를 한 화면에서 비교 가능하게 통합*",
    "*정렬·필터·배지로 후보군의 맥락을 명확히 제공해 선택 비용을 낮춤*",
  ],

  // Architecture
  architecture: [
    "Next.js 14 App Router 기반 단일 리포지토리 구조",
    "페이지 단위 서버 컴포넌트 + 기능 단위 클라이언트 컴포넌트 혼합"
  ],

  // Stack
  stackDetail: [
    "*Next.js 14*(App Router, Streaming SSR): **서버 렌더**와 **스트리밍**으로 초기 표시 시간 개선",
    "*Recoil*: 간단한 전역 상태와 강력한 selector로 파생 상태 계산·메모이제이션 용이",
    "*TypeScript*: 타입 안정성 확보",
    "*Tailwind + shadcn/ui*: 일관된 디자인 토큰과 빠른 UI 조립",
  ],

  // Result
  results: [
    "*설치 전 판단에 필요한 지표와 실제 사례를 단일 화면에서 제공하여 탐색 뎁스 감소*",
    "*정렬·필터·배지로 후보군 비교가 직관화되어 선택 시간 단축*"
  ],

  // Problem Solving
  problemSolving: [
    {
      problem: "**동일 검색어 재조회 시 불필요한 네트워크 왕복으로 지연·리소스 낭비**",
      solution:
        "커스텀 CacheManager로 자동완성/검색/상세 요청을 LRU·TTL 캐싱, 캐시 히트 시 Promise 즉시 반환"
    },
    {
      problem: "**정렬 시 파생 로직의 중복 계산**",
      solution:
        "Recoil selector로 파생 상태 계산을 메모이제이션, 불필요 렌더와 계산량 감소"
    },
    {
      problem: "**초기 로딩 블로킹으로 체감 속도 저하**",
      solution:
        "React Suspense + Streaming SSR + Skeleton으로 핵심 UI 우선 노출, 나머지 점진 로딩"
    }
  ],

  // CurrentStatus
  currentStatus: "배포 완료 및 Google Search Console 등록",

  // Insights
  insights: [
    "*외부 API 의존 한계: 본 서비스는 NPM/GitHub/Google 등 외부 API에 전적으로 의존하므로 제공처 장애·스키마 변경·레이트 리밋·지연 변동 시 기능 저하/중단 가능성이 있음. 근본적으로 제공처 가용성과 정책 변화에 종속되는 한계를 체감했고 이를 전제로 한 설계 전략의 필요성을 배움*",
    "*NextJS의 장점을 경험해보기위한 프로젝트로 시작하여서 문제정의와 타겟유저가 명확하지않았음. 결국 사용자가 있는 서비스를 위해서는 기술스택이 아니라 정확한 문제정의와 사용자의 painpoint를 잡는 것이 중요한 것을 배움*"
  ]
};