<template>
  <div class="container">
    <h1>Add Vehicle</h1>
    <form @submit.prevent="createVehicle">
      <input
        type="text"
        v-model="vehicle.name"
        placeholder="Vehicle Name"
        required
      />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateVehiclePage",
  data() {
    return {
      vehicle: {
        name: "",
      },
    };
  },
  methods: {
    async createVehicle() {
      // Post new vehicle to backend
      await fetch("http://localhost:3000/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.vehicle),
      });
      this.$router.push("/vehicles");
    },
  },
};
</script>
