<script setup>
import data from "../db/projects.json";
// keep only the last 3 projects from the array
const preview = data.portfolio.slice(-3);
import resolveIllustration from "../utils/illustrationsResolver.js";
</script>

<template>
    <section class="flex flex-wrap justify-center gap-4 mt-12 mb-12">
    <div v-for="(project, index) in preview" :key="project.id"
            class="text-center lg:basis-1/4 md:basis-1/3 sm:basis-full shrink-0 bg-amber-50 border hover:drop-shadow-lg">

            <router-link :to="'/projects/' + project.id" class="inline-flex items-center text-sm font-medium">
                <img class=" w-full object-cover" :src="resolveIllustration(project.illustrations[0].path)" alt="Image du projet" />
            </router-link>
            <div class="p-5 wrap overflow-hidden text-lg text-ellipsis">
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
