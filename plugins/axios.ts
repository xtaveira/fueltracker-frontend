import { defineNuxtPlugin, NuxtApp } from "@nuxt/kit";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api", // Substitua pela URL da sua API
  });
  nuxtApp.app.config.globalProperties.$axios = instance;
});
