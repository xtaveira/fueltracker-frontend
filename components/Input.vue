<template>
  <div class="input-group">
    <input
      v-bind="$attrs"
      v-bind:value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
</script>

<style scoped>
/* Estilos para o componente de input */
.input-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
