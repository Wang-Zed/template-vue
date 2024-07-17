export const useSearchStore = defineStore("search", {
  state: () => ({
    value: ""
  }),
  actions: {
    update(val: string) {
      this.value = val;
    }
  }
});
