import { create } from "zustand";

type User = {
  isLoggedIn: boolean;
  toggleLogin: () => void;
};

export const useUserStore = create<User>((set) => ({
  isLoggedIn: false,
  toggleLogin: () => {
    set((state) => ({ ...state, isLoggedIn: !state.isLoggedIn }));
  },
}));
