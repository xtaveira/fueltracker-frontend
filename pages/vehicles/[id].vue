<template>
  <div class="container">
    <h1>{{ vehicle.name }}</h1>
    <p>{{ vehicle.description }}</p>
    <nuxt-link to="/vehicles">Back to Vehicles</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "VehicleDetailPage",
  data() {
    return {
      vehicle: {},
    };
  },
  async mounted() {
    // Fetch vehicle data from backend
    const response = await fetch(
      `http://localhost:3000/vehicles/${this.$route.params.id}`
    );
    this.vehicle = await response.json();
  },
};
</script>
