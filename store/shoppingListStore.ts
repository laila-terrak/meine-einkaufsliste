import { defineStore } from "pinia";

interface IShoppingListState {
  listNames: string[];
}

export const useShoppingListStore = defineStore("shoppingListStore", {
  state: (): IShoppingListState => ({
    listNames: [],
  }),
  actions: {
    setName(newName: string) {
      this.listNames.push(newName);
    },
  },
});
