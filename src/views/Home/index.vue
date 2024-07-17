<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>
</template>
<script lang="ts" setup>
const router = useRouter();

const goToAbout = () => {
  router.push("/about");
};
</script>
<style lang="less" scoped></style>
