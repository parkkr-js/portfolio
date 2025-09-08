export interface ProblemSolvingAlternative {
  summary: string; // 대안 제목 
  description?: string | string[]; // 대안설명 
  pros?: string[]; // 장점
  cons?: string[]; // 단점
}

export interface ProblemSolvingItem {
  problem: string; // 문제
  solution?: string | string[]; // 해결책
  cause?: string | string[]; // 원인
  symptom?: string | string[]; // 현상
  alternatives?: ProblemSolvingAlternative[]; // 대안
  adoptionReason?: string; // 대안 채택이유
  result?: string | string[]; // 문제 해결의 결과
}

export interface Project {
  slug?: string;
  title: string;
  subtitle?: string;
  serviceName?: string;
  period?: string; 
  position?: string; 
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
  background?: string[];
  keyFeatures?: string[]; 
  architecture?: string[]; 
  stackDetail?: string[];
  results?: string[];
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