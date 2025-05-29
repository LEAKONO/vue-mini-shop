<template>
  <div class="page">
    <h1 class="title">Shop</h1>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';

const products = [
  { id: 1, name: 'Vue Shirt', price: 20 },
  { id: 2, name: 'Vue Mug', price: 10 }
];
</script>

<style scoped>
.page {
  padding: 2rem 1rem;
}

.title {
  text-align: center;
  color: #34495e;
  margin-bottom: 2rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
