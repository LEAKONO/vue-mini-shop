<template>
  <div class="page">
    <h1 class="title">Contact Us</h1>
    <form class="form" @submit.prevent="submitForm">
      <input v-model="name" placeholder="Your name" />
      <button>Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const submitForm = () => {
  alert(`Thanks, ${name.value}!`);
};
</script>

<style scoped>
.page {
  padding: 2rem;
  max-width: 500px;
  margin: auto;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #36976b;
}
</style>
