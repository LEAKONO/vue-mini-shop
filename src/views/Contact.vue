<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
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
