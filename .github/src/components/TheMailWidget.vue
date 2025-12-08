<script setup>
import MainButton from './MainButton.vue';
</script>

<template>
    <section class="container flex flex-col gap-4 mx-auto px-4 mb-16 text-center">
        <h2 class="text-3xl font-bold mb-4">Me contacter</h2>
        <p class="mb-4">
            Je suis ouverte à toute discussion, collaboration ou proposition de projet.
        </p>
        <a href="mailto:mathilde@ancay.ch">
            <MainButton type="submit">
            Écrire à mathilde@ancay.ch
            </MainButton>
        </a>
    </section>
</template>