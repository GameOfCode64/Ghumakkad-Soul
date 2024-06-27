import { create } from "zustand";

interface useFormStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSearch = create<useFormStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));
