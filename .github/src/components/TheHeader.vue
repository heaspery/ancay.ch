<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'

const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)




</script>

<template>
    <header class="border-b">
        <nav class="container mx-auto flex items-center justify-between px-8 py-8  text-black">
            <RouterLink to="/" class="font-semibold text-xl" @click="close">Mathilde Ançay</RouterLink>

            <!-- Bouton burger (mobile) -->
            <button class="md:hidden inline-flex items-center p-2" :aria-expanded="open ? 'true' : 'false'"
                aria-controls="primary-nav" @click="toggle">
                <span class="sr-only">Ouvrir le menu</span>
                <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Menu desktop -->
            <ul class="hidden md:flex gap-10 text-lg  text-black">
                <li>
                    <RouterLink to="/projects" class="hover:underline"
                      :class="{ 'font-bold': $route.path === '/projects' }">Projets</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="hover:underline"
                      :class="{ 'font-bold': $route.path === '/about' }"
                      >À propos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="hover:underline"
                      :class="{ 'font-bold': $route.path === '/contact' }"
                      >Contact</RouterLink>
                </li>
            </ul>
        </nav>

        <!-- Menu mobile -->
        <div v-show="open" id="primary-nav" class="md:hidden border-t">
            <ul class="flex flex-col gap-2 px-4 py-3 text-lg text-black">
                <li>
                    <RouterLink to="/projects" class="block py-2" @click="close"
                      :class="{ 'font-bold': $route.path === '/projects' }">Projets</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="block py-2" @click="close"
                      :class="{ 'font-bold': $route.path === '/about' }">À propos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="block py-2" @click="close"
                      :class="{ 'font-bold': $route.path === '/contact' }">Contact</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
