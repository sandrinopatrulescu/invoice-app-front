<script setup lang="ts">
const props = defineProps<{ id?: number }>()
</script>

<template>
  <h1>invoice editor {{ props.id || 'ADD' }}</h1>
</template>

<style scoped></style>
