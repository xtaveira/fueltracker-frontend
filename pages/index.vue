<template>
  <div class="home">
    <Header />
    <main>
      <h1>Welcome to FuelTracker</h1>
      <p>Track your fuel usage effortlessly.</p>
      <nuxt-link to="/login">
        <button class="cta-button">Login with Google</button>
      </nuxt-link>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.cta-button {
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.cta-button:hover {
  background-color: #0056b3;
}
</style>
