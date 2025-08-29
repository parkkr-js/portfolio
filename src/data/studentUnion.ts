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
      "react-dropzone",
      "aws-sdk",
      "CKEditor5",
      "Turndown",
      "ReactMarkdown",
      "Axios",
      "React Router",
      "react-table",
      "date-fns",
      "Firebase Hosting"
    ],
    github: ["https://github.com/Club-PARD/HGU-Student-Union-admin", "https://github.com/Club-PARD/HGU-Student-Union-client"],
    githubPrivate: false,
    external: "",

    star: {
      situation: [
        "4개 학생자치기구의 자료가 페이지·형식별로 분산되어 **일관된 관리/열람의 어려움**",
        "초기 **단순 텍스트 입력 기반** 문서 작성으로 **가독성·서식 통일 부족**",
        "운영자 입장에서 **파일 업로드/다운로드의 안정성**과 **사용자 입장에서 검색/페이지네이션 경험** 필요"
      ],
      task: [
        "관리자/사용자 분리 아키텍처로 **자료 업로드·편집·열람 흐름의 명확화**와 **권한 범위 분리**",
        "장기 기능 확장을 고려한 **확장 가능한 상태 관리 구조(Redux) 설계/구현**",
        "모바일/데스크톱 전 채널 대응을 위한 **반응형 UI 설계/구현**",
        "**마크다운 기반 작성·열람 체계 도입**으로 가독성 향상과 문서 포맷 일관성 확보",
        "AWS S3 기반 **안정적 멀티파일 업로드·다운로드 흐름** 및 파일명 정책 수립"
      ],
      action: [
        "AWS S3 + aws-sdk로 **업로드 파이프라인 구현**, react-dropzone으로 **드래그앤드롭·진행률 표시·다중 업로드** 구현, 타임스탬프 기반 **파일명 중복 방지 정책** 적용",
        "CKEditor5 편집 → Turndown으로 **HTML→Markdown 변환** → ReactMarkdown으로 **일관 렌더링** 파이프라인 구축",
        "React Router 기반 **카테고리/기구별 라우팅** 및 관리자/사용자 화면 **역할 분리** 설계",
        "react-table + 커스텀 Pagination으로 **정렬/검색/페이지네이션** 구현, 10개 단위 페이지 표시 체계 적용",
        "date-fns로 **날짜 가공/필터링 유틸** 구성, 목록 필터링 정확도 개선",
        "Redux로 **전역 상태(문서/파일/권한/검색 조건) 구조화**, 비동기 흐름 표준화로 **기능 추가시 영향 범위 최소화**",
        "Styled-Components + MUI로 **일관된 디자인 시스템**과 **반응형 인터페이스** 구성"
      ],
      result: [
        "사용자 피드백(가독성 개선) 반영 후 **마크다운 기반 작성·열람 체계 도입**으로 작성/열람 효율 및 일관성 향상",
        "대용량/다중 업로드 시 **실패율 감소** 및 **작업 시간 단축**, 파일 관리 **신뢰성 향상**",
        "반응형 레이아웃과 검색/페이지네이션으로 **탐색 효율** 향상",
        "출시 후 6개월간 **버그 해결·안정성 강화·UI 일관성/접근성 보강**으로 운영 품질 개선"
      ],
      stackReasons: [
        "React 18: 생태계/생산성 및 유지보수 용이성",
        "Redux: **확장 가능한 전역 상태 관리**와 예측 가능한 업데이트 흐름",
        "CKEditor5 + Turndown + ReactMarkdown: 작성-변환-렌더의 **일관 파이프라인**으로 가독성/포맷 통일",
        "AWS S3 + react-dropzone: **확장성**과 **사용자 친화적 업로드 UX**",
        "react-table: **정렬/검색/페이지네이션**의 범용 테이블 도구",
        "date-fns: 가벼운 **날짜 유틸**로 필터/정렬 정확도 확보",
        "Styled-Components + MUI: **컴포넌트화된 스타일링**과 **일관된 UI 컨벤션**"
      ]
    },
  
    problemSolving: [
      {
        problem: "문서 가독성 및 서식 일관성 부족으로 인한 작성/열람 경험 저하",
        solution: "CKEditor5 도입 + Turndown(HTML→MD) + ReactMarkdown 렌더링으로 마크다운 기반 작성·열람 체계 구축"
      },
      {
        problem: "파일 업로드 후 파일 깨짐 현상 및 중복 파일명 충돌",
        solution: "aws-sdk 업로드 파이프라인 재구성 및 타임스탬프 파일명 정책·콘텐츠 타입 지정으로 정합성/안정성 확보"
      },
      {
        problem: "대량 데이터 목록의 탐색성 및 성능 문제",
        solution: "react-table + 커스텀 Pagination으로 검색/정렬/페이지네이션 구현, 10개 단위 표시로 탐색 효율 개선"
      },
      {
        problem: "기능 확장 시 상태 결합 증가와 영향 범위 확대",
        solution: "Redux 기반 도메인 경계 분리와 비동기 흐름 표준화로 확장 시 회귀 리스크 최소화"
      }
    ],
  
    currentStatus:
      "2025년 총학생회 변경으로 현재 서버 운영 중단 상태. 2023~2024 기간 운영 및 피드백 기반 유지보수 수행",
  
    insights: [
      "사용자 피드백 주도의 기능 개선이 **가독성/작성 효율**에 직접적 효과를 창출",
      "업로드 UX(드래그앤드롭/진행률) 개선이 **운영 생산성**과 **신뢰성**을 높임",
      "관리자/사용자 페이지 **역할 분리**가 보안/사용성 균형에 유효",
      "상태 관리 구조화(Redux)가 **장기 확장성**과 **변경 용이성**을 담보"
    ]
  };