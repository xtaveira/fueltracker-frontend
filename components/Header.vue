<template>
  <header class="header">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
