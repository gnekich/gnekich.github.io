import { create } from "zustand";

export const useFullScreenStore = create((set) => ({
  fullScreenMode: false,
  fullScreenModeIsAvailable: false,
  checkIfFullScreenModeIsAvailable: () => {
    set({
      fullScreenModeIsAvailable:
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled,
    });
  },
  setFullScreenMode: (fullScreenMode) => {
    set({ fullScreenMode });
  },
  toggleFullScreenMode: () => {
    set((state) => ({
      fullScreenMode: !state.fullScreenMode,
    }));
  },
}));

export default useFullScreenStore;
