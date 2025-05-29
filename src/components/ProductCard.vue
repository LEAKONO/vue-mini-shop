<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p>\${{ product.price }}</p>
    <button @click="addToCart(product.name)">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps(['product']);
const addToCart = (name) => alert(`${name} added to cart`);
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
