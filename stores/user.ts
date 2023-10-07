import { defineStore } from "pinia";

export type Product = {
  price: number;
  title: string;
  id: number;
};

interface State {
  isMenuOverlay: boolean;
  isLoading: boolean;
  cart: Product[] | [];
  checkout: Product[] | [];
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    isMenuOverlay: false,
    isLoading: true,
    cart: [],
    checkout: [],
  }),
  persist: true,
});
