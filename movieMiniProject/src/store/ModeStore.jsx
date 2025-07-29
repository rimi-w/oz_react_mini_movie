import { create } from "zustand";

export const useModeStore = create((set) => ({
  isDark: true,

  toggleMode: () => set((state) => ({ isDark: !state.isDark })),
}));
