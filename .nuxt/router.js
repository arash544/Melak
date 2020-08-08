import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69870d98 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _199d68af = () => interopDefault(import('../pages/authors.vue' /* webpackChunkName: "pages/authors" */))
const _751e6ff2 = () => interopDefault(import('../pages/authors/index.vue' /* webpackChunkName: "pages/authors/index" */))
const _590bc6da = () => interopDefault(import('../pages/authors/_id.vue' /* webpackChunkName: "pages/authors/_id" */))
const _1f005ef2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5a5aca96 = () => interopDefault(import('../pages/cards/_id.vue' /* webpackChunkName: "pages/cards/_id" */))
const _0dfd2f6d = () => interopDefault(import('../pages/tags/_id.vue' /* webpackChunkName: "pages/tags/_id" */))
const _2a17580e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _69870d98,
    name: "about"
  }, {
    path: "/authors",
    component: _199d68af,
    children: [{
      path: "",
      component: _751e6ff2,
      name: "authors"
    }, {
      path: ":id",
      component: _590bc6da,
      name: "authors-id"
    }]
  }, {
    path: "/contact",
    component: _1f005ef2,
    name: "contact"
  }, {
    path: "/cards/:id?",
    component: _5a5aca96,
    name: "cards-id"
  }, {
    path: "/tags/:id?",
    component: _0dfd2f6d,
    name: "tags-id"
  }, {
    path: "/",
    component: _2a17580e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
