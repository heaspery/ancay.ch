<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheProjectCard from './TheProjectCard.vue'
import TheCompetence from './TheCompetence.vue';
import TheMailWidget from './TheMailWidget.vue';
import TheHero from './TheHero.vue';
</script>

<template>
  <section class="container mx-auto px-4 bg-amber-50 mb-12">
    <TheHero />
  </section>

  <section>
    <TheCompetence />
  </section>

  <section class="container mx-auto px-4 mb-12 text-center">
    <h1 class="text-5xl font-bold mb-12">Mes derniers projets</h1>
    <TheProjectCard />
  </section>

  <section class="mb-12 mt-24">
    <TheMailWidget />
  </section>

</template>
