import Vue from 'vue'
import VueRouter from 'vue-router'
import SubmitContainer from '../views/SubmitContainer.vue'
import DeckList from '../views/DeckList.vue'
import { DECK_VIEW, NEW_DECK } from '../constants/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: SubmitContainer
  },
  {
    path: '/deck/new',
    name: NEW_DECK,
    component: SubmitContainer
  },
  {
    path: '/deck/:id',
    name: DECK_VIEW,
    component: DeckList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
