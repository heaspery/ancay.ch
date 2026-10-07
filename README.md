# ancay.ch

Personal portfolio website built with Vue 3 and Vite. It presents my projects and experience across design, development, and cultural mediation.

## Tech stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeVue](https://primevue.org/)

## Requirements

- Node.js 20 or newer
- npm

## Getting started

Clone the repository and install its dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The site is then available at the local URL printed by Vite.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production version in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── components/   Vue components for the portfolio pages and UI
├── db/           Portfolio project data
├── router/       Vue Router configuration
├── assets/       Images and other bundled assets
├── App.vue       Application shell
└── main.js       Application entry point
```

The application uses hash-based routing, with pages for the portfolio, project details, about, and contact sections.
