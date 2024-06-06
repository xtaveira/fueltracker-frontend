<template>
  <div class="container">
    <h1>Vehicles</h1>
    <nuxt-link to="/vehicles/create">Add Vehicle</nuxt-link>
    <ul>
      <li v-for="vehicle in vehicles" :key="vehicle.id">
        <nuxt-link :to="'/vehicles/' + vehicle.id">{{
          vehicle.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VehiclesPage",
  computed: {
    vehicles() {
      return this.$store.state.vehicles.vehicles;
    },
  },
  async mounted() {
    await this.$store.dispatch("vehicles/fetchVehicles");
  },
};
</script>
