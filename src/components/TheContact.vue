<script setup>
import MainButton from './MainButton.vue'
</script>

<template>
    <main class="container mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <section class="  bg-amber-50/60 px-6 py-8 md:px-10 md:py-10">
            <div class="flex flex-col md:flex-row gap-10 md:items-start">
                <!-- Texte principal -->
                <div class="md:flex-1">
                    <h1 class="text-4xl md:text-5xl font-bold tracking-tight">Contact</h1>
                    <p class="mt-4 text-lg text-gray-800 leading-relaxed">
                        Je suis disponible pour des projets de développement front-end, d’intégration
                        et de design produit, ainsi que pour des collaborations mêlant design et médiation culturelle.
                    </p>
                    <p class="mt-3 text-base text-gray-700">
                        Que vous ayez une idée claire ou simplement l’envie de discuter d’une piste, n’hésitez pas à
                        m’écrire.
                    </p>

                    <div class="mt-6">
                        <a href="mailto:mathilde@ancay.ch">
                            <MainButton type="button">
                                Écrire à mathilde@ancay.ch
                            </MainButton>
                        </a>

                    </div>
                </div>
                
            </div>
        </section>
    </main>
</template>
