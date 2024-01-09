import { create } from 'zustand';

interface Modal {
  open: boolean;
  setOpen: (view: boolean) => void;
  skillModal: boolean;
  setSkillModal: (skillModal: boolean) => void;
  projectModal: boolean;
  setProjectModal: (projectModal: boolean) => void;
  selectId: number;
  setSelectId: (selectId: number) => void;
}

export const useModal = create<Modal>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  skillModal: false,
  setSkillModal: (skillModal: boolean) => set({ skillModal }),
  projectModal: false,
  setProjectModal: (projectModal: boolean) => set({ projectModal }),
  selectId: 0,
  setSelectId: (selectId: number) => set({ selectId }),
}));