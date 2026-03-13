
export enum DepartmentType {
  BTech = 'B.Tech',
  MBA = 'MBA',
  BBA = 'BBA',
  BCA = 'BCA',
  Diploma = 'Diploma'
}

export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface SemesterData {
  semester: number;
  modules: SyllabusModule[];
}

export interface Branch {
  id: string;
  name: string;
  description: string;
  syllabus: SemesterData[];
}

export interface DepartmentWing {
  id: string;
  type: DepartmentType;
  title: string;
  focus: string;
  description: string;
  accentColor: string;
  years: number;
  image: string;
  branches?: Branch[]; // Optional branches for B.Tech and Diploma
  syllabus?: SemesterData[]; // Default syllabus if no branches
}

export interface CareerQuizStep {
  id: number;
  question: string;
  options: string[];
}

export interface PlacementStat {
  label: string;
  value: string;
  suffix?: string;
}
