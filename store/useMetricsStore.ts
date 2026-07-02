import create from 'zustand';

type MetricsState = {
  times: { firstFrameMs?: number };
  recordRenderTime: (key: 'firstFrameMs', value: number) => void;
};

export const useMetricsStore = create<MetricsState>((set) => ({
  times: {},
  recordRenderTime: (key, value) => set((s) => ({ times: { ...s.times, [key]: value } })),
}));
