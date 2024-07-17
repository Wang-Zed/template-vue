<template>
  <h2>AboutView</h2>
  <button @click="counter.increment">count: {{ counter.count }}</button
  ><br /><br />
  <label> Search: <input v-model.trim="search" maxlength="20" /> </label>
</template>
<script lang="ts" setup>
import { useCounter } from "@/store/counter";
import { useSearchStore } from "@/store/search";

const router = useRouter();

const counter = useCounter();

const searchStore = useSearchStore();
const search = computed({
  get() {
    router.replace({ query: { search: searchStore.value } });
    return searchStore.value;
  },
  set(search) {
    searchStore.update(search);
  }
});
</script>
<style lang="less" scoped></style>
