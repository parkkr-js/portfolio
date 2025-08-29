import { Project } from "../types/project";

export const ossMovieApiProject: Project = {
  slug: "oss-movie-api",
  title: "한동대학교 전공수업 OpenSourceStudio(OSS) 수업 예시자료 제작",
  subtitle: "반응형 UI와 Open API 연동 교육용 예시자료",
  serviceName: "한동대 OpenSourceStudio(OSS) 수업 예시자료",
  period: "2024.09",
  position: "TA / Frontend Instructor",
  image: "/asset/img/한동대학교 로고.png",
  description:
    "한동대 오픈소스스튜디오 수업 예시 프로젝트. React의 기본적인 개념과 Open API 사용법을 학생들에게 제공하기 위해 제작",
  technologies: [
    "React 18",
    "JavaScript",
    "Axios",
    "http-proxy-middleware",
  ],
  github: "https://github.com/parkkr-js/ossTA-openAPI-example",
  githubPrivate: false,
  external: "https://oss-ta-open-api-example.vercel.app/",

  star: {
    situation: [
      "조교의 역할로 전공 수업에서 OpenAPI 기반 React 실습이 필요",
      "학생들이 복제·확장 가능한 구조 제시",
    ],
    task: [
      "Open API를 사용하여 정보를 가져와 UI로 제공하는 방법을 학생들에게 제공",
      "반응형 UI로 검색·목록·상세 흐름 제공",
    ],
    action: [
      "영화 정보 api인 KMDB/KOBIS Open API를 사용하여 영화 정보를 가져오는 방법을 학생들에게 제공",
      "Chakra UI 기반 레이아웃/그리드로 반응형 구현",
      "라우팅과 axios 패턴 예시 제공"
    ],
    result: [
      "프로젝트를 참고하여 수업 실습에서 OpenAPI 연동 성공률 증가, CORS 이슈 없이 학습 진행",
      "학생들이 프록시/환경변수/라우팅 모범 사례를 쉽게 재사용",
      "학생들이 배포 전 로컬환경에서 Open API를 사용하여 데이터를 가져오는 방법을 학습"
    ],
    stackReasons: [
      "Chakra UI: 빠른 반응형 구성 및 접근성",
      "CRA 프록시: CORS 우회 및 로컬 개발 편의",
      "Axios: 직관적 요청/에러 처리",
    ]
  },

  problemSolving: [
    {
      problem: "학생들이 배포 전 로컬환경에서 OpenAPI를 호출하면 대부분 CORS 에러로 데이터 수신이 안 됨",
      cause: "브라우저의 Same-Origin Policy로 인해 타 도메인 요청에 사전 요청(Preflight)과 CORS 헤더 검증이 필요한데, 공개 API가 브라우저 직접 호출을 허용하지 않는 경우가 많음",
      symptom: "브라우저 콘솔/네트워크 탭에 Preflight 실패, 'No Access-Control-Allow-Origin' 경고가 발생하고 응답이 차단됨",
      solution: "개발 서버 프록시로 로컬에서 동일 출처처럼 우회",
      alternatives: [
        {
          summary: "대안 1: 개발 서버 프록시(CRA) 사용 (채택)",
          description: "로컬 개발에서만 프록시를 설정해 브라우저가 같은 출처로 인식하게 함",
          pros: [
            "설정이 단순하고 교육용 예제에 적합",
            "클라이언트 코드 변경 최소화(요청 경로만 접두사)"
          ],
          cons: [
            "운영 환경에서는 별도 대비 필요(개발 전용)"
          ]
        },
        {
          summary: "대안 2: 서버(Express/Nginx) 프록시 구성",
          description: "백엔드가 외부 API를 호출해 CORS를 회피하고 클라이언트에는 동일 출처로 제공",
          pros: [
            "운영 환경까지 일관된 구조",
          ],
          cons: [
            "초기 설정/운영 복잡도 상승",
            "수업 예제에선 과도할 수 있음"
          ]
        },
        {
          summary: "대안 3: 브라우저 확장프로그램으로 CORS 우회",
          description: "개발자용 확장으로 임시 우회",
          pros: [
            "즉시 테스트 가능"
          ],
          cons: [
            "재현성/안정성 낮음, 보안상 비권장",
            "학생 과제/수업 환경에서 통일 어려움"
          ]
        }
      ],
      adoptionReason: "교육 목표상 간단하고 재현 가능한 방법이 중요하여 '대안1'을 채택. 운영 단계에선 서버 프록시를 권장한다는 점을 함께 안내"
    }
  ],

  currentStatus: "수업 예시 프로젝트로 활용 중(openAPI 사용법과, React의 기본적인 개념(라우팅, 컴포넌트와 state, 이벤트 핸들러)을 학생들에게 제공)",
  insights: [
    "프록시와 환경변수로 클라이언트에서 안전하게 Open API를 다루는 패턴 체득",
  ]
};