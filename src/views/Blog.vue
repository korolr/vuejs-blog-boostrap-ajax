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
        .col-md-i.col-centered
          #custom-search-input
            .input-group.col-md-12
              input.form-control.input-lg(v-model='search', type='text', placeholder='Если хочешь найти что-то тебе сюда')
              span.input-group-btn
                button.btn.btn-info.btn-lg(type='button')
                  i.glyphicon.glyphicon-search
        h2 {{ search }}
        .post-preview(v-for="(post, index) in posts")
          router-link(:to="{ name: 'post', params: { id: index } }")
            h2.post-title  {{ post.title }}
            h3.post-subtitle  {{ post.body }}
</template>

<script >

  module.exports = {

    data: function() {
        return {
            search: '',
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

  <style lang="sass">
    #custom-search-input
      position: center
      padding: 3px
      border: solid 1px #E4E4E4
      border-radius: 6px
      background-color: #fff
      input
        border: 0
        box-shadow: none
      button
        margin: 2px 0 0 0
        background: none
        box-shadow: none
        border: 0
        color: #666666
        padding: 0 8px 0 10px
        border-left: solid 1px #ccc
        &:hover
          border: 0
          box-shadow: none
          border-left: solid 1px #ccc
      .glyphicon-search
        font-size: 23px
  </style>
