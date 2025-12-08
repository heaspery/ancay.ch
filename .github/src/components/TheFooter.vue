<script setup>
import { Linkedin, Github } from 'lucide-vue-next';

</script>

<template>
    <footer class="border-t flex flex-col items-center justify-between p-4 gap-4">
        <div class="flex flew-grow gap-8 mx-auto mt-2">
            <a href="https://www.linkedin.com/in/mathilde-an%C3%A7ay-2b4b84236/">
                <Linkedin :stroke-width="1" />
            </a>
            <a href="https://github.com/heaspery">
                <Github  :stroke-width="1" />
            </a>
        </div>
        <div class=" mx-auto text-sm text-black">
            © {{ new Date().getFullYear() }} — Mathilde Ançay
        </div>
    </footer>
</template>
