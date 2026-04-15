<script setup>
import MainButton from './MainButton.vue'
import { Github, Linkedin } from 'lucide-vue-next'

</script>

<template>
    <main class="container mx-auto max-w-4xl px-6 lg:px-8 pb-20">

        <!-- Header: name, short description and profile picture -->
        <section class="mt-12 mb-14  p-8 md:p-10 ">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:flex-1">
                    <h1 class="text-5xl md:text-6xl font-bold tracking-tight">Mathilde Ançay</h1>
                    <p class="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                        Développeuse web basée en Suisse, je travaille à l’intersection du développement, de la
                        médiation culturelle et du design, avec un intérêt particulier pour la création d’expériences
                        interactives claires, accessibles et efficaces.
                    </p>

                    <div class="mt-6 flex gap-4">
                        <RouterLink to="/projects">
                            <MainButton type="submit">Mes projets</MainButton>
                        </RouterLink>
                        <a class="self-center text-base text-gray-600 underline" href="#contact">Me contacter</a>
                    </div>
                </div>

                <div class="flex flex-col items-center md:items-start">
                    <div class="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border">
                        <img src="/src/assets/mathilde-ancay.png" alt="Portrait Mathilde"
                            class="w-full h-full object-cover object-center" />
                    </div>
                    <div id="links" class="mt-4 flex items-center gap-4">
                        <a href="https://github.com/heaspery" target="_blank" rel="noreferrer"
                            class="inline-flex items-center justify-center text-[#181717] transition-opacity hover:opacity-80"
                            aria-label="GitHub">
                            <Github :stroke-width="1.6" />
                        </a>
                        <a href="https://www.linkedin.com/in/mathilde-an%C3%A7ay-2b4b84236/" target="_blank"
                            rel="noreferrer" class="inline-flex items-center justify-center transition-opacity hover:opacity-80"
                            aria-label="LinkedIn">
                            <Linkedin :stroke-width="1.4" />
                        </a>

                    </div>
                </div>
            </div>
        </section>

        <!-- Compétences (always open) -->
        <section id="skills" class="mb-14">
            <div class="p-6 md:p-7 rounded-lg ">
                <h3 id="skills-heading" class="text-3xl font-semibold tracking-tight">
                    Mes compétences
                </h3>

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
                                CSS / Tailwind CSS
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                JavaScript
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                TypeScript
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Vite
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Vue
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                React (bases)
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                PHP
                            </span>

                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Laravel (bases)
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                SQL
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Java (bases)
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Git
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                GitHub
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
                                InDesign
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                WordPress
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                WooCommerce
                            </span>
                            <span
                                class="inline-flex items-center border border-gray-200 px-3 py-1 text-sm text-gray-800">
                                Shopify
                            </span>
                        </div>
                    </div>

                    <!-- Interpersonnelles & langues -->
                    <div>
                        <h4 class="text-xs font-semibold tracking-wide text-gray-600 uppercase mb-3">
                            Interpersonnelles & langues
                        </h4>
                        <ul class="space-y-1 text-base text-gray-700 mb-4">
                            <li>Autonomie et empathie</li>
                            <li>Créativité, curiosité et éloquence</li>
                            <li>Capacités rédactionnelles, analytiques et critiques</li>
                        </ul>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>Français&nbsp;: langue maternelle</li>
                            <li>Anglais&nbsp;: courant (C1)</li>
                            <li>Allemand&nbsp;: intermédiaire (B2)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Curriculum Vitae with collapsible subsections -->
        <section id="curriculum-vitae" class="mb-10">
            <h2 class="text-4xl font-bold tracking-tight mb-6">Parcours</h2>

            <div class="space-y-6">

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
                                <li>Apprentissage autonome de nouvelles technologies (React, Backstage, TypeScript)</li>
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
                                L'Éprouvette, UNIL — Animatrice en médiation culturelle
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
                <details class="border -xl p-6 md:p-7">
                    <summary class="cursor-pointer text-xl font-semibold">
                        Expériences personnelles
                    </summary>
                    <div class="mt-4 grid gap-5">
                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">Depuis 2024</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Bénévole pour l’association Fully en Transition, développeuse web
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Membre de l’association Fully en Transition, je suis chargée de m’occuper de son
                                identité graphique, du développement de son site web et de sa maintenance </p>
                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2026</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Conférencière à la BackstageCon, Amsterdam
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Lors de la BackstageCon (KubeCon + CloudNativeCon), j’ai présenté mon expérience
                                avec Backstage réalisée en stage chez Avalia Systems.
                            </p>

                        </article>

                        <article class="pl-6 py-2">
                            <time class="text-sm text-gray-600 font-medium">2025</time>
                            <h4 class="mt-1 font-semibold text-lg">
                                Du savoir au jeu : Microbes et santé, GameLab UNIL & CHUV
                            </h4>
                            <p class="text-base text-gray-700 mb-2">
                                Lors de cette école d’été d’une semaine organisée par l’Université de Lausanne,
                                j’ai eu l’occassion de suivre des nombreuses interventions sur les sujets liés
                                aux jeux de médiations scientifiques, particulièrement liés au domaine de la santé.
                            </p>
                        </article>
                    </div>
                </details>
                <details class="border -xl p-6 md:p-7">
                    <summary class="cursor-pointer text-xl font-semibold">
                        Formations
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
