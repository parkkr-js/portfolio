import { Project } from "../types/project";

export const pardWebsiteProject: Project = {
  slug: "pard-website",
  title: "IT 연합 동아리 PARD 공식 홈페이지",
  subtitle: "동아리의 홈 · 소개 · 프로젝트 · 문의 · 리크루팅 · 뉴스 정보를 제공하는 반응형 웹 페이지",
  serviceName: "IT 연합 동아리 PARD 공식 홈페이지",
  period: "2023.04 - 2023.07",
  position: "Frontend Developer",
  description:
    "동아리의 홈 · 소개 · 프로젝트 · 문의 · 리크루팅 · 뉴스 정보를 제공하는 반응형 웹 페이지",
  image: "/asset/img/pard.png",
  technologies: [
    "React 18",
    "JavaScript",
    "Firebase",
    "Google Analytics",
    "Firebase Hosting",
    "Google Tag Manager",
    "react-router-sitemap"
  ],
  github: "https://github.com/Club-PARD/club-pard.github.io",
  githubPrivate: false,
  external: "https://we-pard.com/",
  star: {
    situation: [
      "동아리 공식 정보/프로젝트를 한 곳에서 제공하는 **반응형 웹** 필요",
      "SPA 기반 **부드러운 네비게이션**과 **애니메이션 품질** 요구",
      "**GA/GTM 추적** 및 **사이트맵 기반 SEO** 필요"
    ],
    task: [
      "모바일/데스크탑 **컴포넌트 분리 구조**와 **안정 라우팅** 설계",
      "Firebase Hosting/GitHub Pages로 **간단·재현 가능한 배포** 확립",
      "**트래킹 초기화**와 **사이트맵 자동화** 체계화"
    ],
    action: [
      "React Router로 페이지/디테일 라우트 구성 + `ScrollToTop` 적용",
      "react-responsive로 뷰포트 기준 모바일/웹 분기 렌더링",
      "styled-components로 컴포넌트 스코프 스타일링",
      "GTM/GA 초기화 및 pageview 전송 로직 구현",
      "react-router-sitemap 스크립트로 sitemap 생성, 커스텀 도메인 연결"
    ],
    result: [
      "홈/소개/프로젝트/문의/리크루팅/뉴스 **안정 제공**",
      "모바일/웹 **각 최적화 UI**로 사용성 향상",
      "커스텀 도메인 및 **배포 완료**, 기본 SEO/트래킹 체계 확보"
    ],
    stackReasons: [
      "React 18 & Router v6: 명시적 라우팅과 SPA 유지보수 용이",
      "styled-components: CSS 스코프/재사용성 확보",
      "react-responsive: 간결한 반응형 분기",
      "Firebase Hosting(rewrites): SPA 라우팅 호환, GH Pages: 간편 배포",
      "GA/GTM: 운영 분석·마케팅"
    ]
  }
};