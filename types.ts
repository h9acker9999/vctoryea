
export interface StudentResult {
  id: string;
  name: string;
  roll: string;
  gpa: number;
  grade: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  grade: string;
  image?: string;
  gender: 'male' | 'female';
}

export interface Developer {
  name: string;
  role: string;
  image: string;
  link?: string;
}
