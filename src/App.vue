<script setup>
import { inject } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const theme = inject('theme')
const updateTheme = () => window.warp.setTheme('blocket-se')
</script>

<template>
  <div>
    <h1 style="color: var(--w-text-color)">{{ theme }}</h1>
    <a href="https://vitejs.dev" target="_blank" v-if="theme === 'blocket-se'">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" v-else>
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="updateTheme">Set theme to Blocket</button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
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
</style>
