import internships from "@/content/internships.json";

export interface Internship {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export const internshipItems: Internship[] = internships;
