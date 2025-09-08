import type { Project } from "../types/project";

export const pugoNargoProject: Project = {
  slug: "pugonargo",
  title: "엑셀 내용을 카카오톡으로 일일이 주고받는 문제를 해결할 수 있을까?",
  subtitle: "스프레드시트 연동 물류 정산·배차 자동화 시스템",
  serviceName: "푸고나르고 (PugoNargo)",
  period: "2025.06 - ",
  position: "Frontend Developer",
  description:
    "주식회사 푸고나르고 외주 프로젝트. 기존 스프레드시트를 그대로 사용하면서 정산·배차를 자동 수집/표시하여 수작업 전달 누락·지연을 해소",
  image: "/asset/img/푸고나르고로고.png",
  technologies: [
    "React",
    "TypeScript",
    "GitHub Actions",
    "Firebase (Firestore, Hosting, Cloud Functions)",
    "Google APIs (OAuth2, Drive, Sheets)",
    "TanStack Query"
  ],
  github: "https://github.com/parkkr-js/pugonargo",
  githubPrivate: false,
  external: "https://pugonargo-c652f.web.app/",

  // Background
  background: [
    "*관리자·기사 간 정보 전달이 수작업(엑셀 요약→카카오톡 전송) 위주라 누락·지연·반복 업무가 빈번*",
    "*관리자가 기사별 운행을 직접 집계·계산해야 하고, 기사님들도 본인 정산/배차 현황을 스스로 확인하기 어려움*",
    "*배차 조건·주의사항 전달이 비정형 채널(카카오톡)에 의존해 이력 추적과 표준화가 어려움*"
  ],

  // Key Feature
  keyFeatures: [
    "*스프레드시트 연동*: 관리자가 시트를 선택하면 시스템이 자동 수집·정규화하여 날짜별 저장",
    "*관리자 화면*: 날짜별 배차 테이블(매입처·차량·경로·회전수·메모·경고) 실시간 확인",
    "*기사 화면*: 본인 차량번호·매입처 기준의 배차/정산 내역을 즉시 확인",
    "*기간별 통계*: 운행·연료·수리 지표 자동 합산 및 요약"
  ],

  // Architecture
  architecture: [
    "*컴포넌트(UI) · 훅(상태/비즈니스) · 서비스(API 연동) 분리*",
  ],

  // Stack
  stackDetail: [
    "*React + TypeScript*: 타입 안전성과 컴포넌트 재사용으로 유지보수성 확보",
    "*TanStack Query*: 날짜 단위 서버 상태 캐시/무효화로 **동일 날짜 재조회 최소화**",
    "*Git Action*: 브랜치 푸시 시 자동 빌드 → Firebase Hosting 배포",
    "*Google Drive/Sheets API*: 기존 스프레드시트 자산을 그대로 활용, merges/note 메타로 정확 파싱",
    "*Firebase Hosting/Functions*: 빠른 배포와 간단한 백엔드 로직 오케스트레이션"
  ],

  // Result
  results: [
    "스프레드시트 입력만으로 관리자·기사가 웹에서 동일 데이터를 즉시 확인, 카카오톡 수작업 전달의 누락/지연 감소",
    "날짜 단일 문서 스키마와 upsert·증분 집계로 불필요한 재조회 제거, Read 비용 절감",
    "병합·메모·경계 처리로 배차 데이터의 정확성과 일관성 향상"
  ],

  // Problem Solving
  problemSolving: [
    {
      problem: "**역할(관리자/기사)에 따라 서로 다른 화면과 접근 제어가 필요**",
      cause: "한 웹앱 내에서 관리자 화면(전체 배차/정산 관리)과 기사님 화면(본인 데이터 확인/입력)을 구분해야 하며, 미인증/권한 불일치 접근 시 안전한 차단·리다이렉트가 필요",
      solution: [
        "**HOC** 방식으로 권한 가드 구현: `withAuth`(공통 인증 가드), `withAdminAuth`(관리자 전용 가드)를 라우트/레이아웃에 적용",
        "미인증 시 로그인 경로로 이동, 관리자 권한 없음 시 사용자용 경로로 안전 리다이렉트",
        "페이지 로직과 권한 로직을 분리하여 화면 코드의 복잡도와 중복 최소화"
      ],
      result: [
        "*접근 제어 일관성 향상과 예외 케이스(직접 URL 접근 등) 안전 차단*",
        "*역할 추가/변경 시에도 HOC 확장으로 영향 범위 최소화*"
      ]
    }
  ],

  // CurrentStatus
  currentStatus:
    "현재 주식회사 푸고나르고의 관리자와 약 200명의 기사님이 사용중입니다.",

  // Insights
  insights: [
    "*mysql 같은 관계형만 다루다 Firestore에서 시트당 2,000+행 Read 비용 이슈를 겪으며, 리소스를 줄일 수 있는 스키마 변경과 대안을 고민해 볼 수 있음*",
  ]
};