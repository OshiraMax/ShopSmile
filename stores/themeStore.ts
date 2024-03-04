import { makeAutoObservable } from "mobx";

export class ThemeStore {
  theme: 'light' | 'dark' = "light";

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(newTheme: 'light' | 'dark') {
    this.theme = newTheme;
  }
}

export const themeStore = new ThemeStore();