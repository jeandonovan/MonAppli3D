import create from 'zustand';

type ModelState = {
  url?: string;
  setFromUrl: (u?: string) => void;
  setFromFile: (f: File) => void;
};

export const useModelStore = create<ModelState>((set) => ({
  url: undefined,
  setFromUrl: (u) => set({ url: u }),
  setFromFile: (f) => {
    const u = URL.createObjectURL(f);
    set({ url: u });
  },
}));
