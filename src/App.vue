<!-- src/App.vue -->
<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-amber-50">
    <a href="#content" class="sr-only focus:not-sr-only focus:p-2">Aller au contenu</a>

    <!-- Header / Nav -->
    <TheHeader />

    <!-- Contenu -->
    <main id="content" class="flex-1 p-0 m-0">
      <RouterView />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
