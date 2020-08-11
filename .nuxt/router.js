import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67afa5c6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3cda2099 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _50bbbdec = () => interopDefault(import('../pages/authors/_id.vue' /* webpackChunkName: "pages/authors/_id" */))
const _71d92e47 = () => interopDefault(import('../pages/cards/_id.vue' /* webpackChunkName: "pages/cards/_id" */))
const _4cece19b = () => interopDefault(import('../pages/tags/_id.vue' /* webpackChunkName: "pages/tags/_id" */))
const _f130feea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _67afa5c6,
    name: "about"
  }, {
    path: "/contact",
    component: _3cda2099,
    name: "contact"
  }, {
    path: "/authors/:id?",
    component: _50bbbdec,
    name: "authors-id"
  }, {
    path: "/cards/:id?",
    component: _71d92e47,
    name: "cards-id"
  }, {
    path: "/tags/:id?",
    component: _4cece19b,
    name: "tags-id"
  }, {
    path: "/",
    component: _f130feea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
