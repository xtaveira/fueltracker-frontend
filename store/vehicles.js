export const state = () => ({
    vehicles: [],
  });
  
  export const mutations = {
    setVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },
  };
  
  export const actions = {
    async fetchVehicles({ commit }) {
      const response = await fetch('http://localhost:3000/vehicles');
      const vehicles = await response.json();
      commit('setVehicles', vehicles);
    },
  };
  