import { create } from "zustand";

interface CourseInfo {
  CourseInfo: string;
  setCourseInfo: (name: string) => void;
}

export const useCourseName = create<CourseInfo>((set) => ({
  CourseInfo: '',
  setCourseInfo: (name) => set({ CourseInfo: name }),
}));