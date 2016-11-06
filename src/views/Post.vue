<template lang="pug">
div
  .intro-header(style="background-image: url('http://orig01.deviantart.net/b86e/f/2013/318/b/6/flash_background_test__complete_by_gwoolley-d6u85kg.jpg')")
    .container
      .row
        .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
          .post-heading
            h1 {{ post.title }}
            h2.subheading {{ post.title }}
  .container(v-if='post')
    .row
      .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
        p {{ post.body }}
        p {{ post.body }}
        p {{ post.body }}
        p {{ post.body }}
        p {{ post.body }}
        p {{ post.body }}
</template>

<script>

  module.exports = {
    data: function() {
      return {
        image: 'img/post-bg.jpg',
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        posts: [],
        post: []
      }
    },
    methods: {
    getAllPosts: function(){
        this.$http.get(this.endpoint).then(function(response){
        this.posts = response.data
        var postId = this.$route.params.id
        this.post = this.posts[postId]
        document.title = this.post.title
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
