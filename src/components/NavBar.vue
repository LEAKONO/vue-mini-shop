<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
  color: white;
}
a {
  color: white;
  margin: 0 10px;
}
</style>
