import { Project } from "../types/project";

export const pugoNargoProject: Project = {
  slug: "pugonargo",
  title: "엑셀 내용을 카카오톡으로 일일이 주고받는 문제를 해결할 수 있을까?",
  subtitle: "주식회사 푸고나르고 물류 관리 시스템",
  serviceName: "푸고나르고 (PugoNargo)",
  period: "2025.06 - ",
  position: "Frontend Developer",
  description: "주식회사 푸고나르고 외주 프로젝트",
  image: "/asset/img/푸고나르고로고.png",
  technologies: ["React 18+", "TypeScript", "Firebase", "TanStack Query", "Google APIs"],
  github: "https://github.com/parkkr-js/pugonargo",
  githubPrivate: true,
  external: "https://pugonargo-c652f.web.app/",
  star: {
    situation: [
      "‘푸고나르고’는 관리자와 기사님들 사이에서 정보전달이 모두 **수작업 프로세스**로 운영되어 전반적인 **업무 효율**이 낮았음",
      "관리자가 기사별 운행 내역을 **직접 집계·계산**하고 **일일이 안내**해야 해 시간 소모와 오류 가능성이 큼",
      "기사들은 본인 정산/배차 현황을 **스스로 확인할 방법 부재**로 의존도가 높고 안내 지연 발생",
      "배차 조건·주의사항을 **카카오톡**으로 개별 전달하는 **비정형 커뮤니케이션**을 사용하고 있음",
      "반복 업무 집중으로 전달 지연과 **왕복 커뮤니케이션 비용** 증가"
    ],
    task: [
      "기존 사용하던 **스프레드시트와 연동**되는 웹 기반 정산·배차 시스템을 제공하고, 관리자/사용자 모두가 실시간으로 안전하게 데이터를 확인하도록 개선"
    ],
    action: [
      "**Google Drive/Sheets API 연동**으로 시트 선택→데이터 자동 수집 및 Firestore 저장, 500건 단위 배치 처리 도입",
      "**React 18+ · TypeScript · Ant Design**으로 관리자/사용자 UI 구축, **HOC 패턴**으로 권한별 페이지 분리 렌더링 및 미인증·권한 불일치 시 리다이렉트 처리",
      "**TanStack Query 캐시** + **Firestore 실시간 리스너**로 문서 재조회 최소화, 네트워크 호출 및 **Firestore Read 비용 절감**",
      "**Firebase Hosting 환경 분리**와 배포 스크립트로 개발/운영 배포 자동화",
    ],
    result: [
      "정산·배차 정보의 실시간 확인이 가능해 **수작업 의존도**와 **전달 누락/지연** 감소",
      "관리자 **반복 업무 경감**, **왕복 커뮤니케이션 단축**으로 운영 효율 향상",
      "관리자(전체 현황)·기사(본인 데이터) 각각에 맞는 **정보 접근성** 확보"
    ],
    stackReasons: [
      "**React 18+ · TypeScript**: 타입 안전성과 컴포넌트 재사용성으로 유지보수 용이",
      "**TanStack Query**: 서버 상태 캐시/동기화로 네트워크 호출과 재조회 최소화",
      "**Firebase Firestore**: 실시간 리스너 기반 데이터 반영과 무서버 운영 편의",
      "**Firebase Hosting**: 환경 분리와 자동 배포로 안전한 릴리스 프로세스 구축",
      "**Google Drive/Sheets API**: 기존 스프레드시트 자산과 직접 연동해 자동 수집 구현"
    ]
  },
  currentStatus:
    "회사측 요청으로 GitHub 저장소가 private으로 변경되었습니다. 현재 운영 중인 시스템으로 200명 이상의 기사님이 사용하고 있습니다.",
};


