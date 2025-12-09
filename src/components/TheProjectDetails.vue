<script setup>
import { Undo2 } from "lucide-vue-next";
import MainButton from "./MainButton.vue";
import { useRoute } from "vue-router";
import data from "../db/projects.json";
import resolveIllustration from "../utils/illustrationsResolver";

const route = useRoute();
const id = parseInt(route.params.id);

const project = data.portfolio.find((p) => p.id === id);
const domaines = project.domaines.join(", ");
const link = project.links || "yes";
</script>

<template>
    <div class="mx-auto bg-amber-50 px-4 max-w-4xl flex flex-col items-start mt-12">
        <RouterLink to="/projects" class="inline-flex items-center text-sm font-medium">
            <Undo2 :stroke-width="1.5" />
        </RouterLink>
    </div>
    <section v-if="project"
        class="container mx-auto px-4 bg-amber-50 pt-12 pb-12 md:gap-12 max-w-4xl flex flex-col items-center">
        
        <div class="flex flex-col md:flex-row gap-2 md:gap-12 items-start">
            <div class="basis-64 flex flex-col gap-6">
                <h1 class="text-4xl font-bold">{{ project.titre }} </h1>
                <h2 class="text-2xl">{{ project.annees }} / {{ domaines }}</h2>
                <h3><strong>Technologies utilisées</strong>: {{ project.technologies.join(",") }}</h3>
                <p class="mb-4">
                    {{ project.description_1 }}
                </p>
            </div>
            <div class="basis-lg">
                <img :src="resolveIllustration(project.illustrations[0].path)" alt="Image du projet"
                    class="w-full h-auto object-contain"
                    :class="project.illustrations[0].isMockup ? '' : 'border drop-shadow-2xl'" />

            </div>
        </div>

        <div class="mt-2 md:mt-12">
            <div v-if="project.illustrations[1]"
                :class="project.illustrations[1].isMockup ? '' : 'border drop-shadow-2xl'">
                <img :src="resolveIllustration(project.illustrations[1].path)" alt="Image du projet"
                    class="w-full h-auto object-contain max-w-2xl" />
            </div>
        </div>

        <div class="flex flex-col items-start gap-2 mt-8 mb-2">
            <h2 class="text-2xl">{{ project.titre_2 }}</h2>
            <p>
                {{ project.description_2 }}
            </p>
        </div>

        <div class="flex md:flex-row flex-col gap-4">
            <div v-if="project.illustrations[3]">
                <img :src="resolveIllustration(project.illustrations[3].path)" alt="Image du projet"
                    class="w-full h-auto object-contain"
                    :class="project.illustrations[3].isMockup ? '' : 'border drop-shadow-2xl'" />
            </div>
            <div v-if="project.illustrations[2]">
                <img :src="resolveIllustration(project.illustrations[2].path)" alt="Image du projet"
                    class="w-full h-auto object-contain"
                    :class="project.illustrations[2].isMockup ? '' : 'border drop-shadow-2xl'" />
            </div>
        </div>

        <div v-if="project.liens.length > 0" class="flex justify-center mt-2">
            <div v-for:="(link, index) in project.liens" :key="index" class="mx-4">
                <MainButton class="mx-auto mt-6">
                    <a :href="link.url">{{ link.label }}</a>
                </MainButton>
            </div>
        </div>
    </section>

    <section v-else>
        <p>Projet introuvable.</p>
    </section>
</template>
