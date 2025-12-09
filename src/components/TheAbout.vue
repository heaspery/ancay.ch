```vue
<script setup>
import MainButton from './MainButton.vue'
import TheMailWidget from './TheMailWidget.vue'
import fetImg from '../assets/fet-700-800.png'
import artiosImg from '../assets/artios-700-800.png'
</script>

<template>
    <main class="container mx-auto max-w-4xl px-6 lg:px-8 pb-20">

        <!-- Header: name, short description and profile picture -->
        <section class="mt-12 mb-14  p-8 md:p-10 ">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:flex-1">
                    <h1 class="text-5xl md:text-6xl font-bold tracking-tight">Mathilde Ançay</h1>
                    <p class="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                        Développeuse web basée en Suisse. J'aime travailler à l'intersection du design, de la médiation
                        culturelle et de la technique — pour créer des expériences claires, accessibles et esthétiques.
                    </p>

                    <div class="mt-6 flex gap-4">
                        <RouterLink to="/projects">
                            <MainButton type="submit">Mes projets</MainButton>
                        </RouterLink>
                        <a class="self-center text-base text-gray-600 underline" href="#contact">Me contacter</a>
                    </div>
                </div>

                <div class="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border">
                    <img src="/src/assets/mathilde-ancay.png" alt="Portrait Mathilde"
                        class="w-full h-full object-cover object-center" />
                </div>
            </div>
        </section>

        <!-- Compétences (dropdown) -->
        <section id="skills" class="mb-14">
            <details class=" -xl p-6 md:p-7" open>
                <summary class="flex items-baseline justify-between gap-4 cursor-pointer list-none">
                    <h3 id="skills-heading" class="text-3xl font-semibold tracking-tight">
                        Mes compétences
                    </h3>
                    <p class="text-sm text-gray-500">
                        Développement front-end, intégration, design produit
                    </p>
                </summary>

                <div class="mt-6 grid md:grid-cols-3 gap-8">
                    <!-- Techniques -->
                    <div>
                        <h4 class="text-xs font-semibold tracking-wide text-gray-600 uppercase mb-3">
                            Techniques
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                HTML
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                CSS / Tailwind
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                JavaScript
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Vue
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                React
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                TypeScript
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                PHP / Laravel
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                SQL
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                MongoDB
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Docker
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Vite
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Express.js
                            </span>
                        </div>
                    </div>

                    <!-- Logiciels -->
                    <div>
                        <h4 class="text-xs font-semibold tracking-wide text-gray-600 uppercase mb-3">
                            Logiciels
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                GitHub
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Figma
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Photoshop
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Illustrator
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Premiere Pro
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                InDesign
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                WordPress
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Notion
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Trello
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Miro
                            </span>
                        </div>
                    </div>

                    <!-- Interpersonnelles & langues -->
                    <div>
                        <h4 class="text-xs font-semibold tracking-wide text-gray-600 uppercase mb-3">
                            Interpersonnelles & langues
                        </h4>
                        <ul class="space-y-1 text-base text-gray-700 mb-4">
                            <li>Travail en équipe</li>
                            <li>Gestion de projet</li>
                            <li>Créativité</li>
                            <li>Capacités rédactionnelles</li>
                        </ul>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>Français&nbsp;: langue maternelle</li>
                            <li>Anglais&nbsp;: courant (C1)</li>
                            <li>Allemand&nbsp;: intermédiaire (B2)</li>
                        </ul>
                    </div>
                </div>
            </details>
        </section>

        <!-- Curriculum Vitae with collapsible subsections -->
        <section id="curriculum-vitae" class="mb-10">
            <h2 class="text-4xl font-bold tracking-tight mb-6">Parcours</h2>

            <div class="space-y-6">
                <details class="border -xl p-6 md:p-7" open>
                    <summary class="cursor-pointer text-xl font-semibold">
                        Formation
                    </summary>
                    <div class="mt-4 grid md:grid-cols-1 gap-5">
                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2023–2026</time>
                            <h4 class="mt-1 font-semibold text-lg">Bachelor en Ingénierie des Médias</h4>
                            <p class="text-base text-gray-700">
                                Haute-école d'Ingénierie et de gestion du canton de Vaud
                            </p>
                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2019–2023</time>
                            <h4 class="mt-1 font-semibold text-lg">Bachelor en Lettres</h4>
                            <p class="text-base text-gray-700">
                                Français médiéval et philosophie, Université de Lausanne
                            </p>
                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2018–2019</time>
                            <h4 class="mt-1 font-semibold text-lg">Année propédeutique</h4>
                            <p class="text-base text-gray-700">
                                Haute-école d'Art et de Design du Valais
                            </p>
                        </article>
                    </div>
                </details>

                <details class="border -xl p-6 md:p-7">
                    <summary class="cursor-pointer text-xl font-semibold">
                        Expériences professionnelles
                    </summary>
                    <div class="mt-4 grid gap-5">
                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2025</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Avalia Systems — Développeuse full-stack (Yverdon-les-Bains)
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Stage de 6 semaines : apprentissage et mise en pratique de nouvelles technologies.
                            </p>
                            <ul class="list-disc list-inside text-base space-y-1">
                                <li>Apprentissage de nouvelles technologies (React, Backstage, TypeScript)</li>
                                <li>Mise en pratique et développement d'une application web</li>
                            </ul>
                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2023</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Groupe R Management — Stage en marketing (Fribourg)
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Stage de 5 mois — communication interne/externe.
                            </p>
                            <ul class="list-disc list-inside text-base space-y-1">
                                <li>Design graphique et montage vidéo</li>
                                <li>Gestion des réseaux sociaux et newsletters</li>
                                <li>Gestion de sites web et SEO</li>
                            </ul>
                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2016–2018</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Groupe R Management — Animatrice en médiation culturelle
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Développement d'un jeu de cartes pour la médiation culturelle.
                            </p>
                            <ul class="list-disc list-inside text-base space-y-1">
                                <li>Recherches scientifiques</li>
                                <li>Design du jeu de cartes</li>
                                <li>Médiation et présentation au public</li>
                            </ul>
                        </article>
                    </div>
                </details>
            </div>
        </section>

    </main>
</template>

<style scoped>
@media (max-width: 640px) {

    header,
    main {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
```
