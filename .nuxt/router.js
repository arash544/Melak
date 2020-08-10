import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c8b6e61c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4731ecc5 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d68cd7d0 = () => interopDefault(import('../pages/authors/_id.vue' /* webpackChunkName: "pages/authors/_id" */))
const _456e9f73 = () => interopDefault(import('../pages/cards/_id.vue' /* webpackChunkName: "pages/cards/_id" */))
const _e4e2ca22 = () => interopDefault(import('../pages/tags/_id.vue' /* webpackChunkName: "pages/tags/_id" */))
const _89473092 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c8b6e61c,
    name: "about"
  }, {
    path: "/contact",
    component: _4731ecc5,
    name: "contact"
  }, {
    path: "/authors/:id?",
    component: _d68cd7d0,
    name: "authors-id"
  }, {
    path: "/cards/:id?",
    component: _456e9f73,
    name: "cards-id"
  }, {
    path: "/tags/:id?",
    component: _e4e2ca22,
    name: "tags-id"
  }, {
    path: "/",
    component: _89473092,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
