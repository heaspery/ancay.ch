import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../components/TheHome.vue'
import TheProjectDetails from '../components/TheProjectDetails.vue'
import TheProjectList from '../components/TheProjectList.vue'
import About from '../components/TheAbout.vue'
import Contact from '../components/TheContact.vue'  

const routes = [
  { path: '/', component: About },
  { path: '/projects', component: TheProjectList },
  { path: '/projects/:id', component: TheProjectDetails },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})

export default router 
