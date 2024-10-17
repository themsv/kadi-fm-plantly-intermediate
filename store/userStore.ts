import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  isLoggedIn: boolean;
  toggleLogin: () => void;
};

export const useUserStore = create(
  persist<User>(
    (set) => ({
      isLoggedIn: false,
      toggleLogin: () => {
        set((state) => ({ ...state, isLoggedIn: !state.isLoggedIn }));
      },
    }),
    {
      name: "taskly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
