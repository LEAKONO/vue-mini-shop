<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/shop">Shop</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
}

a.router-link-exact-active {
  border-bottom: 2px solid #42b983;
}
</style>
