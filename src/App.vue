<template>
  <div class="page-wrapper">
    <div class="logo-wrapper">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://pinia.vuejs.org/" target="_blank">
        <img src="/pinia.svg" class="logo pinia" alt="Pinia logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue + Pinia" />
    <div class="router-wrapper">
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld/index.vue";
</script>
<style lang="less">
@import "@/styles/index.less";

.page-wrapper {
  .all-full-center;
  .flex-col;

  .logo-wrapper {
    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }
    .logo.pinia:hover {
      filter: drop-shadow(0 0 2em #f7d436aa);
    }
  }

  .router-wrapper {
    width: 400px;

    nav {
      .flex;
      .justify-around;

      a {
        all: unset;
        cursor: pointer;
      }
    }

    .router-link-active {
      color: #42b883;
    }
  }
}
</style>
