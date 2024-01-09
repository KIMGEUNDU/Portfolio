import { create } from 'zustand';

interface contactView {
  view: boolean;
  setView: (view: boolean) => void;
}

export const useContactView = create<contactView>((set) => ({
  view: false,
  setView: (view: boolean) => set({ view }),
}));