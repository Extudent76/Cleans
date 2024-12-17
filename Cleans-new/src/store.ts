import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: { name: "", email: "", password: "" },
      logIn: (values) => set({ isLoggedIn: true, user: values }),
      changeName: (name) => set({ user: { ...get().user, name } }),
      services: [],
      setServices: (services) => set({ services }),
    }),
    {
      name: "main",
    },
  ),
);
