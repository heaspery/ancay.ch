<script setup>
import data from "../db/projects.json";
const preview = data.portfolio;
</script>

<template>
    <section class="flex flex-wrap justify-center gap-4 mt-12 mb-12">
         <div v-for="(project, index) in preview.reverse().slice(0,3)" :key="index"
            class="lg:basis-1/4 md:basis-1/3 sm:basis-full shrink-0 bg-amber-50 border hover:drop-shadow-lg">
            <router-link :to="'/projects/' + project.id"
                class="inline-flex items-center text-sm font-medium">
                <img class=" object-cover" src="../assets/stoic-700-800.png" alt="" />
            </router-link>
            <div class="p-5 wrap overflow-hidden text-ellipsis">
                <h5>
                    {{ project.titre }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ project.annees }}
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 640px) {
    section {
        flex-direction: column;
        align-items: center;
    }
}
</style>
