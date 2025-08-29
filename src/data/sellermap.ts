import { Project } from "../types/project";

export const sellerMapProject: Project = {
  slug: "sellermap",
  title: "1인 셀러들이 여러 플랫폼에서 상품을 판매할 때 겪는 문제를 해결할 수 있을까?",
  subtitle: "1인 셀러를 위한 통합 상품·트래픽 관리 플랫폼",
  serviceName: "셀러맵 (SellerMap)",
  period: "2025.03 - ",
  position: "Frontend Developer",
  description:
    "1인 셀러 대상 통합 상품·트래픽 관리 어드민 웹앱. 분산된 구매 통계와 낮은 멀티링크 자유도로 인한 전환 분석·판매 증대 한계를 해결.",
  image: "/asset/img/project1.png",
  technologies: [
    "React 18+",
    "TypeScript",
    "Redux Toolkit",
    "Zod",
    "Protobuf",
    "Styled-Components + SWC",
    "Webpack 5 Module Federation",
    "Jest + ts-jest",
    "neverthrow",
    "ts-pattern",
    "AWS S3",
    "Firebase Hosting",
    "GitHub Actions",
    "EC2 + Nginx",
    "Biome"
  ],
  github: "https://github.com/shopsaas",
  githubPrivate: true,
  external: "https://sellermap.co.kr/",

  star: {
    situation: [
      "1인 셀러의 상품 노출 채널이 다중 플랫폼(SNS/커머스)으로 **분산**되어 **통합 전환 분석**이 어려움",
      "기존 **멀티링크**의 **낮은 자유도**로 랜딩 최적화가 제한되어 **판매 증대 한계**",
      "**통합 상품·트래픽 관리**가 가능한 어드민 웹앱 필요"
    ],
    task: [
      "6개 도메인(상품·사용자·디자인·스케줄·통계·결제/알림)의 **확장 가능한 상태 관리**와 **안정적인 배포/품질 체계** 설계",
      "**데이터 계약 일관성**과 **런타임 안정성** 확보"
    ],
    action: [
      "Flux(Redux Toolkit)아키텍처로 도메인 경계 분리 및 **단방향 데이터 흐름** 정립",
      "Proto-TS, Zod로 **API 계약**/런타임 검증 분리",
      "Jest, ts-jest로 **유즈케이스 단위 테스트** 구성",
      "Webpack 5 **Module Federation**으로 호스트에서 원격을 런타임 조립, 공통 의존성 singleton 공유",
      "Firebase Hosting immutable 캐시 정책과 Webpack contenthash로 **임베드/캐시 이슈** 최소화",
      "S3 이미지 최적화(preconnect/preload, 포맷 최적화)로 초기 로딩 개선"
    ],
    result: [
      "활성 사용자 60명 중 **3명 연간 구독(₩78,000/년)** 전환으로 초기 수익 지표 확보",
      "도메인 **단위 테스트**로 회귀 리스크 감소 및 릴리스 안정화",
      "**MFE 도입**으로 기능 모듈 독립 배포/롤백 용이",
    ],
    stackReasons: [
      "React 18 & Redux Toolkit: **단방향 상태관리**로 도메인 분리와 예측 가능성/확장성 확보",
      "TypeScript(Proto-TS) & Zod: 컴파일·런타임 이중 검증으로 **API 계약 일관성** 보장",
      "Webpack 5 & contenthash: 파일명 기반 캐시 무효화로 임베드/캐시 이슈 최소화",
      "SWC: 빠른 빌드와 styled-components 네이밍 유지로 DX 향상",
      "Jest & ts-jest(+ neverthrow/ts-pattern): **유즈케이스 단위 테스트**와 안전한 오류/분기 모델링",
      "Firebase Hosting & AWS S3: CDN 캐시와 이미지 최적화로 초기 로딩 개선",
      "GitHub Actions: **빌드·테스트·배포** 자동화로 릴리스 리소스 감소",
      "Code splitting(dynamic import): 초기 번들 축소로 체감 성능(FCP) 개선"
    ]
  },
  problemSolving: [
    {
      problem: "상태 관리 복잡성(도메인 간 결합/의존 증가) 문제",
      solution: "Redux Toolkit을 사용한 flux 아키텍쳐 도입으로 도메인 경계/단방향 흐름 확립"
    },
    {
      problem: "백엔드 개발자와 노션 기반 API 명세 불일치/버전 드리프트로 런타임 오류 유발 문제",
      solution: "Protobuf 단일 소스로 계약 일원화 + TS 타입 자동 생성(Proto-TS) · Zod 런타임 검증, 리포지토리 공유/버전 태깅(PR)로 변경 이력 관리"
    },
    {
      problem: "회귀 발생 및 테스트 공백 문제",
      solution: "Jest & ts-jest로 유즈케이스 단위 테스트, CI 연동"
    },
    {
      problem: "인스타그램 인앱 브라우저 캐시로 `remoteEntry.js`의 구버전이 지속 로드",
      cause: "(원인) Firebase Hosting의 JS/CSS `immutable, max-age=1y` + 원격 엔트리 고정 파일명/URL",
      symptom: "(문제 현상) 호스트는 최신인데 원격만 과거 버전 → UI/계약 불일치가 인앱 브라우저 환경에서 발생",
      alternatives: [
        {
          summary: "대안 1: MFE 유지",
          description: "원격 엔트리 URL에 빌드ID/커밋SHA 부여 + 원격 엔트리에만 `Cache-Control: no-store, max-age=0, must-revalidate` 적용",
          pros: [
            "장점: 마이크로 프런트엔드 유지, 기능별 독립 배포/롤백 가능"
          ],
          cons: [
            "단점: 배포 파이프라인 복잡도 증가 (버전 주입·URL 동기화·환경변수 관리), URL 누락 시 구버전 재등장 위험, IG 정책 변화 시 재발 가능성, 런타임 버전 스큐 관리 부담, TTFB 증가 가능성"
          ]
        },
        {
          summary: "대안 2: 통합 아키텍처 변경 (채택)",
          description: "핵심 경로를 단일 번들(호스트)로 통합, `contenthash` 기반 캐시 무효화 일원화",
          pros: [
            "장점: 캐시 제어 단순화(파일명=캐시 키), IG 임베드 재현률 급감, 런타임 스큐 제거로 계약/스타일/상태 일관성↑, 장애면적↓, 공통 타입/유틸/디자인 시스템 공유 용이"
          ],
          cons: [
            "단점: 완전한 기능별 독립 배포 축소, 릴리즈 단위가 커질 수 있음"
          ]
        }
      ],
      adoptionReason: "대안 2 채택 이유\n임베드 환경에서 가장 중요한 건 안정성이라, 대안 1은 재발·운영 리스크가 남음\n대안 2는 캐시·버전 불일치를 구조적으로 없애 근본 원인을 제거함\n공통 로직·컴포넌트를 한 번만 배포/관측해 운영 복잡도와 장애 면적을 줄임"
    },
    {
      problem: "해결중인 문제: 서비스 특성상 이미지업로드가 빈번하여 S3 비용을 줄일 수 있는 방안을 고민중이고, 사용자가 업로드하는 이미지를 webp로 변환하여 비용을 줄일 수 있는 방안을 도입중."
    }
  ],
  currentStatus:
    "활성 사용자 60명 중 3명 연간 구독(₩78,000/년) 전환, 초기 수익화 지표 확보. 2025년 7월 11일 사업자등록 완료. 결제시스템 및 카카오 알림 기능 개발 진행 중",
  insights: [
    "Flux 아키텍처로 다수의 도메인 상태를 관리하며 단방향 데이터 흐름의 이점 확인",
    "MFE 도입과 철회를 통해 문제 해결 중심의 선택 중요성 학습",
    "QA 중요성: 환경 분리로 안정 배포 달성",
    "WOFF2 전환으로 FCP 개선 경험"
  ]
};
