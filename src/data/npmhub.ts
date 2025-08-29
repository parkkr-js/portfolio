import { Project } from "../types/project";

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
    "Next.js 14 (App Router, Streaming SSR)",
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

  star: {
    situation: [
      "기존 npm 사이트만으로는 설치 전 패키지의 활용도·신뢰성(인기도, 최근성, 실제 사례)을 파악하기 어려움",
      "다운로드, GitHub 스타, 검색 트렌드, 웹 검색 결과가 분절되어 판단 비용이 큼"
    ],
    task: [
      "설치 전 판단에 필요한 핵심 신호(다운로드·스타·트렌드·검색 사례)를 한 화면에서 비교 가능하게 통합",
      "정렬·필터·배지로 후보군의 맥락을 명확히 제공해 선택 비용을 낮춤",
      "초기 표시 시간을 단축하고 가독성을 높여 탐색 효율을 개선",
      "외부 API 변동성에도 사용자 경험이 유지되도록 오류 내성과 폴백을 설계"
    ],
    action: [
      "커스텀 CacheManager(LRU·TTL)로 자동완성/검색/상세의 Promise 캐싱, 동일 검색어 재조회 시 네트워크 왕복 회피",
      "use-debounce(300ms) + useTransition으로 타이핑 중 과호출 억제·입력 우선 반응성 유지",
      "Recoil atom/selector로 정렬·필터·배지(calculateBadges)·키워드 집계 파생 상태 메모이제이션",
      "Next.js 14(App Router) + React Suspense + Streaming SSR + 스켈레톤으로 핵심 화면 우선 노출",
      "NPM 다운로드 + GitHub 스타 + 검색 점수(로그 스케일·시간 가중)로 종합 점수(Calculate) 설계, Promise.all로 병렬 수집",
      "Google Trends/Google Search 결과를 서버 액션으로 연동, 이미지 프록시(route)로 썸네일 표시 안정화",
      "repo URL 부재 시 이름 기반 소유자/레포 추출(extractGitHubInfo) 및 오류 내성 처리로 안전한 폴백"
    ],
    result: [
      "설치 전 판단에 필요한 지표와 실제 사례를 단일 화면에서 제공하여 탐색 뎁스 감소",
      "동일 검색어 재조회 시 캐시 히트로 체감 지연 감소, 과호출 억제로 리소스 사용 절감",
      "초기 렌더 구간에서 핵심 콘텐츠를 먼저 스트리밍해 입력/스크롤 등 상호작용 프리즈 최소화",
      "정렬·필터·배지로 후보군 비교가 직관화되어 선택 시간 단축"
    ],
    stackReasons: [
      "Next.js 14(App Router, Streaming SSR): 서버 렌더와 스트리밍으로 초기 표시 시간 개선",
      "Recoil: 간단한 전역 상태와 강력한 selector로 파생 상태 계산·메모이제이션 용이",
      "TypeScript: 제네릭 기반 유틸(calculateBadges 등)로 타입 안정성·재사용성 확보",
      "Tailwind + shadcn/ui: 일관된 디자인 토큰과 빠른 UI 조립",
      "Axios + Promise.all: 외부 지표 병렬 수집으로 대기 시간 최소화",
      "Recharts + google-trends-api: 트렌드 데이터의 시각적 비교·이해도 향상"
    ]
  },

  problemSolving: [
    {
      problem: "동일 검색어 재조회 시 불필요한 네트워크 왕복으로 지연·리소스 낭비",
      solution:
        "커스텀 CacheManager로 자동완성/검색/상세 요청을 LRU·TTL 캐싱, 캐시 히트 시 Promise 즉시 반환"
    },
    {
      problem: "타이핑 중 과도한 API 호출로 비용 증가·UI 프리즈",
      solution:
        "use-debounce(300ms)로 호출 빈도 제한, useTransition으로 입력/포커스 등 상호작용 우선 처리"
    },
    {
      problem: "정렬·필터·배지·키워드 집계 등 파생 로직의 중복 계산",
      solution:
        "Recoil selector로 파생 상태 계산을 메모이제이션, 불필요 렌더와 계산량 감소"
    },
    {
      problem: "초기 로딩 블로킹으로 체감 속도 저하",
      solution:
        "React Suspense + Streaming SSR + Skeleton으로 핵심 UI 우선 노출, 나머지 점진 로딩"
    }
  ],

  currentStatus: "배포 완료 및 Google Search Console 등록",

  insights: [
    "외부 API 의존 한계: 본 서비스는 NPM/GitHub/Google 등 외부 API에 전적으로 의존하므로 제공처 장애·스키마 변경·레이트 리밋·지연 변동 시 기능 저하/중단 가능성이 있음. 캐싱·재시도(백오프)·fallback으로 완화했지만, 근본적으로 제공처 가용성과 정책 변화에 종속되는 한계를 체감했고 이를 전제로 한 설계·모니터링·운영 전략의 필요성을 배움"
  ]
};