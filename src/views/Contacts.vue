<template lang="pug">
  div
    .intro-header(style="background-image: url('http://s1.funon.cc/img/orig/201608/09/57a98eb3cdf63.png')")
      .container
        .row
          .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
            .post-heading
              h1  Связь со мной
              h2.subheading Отправь мне запрос
    .container
      .row
        .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
          p
            | Send post response
          form#contactForm(name='sentMessage', novalidate='', @submit.prevent='savePost()')
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Name
                input#name.form-control(v-model='post.id', type='text', placeholder='Name', required='', data-validation-required-message='Please enter your name.')
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Email Address
                input#email.form-control(v-model='post.body', type='email', placeholder='Email Address', required='', data-validation-required-message='Please enter your email address.')
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Phone Number
                input#phone.form-control(v-model='post.title', type='tel', placeholder='Phone Number', required='', data-validation-required-message='Please enter your phone number.')
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Message
                textarea#message.form-control(v-model='post.userId', rows='5', placeholder='Message', required='', data-validation-required-message='Please enter a message.')
                p.help-block.text-danger
            br
            #success
            .row
              .form-group.col-xs-12
                button.btn.btn-default Send
</template>

<script>

  module.exports = {
    data: function() {
      return {
        post: {}
      }
    },
    computed: {
        resource: function() {
            return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
        }
      },
    methods: {
      savePost: function() {

              this.resource.save(this.post)

  },
    },

  }
</script>
