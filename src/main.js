import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VeeValidate from "vee-validate";



let Contacts = require('./views/Contacts.vue');
let Projects = require('./views/Projects.vue');
let Blog = require('./views/Blog.vue');
let Post = require('./views/Post.vue');

let Hello = require('./views/Hello.vue');
let Test = require('./views/Test.vue');


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);


let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
    { path: '/', component: Blog },
    { path: '/blog', component: Blog },
    { path: '/post/:id', name: 'post', component: Post }
  ]
});

new Vue({
  el: '#app',
  components: {
    Hello,
    Test,

  },
  router: router
});
