<script setup>
import { ref, computed } from "vue";
import data from "../db/projects.json";
import resolveIllustration from "../utils/illustrationsResolver";

const preview = data.portfolio;

const filters = [
    "Tous",
    "Développement",
    "Design",
    "Médiation culturelle",
];

const selectedFilter = ref("Tous");

// correspondance label bouton -> valeur dans "domaines"
const domainMap = {
    "Développement": "dev",
    "Design": "design",
    "Médiation culturelle": "médiation culturelle",
    "Game design": "game",
    "Littérature": "littérature"
};

const filteredProjects = computed(() => {
    if (selectedFilter.value === "Tous") {
        return preview;
    }

    const domainKey = domainMap[selectedFilter.value];
    if (!domainKey) return preview;

    return preview.filter(project =>
        project.domaines.includes(domainKey)
    );
});
</script>


<template>
    <section class="flex flex-col text-center font-bold justify-center gap-4 mt-12 mb-12">
        <h1 class="text-5xl">
            Mes projets
        </h1>
        <p class="mt-4 font-normal">
            Voici un aperçu de tous mes projets, réalisés durant ma formation et en autonomie.
        </p>
        <div class="flex justify-center gap-4 mt-8  ">
            <button v-for="(filter, index) in filters" :key="index" class=" hover:bg-black hover:text-amber-50 px-4 py-2 border cursor-pointer"
                :class="selectedFilter === filter ? 'bg-black text-white' : ''" @click="selectedFilter = filter">
                {{ filter }}
            </button>
        </div>
    </section>
    <section class="flex flex-wrap justify-center gap-8 mt-12 mb-12 px-8 py-8">
        <div v-for="(project, index) in filteredProjects" :key="index"
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
