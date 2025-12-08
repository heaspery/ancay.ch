<script setup>
import { ref } from 'vue';
import MainButton from './MainButton.vue';
import illustration3_1 from '../assets/illustration3-1.png';

const tooltip = ref({ show: false, text: '', x: 0, y: 0 });
const svgContainer = ref(null);

function showTooltipForElement(evt, text) {
  const el = evt.currentTarget || evt.target;
  if (!svgContainer.value) return;
  const rect = el.getBoundingClientRect();
  const containerRect = svgContainer.value.getBoundingClientRect();
  const x = rect.left - containerRect.left + rect.width / 2;
  const y = rect.top - containerRect.top - 8; // place above element
  tooltip.value = {
    show: true,
    text,
    x,
    y
  };
}

function hideTooltip() {
  tooltip.value.show = false;
}

</script>


<template>
  <section class="container mx-auto px-4 mb-20 flex flex-col gap-8 items-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Compétences</h2>
      <p class="text-lg">
        Je travaille à l'intersection du <strong>design</strong>, de la
        <strong>conception de produits</strong> et du
        <strong>développement web</strong>, avec une sensibilité particulière
        pour la <strong>médiation culturelle</strong>.
      </p>
    </div>
    <div ref="svgContainer"
      class="container mx-auto pt-2 pb-2 mb-2 max-w-2xl flex flex-col items-center gap-4 min-h-[40vh] md:min-h-[60vh] relative">
      <div class="w-full">
        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 893.06 792.71" class="w-full h-auto">
          <image width="894" height="794" transform="translate(-.27 -.3)" :xlink:href="illustration3_1" />
          <g>
            <g>
              <path d="M605.41,319.23c-20.57-7.51-42.78-11.61-65.95-11.61-45.08,0-86.52,15.52-119.3,41.5"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path
                d="M605.41,319.23c73.68,26.91,126.27,97.62,126.27,180.61,0,106.16-86.06,192.22-192.22,192.22-46.88,0-89.84-16.79-123.2-44.68"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path d="M352.54,454.89c-3.46,14.42-5.3,29.47-5.3,44.95,0,59.28,26.84,112.28,69.02,147.54"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path d="M484.6,454.83c2.99,13.47,4.58,27.46,4.58,41.83,0,61.09-28.5,115.51-72.92,150.72"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path
                d="M230.84,316.1c-73.59,26.96-126.11,97.62-126.11,180.55,0,106.16,86.06,192.22,192.22,192.22,45.08,0,86.52-15.52,119.3-41.5"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path d="M230.84,316.1c20.61-7.55,42.88-11.67,66.11-11.67,46.88,0,89.84,16.79,123.2,44.68"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path
                d="M605.41,319.23c3.46-14.42,5.3-29.47,5.3-44.95,0-106.16-86.06-192.22-192.22-192.22s-192.22,86.06-192.22,192.22c0,14.37,1.59,28.36,4.58,41.83"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path d="M230.84,316.1c14.28,64.33,60.77,116.53,121.69,138.78"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path
                d="M420.16,349.12c-33.16,26.29-57.44,63.29-67.62,105.77,20.57,7.51,42.78,11.61,65.95,11.61s45.5-4.12,66.11-11.67c-9.34-42.1-32.48-79-64.44-105.71Z"
                style="fill: none; stroke: #000; stroke-dasharray: 12.72; stroke-miterlimit: 10; stroke-width: 1.06px;" />
              <path d="M484.6,454.83c59.85-21.92,105.76-72.77,120.81-135.6"
                style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.06px;" />
            </g>
            <text id="design" transform="translate(542.31 506.43)"
              style="font-family: Avenir-Medium, Avenir; font-size: 25.44px; font-weight: 500;" tabindex="0"
              @mouseenter="(e) => showTooltipForElement(e, `&lt;strong&gt;Design &amp; contenu&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;Identité visuelle &amp; charte graphique&lt;/li&gt;&lt;li&gt;UI design (Figma)&lt;/li&gt;&lt;li&gt;Mise en page &amp; print (InDesign)&lt;/li&gt;&lt;li&gt;Création de contenus éditoriaux&lt;/li&gt;&lt;/ul&gt;`)"
              @mouseleave="hideTooltip"
              @focus="(e) => showTooltipForElement(e, `&lt;strong&gt;Design &amp; contenu&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;Identité visuelle &amp; charte graphique&lt;/li&gt;&lt;li&gt;UI design (Figma)&lt;/li&gt;&lt;li&gt;Mise en page &amp; print (InDesign)&lt;/li&gt;&lt;li&gt;Création de contenus éditoriaux&lt;/li&gt;&lt;/ul&gt;`)"
              @blur="hideTooltip">
              <tspan x="0" y="0">Design</tspan>
              <tspan x="0" y="30.53">&amp; contenu</tspan>
            </text>
            <text id="conception" transform="translate(160.43 505.48)"
              style="font-family: Avenir-Medium, Avenir; font-size: 25.44px; font-weight: 500;" tabindex="0"
              @mouseenter="(e) => showTooltipForElement(e, `&lt;strong&gt;Conception &amp; médiation&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;Conception de produits digitaux&lt;/li&gt;&lt;li&gt;Gamification &amp; expérience utilisateur&lt;/li&gt;&lt;li&gt;Médiation culturelle &amp; vulgarisation&lt;/li&gt;&lt;li&gt;Gestion de projet &amp; coordination&lt;/li&gt;&lt;/ul&gt;`)"
              @mouseleave="hideTooltip"
              @focus="(e) => showTooltipForElement(e, `&lt;strong&gt;Conception &amp; médiation&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;Conception de produits digitaux&lt;/li&gt;&lt;li&gt;Gamification &amp; expérience utilisateur&lt;/li&gt;&lt;li&gt;Médiation culturelle &amp; vulgarisation&lt;/li&gt;&lt;li&gt;Gestion de projet &amp; coordination&lt;/li&gt;&lt;/ul&gt;`)"
              @blur="hideTooltip">
              <tspan x="0" y="0">Conception </tspan>
              <tspan x="0" y="30.53">&amp; médiation</tspan>
              <tspan x="140.9" y="30.53" style="letter-spacing: .18em;"> </tspan>
            </text>
            <text id="dev" transform="translate(325.64 212.74)"
              style="font-family: Avenir-Medium, Avenir; font-size: 25.44px; font-weight: 500;" tabindex="0"
              @mouseenter="(e) => showTooltipForElement(e, `&lt;strong&gt;Développement web&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;HTML, CSS, Tailwind CSS&lt;/li&gt;&lt;li&gt;JavaScript, TypeScript&lt;/li&gt;&lt;li&gt;Vue, React&lt;/li&gt;&lt;li&gt;PHP, Laravel, SQL&lt;/li&gt;&lt;/ul&gt;`)"
              @mouseleave="hideTooltip"
              @focus="(e) => showTooltipForElement(e, `&lt;strong&gt;Développement web&lt;/strong&gt;&lt;ul class='text-sm list-disc pl-4 mt-1'&gt;&lt;li&gt;HTML, CSS, Tailwind CSS&lt;/li&gt;&lt;li&gt;JavaScript, TypeScript&lt;/li&gt;&lt;li&gt;Vue, React&lt;/li&gt;&lt;li&gt;PHP, Laravel, SQL&lt;/li&gt;&lt;/ul&gt;`)"
              @blur="hideTooltip">
              <tspan x="0" y="0">Développement </tspan>
              <tspan x="68.35" y="30.53">web</tspan>
            </text>
            <circle cx="419.27" cy="419.4" r="337.35"
              style="fill: none; stroke: #000; stroke-dasharray: 12.77 12.77; stroke-miterlimit: 10; stroke-width: 1.06px;" />
          </g>
        </svg>
      </div>

      <div v-if="tooltip.show" v-html="tooltip.text" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
        class="absolute z-50 bg-black text-white text-sm px-3 py-2 pointer-events-none transform -translate-x-1/2 -translate-y-full max-w-xs text-left rounded">
      </div>
    </div>
    <div>
      <RouterLink to="/projects">
        <MainButton type="submit">Voir mes projets</MainButton>
      </RouterLink>
    </div>

  </section>

</template>

<style></style>