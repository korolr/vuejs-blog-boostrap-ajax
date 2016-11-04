var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var VuePaginate = require('vue-paginate')

var Brands = require('./views/Brands.vue')
var Contacts = require('./views/Contacts.vue')
var Projects = require('./views/Projects.vue')
var Blog = require('./views/Blog.vue')
var Post = require('./views/Post.vue')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePaginate)


var router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/brands', component: Brands },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
    { path: '/', component: Blog },
    { path: '/blog', component: Blog },
    { path: '/post/:id', name: 'post', component: Post }
  ]
})

new Vue({
  el: '#app',
  router: router
})
