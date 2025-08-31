import { Project } from "../types/project";

export const studentUnionAdminProject: Project = {
    slug: "hgu-student-union-admin",
    title: "한동대학교 총학생회 웹사이트",
    subtitle: "4개 학생자치기구 통합 자료실 관리 시스템",
    serviceName: "한동대학교 총학생회 웹사이트",
    period: "2023.06 - 2023.10",
    position: "Frontend Developer",
    description:
    "학생회 업데이트 확인 및 참여를 위한 웹 페이지",
    image: "/asset/img/project4.webp",
    technologies: [
      "React 18",
      "JavaScript",
      "AWS S3",
      "Styled-Components",
      "Material-UI",
      "aws-sdk",
      "CKEditor5",
      "Turndown",
      "ReactMarkdown",
      "Axios",
      "React Router",
      "Firebase Hosting"
    ],
    github: ["https://github.com/Club-PARD/HGU-Student-Union-admin", "https://github.com/Club-PARD/HGU-Student-Union-client"],
    githubPrivate: false,
    external: "",

    // Background
    background: [
      "4개 학생자치기구의 자료가 페이지·형식별로 분산되어 **일관된 관리/열람의 어려움**",
      "초기 **단순 텍스트 입력 기반** 문서 작성으로 **가독성·서식 통일 부족**",
      "운영자 입장에서 **파일 업로드/다운로드의 안정성**과 **사용자 입장에서 검색/페이지네이션 경험** 필요"
    ],

    // Key Features
    keyFeatures: [
      "관리자/사용자 페이지 분리와 4개 학생자치기구·카테고리별 권한/작업 흐름으로 통합 자료실 운영",
      "마크다운 기반 문서 작성·미리보기·열람 도입으로 서식 일관성과 가독성 향상",
      "드래그앤드롭 멀티 파일 업로드(진행률 표시, 파일명 충돌 방지) 및 안정적 다운로드 제공",
      "목록 탐색 최적화(제목·내용 검색, 카테고리 필터, 고정(핀) 노출, 10개 단위 페이지네이션)"
    ],

    // Stack
    stackDetail: [
      "React 18: 생태계/생산성 및 유지보수 용이성",
      "Redux: **확장 가능한 전역 상태 관리**와 예측 가능한 업데이트 흐름",
      "CKEditor5 + Turndown + ReactMarkdown: 작성-변환-렌더의 **일관 파이프라인**으로 가독성/포맷 통일",
      "AWS S3 + aws-sdk + react-dropzone: **확장성**과 **사용자 친화적 업로드 UX**",
      "react-table: **정렬/검색/페이지네이션**의 범용 테이블 도구",
      "date-fns: 가벼운 **날짜 유틸**로 필터/정렬 정확도 확보",
      "Styled-Components + MUI: **컴포넌트화된 스타일링**과 **일관된 UI 컨벤션**"
    ],

    // Result
    results: [
      "사용자 피드백(가독성 개선) 반영 후 **마크다운 기반 작성·열람 체계 도입**으로 작성/열람 효율 및 일관성 향상",
      "대용량/다중 업로드 시 **실패율 감소** 및 **작업 시간 단축**, 파일 관리 **신뢰성 향상**",
      "반응형 레이아웃과 검색/페이지네이션으로 **탐색 효율** 향상",
      "출시 후 6개월간 **버그 해결·안정성 강화·UI 일관성/접근성 보강**으로 운영 품질 개선"
    ],
  
    problemSolving: [
      {
        problem: "**(VoC)** 문서 가독성 및 서식 일관성 부족으로 인한 작성/열람 경험 저하",
        solution: "CKEditor5 도입 + Turndown(HTML→MD) + ReactMarkdown 렌더링으로 마크다운 기반 작성·열람 체계 구축"
      },
      {
        problem: "파일 업로드 후 파일 깨짐 현상 및 중복 파일명 충돌",
        solution: "aws-sdk 업로드 파이프라인 재구성 및 타임스탬프 파일명 정책·콘텐츠 타입 지정으로 정합성/안정성 확보"
      },
    ],
  
    currentStatus:
      "2025년 총학생회 변경으로 현재 서버 운영 중단 상태. 2023~2024 기간 운영 및 피드백 기반 유지보수 수행",
  
    insights: [
      "첫 VoC 경험과 해결책 고민 경험을 통해 사용자 중심의 개발 가치를 배움"
    ]
  };