<template>
  <div>
    <h1>Shop</h1>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';

const products = [
  { id: 1, name: 'Vue Shirt', price: 20 },
  { id: 2, name: 'Vue Mug', price: 10 }
];
</script>
