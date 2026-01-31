
import { StudentResult, Teacher, Developer } from './types';

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'আমিরুল স্যার',
    subject: 'পদার্থবিজ্ঞান',
    grade: '১০ম',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
    gender: 'male'
  },
  {
    id: '2',
    name: 'ওমর ফারুক স্যার',
    subject: 'সাধারণ শিক্ষক',
    grade: '১০ম',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
    gender: 'male'
  },
  {
    id: '3',
    name: 'রিমা মিস',
    subject: 'রসায়ন',
    grade: '১০ম',
    gender: 'female'
  },
  {
    id: '4',
    name: 'ফাতেমা মিস',
    subject: 'ইংরেজি',
    grade: '১০ম',
    gender: 'female'
  },
  {
    id: '5',
    name: 'ছোয়া মিস',
    subject: 'বাংলা',
    grade: '১০ম',
    gender: 'female'
  }
];

export const INITIAL_RESULTS: StudentResult[] = [
  { id: '1', name: 'HUSSAIN AHMAD', roll: '704445', gpa: 5.00, grade: 'A+' },
  { id: '2', name: 'Md Mahde Hasan', roll: '704491', gpa: 5.00, grade: 'A+' },
  { id: '3', name: 'ABDUS SAMAD', roll: '704498', gpa: 5.00, grade: 'A+' },
  { id: '4', name: 'Umme Rumman', roll: '704431', gpa: 4.96, grade: 'A' },
  { id: '5', name: 'Shihab ahammed joy', roll: '704513', gpa: 4.92, grade: 'A' },
  { id: '6', name: 'Rupali Akter', roll: '704417', gpa: 4.88, grade: 'A' },
  { id: '7', name: 'Mujahidul islam', roll: '704444', gpa: 4.88, grade: 'A' },
  { id: '8', name: 'JIBON DEBNATH', roll: '703226', gpa: 4.88, grade: 'A' }
];

export const DEVELOPERS: Developer[] = [
  {
    name: 'ALI SAHAB',
    role: 'Lead Web Developer',
    image: 'https://info-ali-sahab.pages.dev/img/alisahab.png',
    link: 'https://www.vfsbd.site'
  },
  {
    name: 'Gemini AI',
    role: 'AI Assistant & Engineer',
    image: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d47353046033c4c735a25.svg',
  }
];

export const CREDITS = {
  developer: "Developer Ali Shah",
  projectDirector: "Md. Omar Faruk"
};

export const NOTICES = [
  { id: 1, date: '১০ মে, ২০২৫', title: 'বার্ষিক ক্রীড়া প্রতিযোগিতার ফলাফল প্রকাশ', type: 'Result' },
  { id: 2, date: '১৫ মে, ২০২৫', title: 'অর্ধ-বার্ষিক পরীক্ষার রুটিন প্রদান', type: 'Exam' },
  { id: 3, date: '০২ জুন, ২০২৫', title: 'গ্রীষ্মকালীন অবকাশ সংক্রান্ত বিজ্ঞপ্তি', type: 'Holiday' },
  { id: 4, date: '১০ জুন, ২০২৫', title: 'এসএসসি পরীক্ষার ফরম পূরণ শুরু', type: 'Urgent' }
];

export const FEATURES = [
  { title: 'উন্নত ল্যাব', desc: 'আধুনিক বিজ্ঞান ল্যাব এবং আইটি সেটআপ', icon: '🔬', color: 'blue' },
  { title: 'অভিজ্ঞ শিক্ষক', desc: 'দক্ষ ও পেশাদার শিক্ষক মণ্ডলী', icon: '🎓', color: 'red' },
  { title: 'লাইব্রেরি', desc: 'হাজারো বইয়ের সমৃদ্ধ সংগ্রহ', icon: '📚', color: 'blue' },
  { title: 'ডিজিটাল ক্যাম্পাস', desc: 'স্মার্ট ক্লাসরুম এবং অনলাইন সুবিধা', icon: '💻', color: 'red' }
];
