<template>
  <div class="card">
    <h3 class="title">{{ product.name }}</h3>
    <p class="price">\${{ product.price.toFixed(2) }}</p>
    <button class="add-btn" @click="addToCart(product.name)">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps(['product']);

const addToCart = (name) => {
  alert(`${name} added to cart`);
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #2c3e50;
}

.price {
  margin: 0 0 1rem;
  font-weight: bold;
  color: #42b983;
}

.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background-color: #36976b;
}
</style>
