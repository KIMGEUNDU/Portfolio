import { create } from 'zustand';

interface Data {
  skill: Skill[];
  setSkill: (skill: Skill[]) => void;
}

export const useData = create<Data>((set) => ({
  skill: [],
  setSkill: (skill: Skill[]) => set({ skill }),
}));