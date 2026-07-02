import create from 'zustand';

type QualityState = {
  quality: 'low' | 'high';
  setQuality: (q: 'low' | 'high') => void;
};

export const useQualityStore = create<QualityState>((set) => ({
  quality: 'low',
  setQuality: (q) => set({ quality: q }),
}));
