<template lang="pug">
div
  .intro-header(style="background-image: url('https://d262ilb51hltx0.cloudfront.net/max/2000/1*9qGFK0jjigADvy4BF_PZ_A.jpeg')")
    .container
      .row
        .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
          .site-heading
            h1 Vuejs blog
            hr.small
            span.subheading A Clean Blog Theme by Vuejs Bootstrap
  .container
    .row
      .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
        .post-preview(v-for='(post, index) in posts')
          router-link(:to="{ name: 'post', params: { id: index } }")
            h2.post-title  {{ post.title }}
            h3.post-subtitle  {{ post.body }}
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
