<template>
   <div class="container">
      <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div class="post-preview" v-for="post in posts">
              <a href="post.html">
                  <h2 class="post-title">
                      {{ post.title }}
                  </h2>
                  <h3 class="post-subtitle">
                      {{ post.body }}
                  </h3>
              </a>
              <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
          </div>
          </div>
        </div>
  </div>
  <!--
  <div class="blog">
    <div class="blog__post" v-for="(post, index) in posts">
      <img src="https://images.unsplash.com/photo-1415663058438-995397760614?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ee7fb8668a89cb9955e2d9c939abb161" alt="">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'post', params: { id: index } }">Подробнее</router-link>
    </div>
  </div>
-->


</template>

<script>

  module.exports = {
    data: function() {
        return {
            posts: [],
            endpoint: 'https://jsonplaceholder.typicode.com/posts',
            loading: false
        }
    },
    methods: {
    getAllPosts: function(){
        this.$http.get(this.endpoint).then(function(response){
        this.posts = response.data
                   }, function(error){
            //error
        })
    }
    },
    created: function() {
      this.getAllPosts();
      }

    }
</script>
