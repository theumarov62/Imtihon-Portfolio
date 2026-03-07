import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      login: ({ username, password }) => {
        if (username === "admin" && password === "admin12345") {
          set({ user: { username } });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export { useAuthStore };
