/**
 * Types and interfaces for the Resume AI Parser and Matcher system.
 */

export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: string;
  gpa: string;
}

export interface SkillGroup {
  category: string; // e.g., "Languages", "Frontend", "Backend", "Soft Skills"
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ParsedResume {
  id: string; // Dynamic client-side uuid or hash
  fileName: string;
  parsedAt: string;
  contactInfo: ContactInfo;
  summary: string;
  careerLevel: string; // e.g., "Entry-level", "Mid-level", "Senior", "Lead/Executive"
  skills: SkillGroup[];
  experience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  languages: string[];
  _isFallback?: boolean;
  _fallbackReason?: string;
}

export interface MatchAnalysis {
  matchScore: number; // 0 - 100
  fitLevel: "Excellent" | "Good" | "Fair" | "Poor";
  skillsMatch: {
    matched: string[];
    missing: string[];
  };
  experienceAlignment: string; // Detailed alignment analysis
  cultureFitSummary: string;
  strengths: string[];
  gaps: string[];
  suggestedImprovement: string;
  interviewQuestions: string[]; // Tailored questions
  _isFallback?: boolean;
  _fallbackReason?: string;
}

export interface HRJobDescription {
  id: string;
  title: string;
  department: string;
  requirements: string[];
  text: string;
}
