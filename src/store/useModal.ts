import { create } from 'zustand';

interface Modal {
  open: boolean;
  setOpen: (view: boolean) => void;
  skill: boolean;
  setSkill: (skill: boolean) => void;
  project: boolean;
  setProject: (project: boolean) => void;
}

export const useModal = create<Modal>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  skill: false,
  setSkill: (skill: boolean) => set({ skill }),
  project: false,
  setProject: (project: boolean) => set({ project }),
}));