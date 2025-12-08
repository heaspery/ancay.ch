<script setup>
import MainButton from './MainButton.vue';
import illustration from '../assets/illustration.png';

</script>

<template>
    <div :style="{ backgroundImage: 'url(' + illustration + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }" class="container relative mx-auto pt-24 pb-12 mb-12 max-w-4xl flex flex-col items-center gap-12 min-h-[40vh] md:min-h-[60vh]">
        <div class="">
            <h1 class="text-4xl md:text-6xl sm:text-l font-bold mb-12 text-black ">Bienvenue sur mon portfolio.</h1>
            <p class="sm:text-l md:text-2xl text-black mb-8">
                Découvrez mon <strong>profil interdisciplinaire</strong> entre
                <strong>design graphique</strong>, <strong>conception de produits digitaux</strong>
                et <strong>développement web</strong>.
            </p>
            <p class="sm:text-l md:text-2xl text-black mb-4">
                Je m'intéresse particulièrement à la <strong>gamification</strong> et à la
                <strong>médiation culturelle</strong>, avec une approche
                <strong>critique, justifiée et efficace</strong> des projets.
            </p>
        </div>
        <div>
        <RouterLink to="/about">
            <MainButton type="submit">À propos</MainButton>
        </RouterLink>
        </div>
    </div>
</template>