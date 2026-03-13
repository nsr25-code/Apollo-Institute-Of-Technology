
import React from 'react';
import { DepartmentType, DepartmentWing, CareerQuizStep, SemesterData } from './types';
import { Cpu, Briefcase, Layout, Code, Wrench } from 'lucide-react';

// Shared generic syllabus for demo purposes, can be specialized further
const generateGenericSyllabus = (years: number): SemesterData[] => {
  return Array.from({ length: years * 2 }, (_, i) => ({
    semester: i + 1,
    modules: [
      { title: 'Core Subjects', topics: ['Foundation Module A', 'Foundation Module B', 'Applied Practice'] },
      { title: 'Advanced Lab', topics: ['Practical Workshop', 'Field Study', 'Technical Seminar'] }
    ]
  }));
};

export const DEPARTMENTS: DepartmentWing[] = [
  {
    id: 'btech',
    type: DepartmentType.BTech,
    title: 'Engineering Excellence',
    focus: 'Multi-disciplinary Tech',
    description: 'Premier engineering programs designed for the global industrial landscape.',
    accentColor: 'blue-600',
    years: 4,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
    branches: [
      { id: 'bt-ai', name: 'B.TECH AIML', description: 'Deep learning, Neural networks, and Intelligent systems.', syllabus: generateGenericSyllabus(4) },
      { id: 'bt-cse', name: 'CSE', description: 'Software architecture, algorithms, and cloud computing.', syllabus: generateGenericSyllabus(4) },
      { id: 'bt-me', name: 'MECHANICAL', description: 'Thermodynamics, Robotics, and Manufacturing.', syllabus: generateGenericSyllabus(4) },
      { id: 'bt-ce', name: 'CIVIL', description: 'Structural design, Urban planning, and Infrastructure.', syllabus: generateGenericSyllabus(4) },
      { id: 'bt-ee', name: 'ELECTRICAL', description: 'Power systems, Control systems, and Energy.', syllabus: generateGenericSyllabus(4) },
      { id: 'bt-ece', name: 'ELECTRONICS', description: 'VLSI, Embedded systems, and Signal processing.', syllabus: generateGenericSyllabus(4) }
    ]
  },
  {
    id: 'mba',
    type: DepartmentType.MBA,
    title: 'Leadership Suite',
    focus: 'Data Analytics & Digital Strategy',
    description: 'Bridging the gap between corporate vision and technical execution.',
    accentColor: 'amber-500',
    years: 2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    syllabus: generateGenericSyllabus(2)
  },
  {
    id: 'bca',
    type: DepartmentType.BCA,
    title: 'Digital Architecture',
    focus: 'Software & App Dev',
    description: 'Developing high-performance applications for the modern web.',
    accentColor: 'emerald-500',
    years: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    syllabus: generateGenericSyllabus(3)
  },
  {
    id: 'bba',
    type: DepartmentType.BBA,
    title: 'Business Frontiers',
    focus: 'Entrepreneurship',
    description: 'Empowering next-gen founders with digital-first business models.',
    accentColor: 'rose-500',
    years: 3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    syllabus: generateGenericSyllabus(3)
  },
  {
    id: 'diploma',
    type: DepartmentType.Diploma,
    title: 'Fast-Track Technical',
    focus: 'Core Engineering Skills',
    description: 'Applied technical skills for immediate industrial impact.',
    accentColor: 'indigo-500',
    years: 3,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    branches: [
      { id: 'dip-me', name: 'DIPLOMA MECHANICAL', description: 'Workshop tech and machine maintenance.', syllabus: generateGenericSyllabus(3) },
      { id: 'dip-ce', name: 'DIPLOMA CIVIL', description: 'Construction surveying and material testing.', syllabus: generateGenericSyllabus(3) },
      { id: 'dip-ee', name: 'DIPLOMA ELECTRICAL', description: 'Industrial wiring and circuit diagnostics.', syllabus: generateGenericSyllabus(3) },
      { id: 'dip-ece', name: 'DIPLOMA ELECTRONICS', description: 'Consumer electronics and troubleshooting.', syllabus: generateGenericSyllabus(3) }
    ]
  }
];

export const CAREER_STEPS: CareerQuizStep[] = [
  {
    id: 1,
    question: "What's your primary goal?",
    options: ["Build Cutting-Edge Tech", "Lead Global Businesses", "Design Apps & Systems", "Hands-on Technical Work"]
  },
  {
    id: 2,
    question: "Your current education level?",
    options: ["10th Grade", "12th Grade", "Graduate", "Professional"]
  },
  {
    id: 3,
    question: "What environment do you thrive in?",
    options: ["Laboratories & Code", "Boardrooms & Teams", "Creative Studios", "Industrial Workshops"]
  }
];

export const ICONS = {
  [DepartmentType.BTech]: <Cpu className="w-8 h-8" />,
  [DepartmentType.MBA]: <Briefcase className="w-8 h-8" />,
  [DepartmentType.BCA]: <Layout className="w-8 h-8" />,
  [DepartmentType.BBA]: <Code className="w-8 h-8" />,
  [DepartmentType.Diploma]: <Wrench className="w-8 h-8" />
};
