export interface ProblemSolvingAlternative {
  summary: string; // 대안 제목 (예: 대안 1: ...)
  description?: string; // 대안설명 (요지/세부)
  pros?: string[]; // 장점
  cons?: string[]; // 단점
}

export interface ProblemSolvingItem {
  problem: string; // 문제
  solution?: string; // 해결책
  cause?: string; // 원인
  symptom?: string; // 현상
  alternatives?: ProblemSolvingAlternative[]; // 대안(여러 개 가능)
  adoptionReason?: string; // 대안 채택이유
}

export interface Project {
  slug?: string;
  title: string;
  subtitle?: string;
  serviceName?: string;
  period?: string; // 예: 2024.03 ~ 2024.12
  position?: string; // 예: Frontend Lead, Full-stack
  description: string;
  image: string;
  technologies: string[];
  github?: string | string[];
  githubPrivate?: boolean;
  external?: string;
  video?: string;
  awardLink?: string;
  detailedDescription?: string;
  star?: {
    situation: string[];
    task: string[];
    action: string[];
    result: string[];
    stackReasons?: string[];
  };
  features?: string[];
  problemSolving?: ProblemSolvingItem[];
  currentStatus?: string;
  insights?: string[];
  pageImages?: {
    title: string;
    description: string;
    image: string;
  }[];
} 