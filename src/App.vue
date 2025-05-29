<template>
  <div id="app">
    <NavBar />

    <main class="container">
      <router-view />
    </main>

    <footer class="footer">
      © 2025 VueMiniShop — Built with ❤️ using Vue 3
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  flex: 1;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
}
</style>
