import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import ListContacts from '../components/ListContacts.vue'
import ContactEdit from '../views/ContactEdit.vue'
import ContactNew from '../views/ContactNew.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    component: Contacts,
    meta: {protectedRoute: true},
    children: [
      {
        path: '',
        name: 'Contacts',
        component: ListContacts
      },
      {
        path: ':id',
        name: 'Edit',
        component: ContactEdit,
        meta: {protectedRoute: true}
      },
      {
        path: 'new',
        name: 'New',
        component: ContactNew,
        meta: {protectedRoute: true}
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* Global Before Guards */
router.beforeEach((to,from,next) =>{
  const isProtected  = to.matched.some(item => item.meta.protectedRoute)

  /* verifying token existence */
  if(isProtected && store.state.token === null){
    next('/')
  }else{
    next()
  }
})

export default router
