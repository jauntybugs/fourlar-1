
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  points: string[];
}

export interface ChecklistItem {
  id: number;
  question: string;
  category: string;
}
