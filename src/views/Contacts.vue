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
                input#name.form-control(v-validate="post.id" data-rules="required|alpha" v-model='post.id', type='text', placeholder='Name', required='', data-validation-required-message='Please enter your name.')
                p.text-danger(v-if="errors.has('post.id')")    Enter you name
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Email Address
                input#email.form-control(v-validate="post.body" data-rules="required|email" v-model='post.body', type='email', placeholder='Email Address', required='', data-validation-required-message='Please enter your email address.')
                p.text-danger(v-if="errors.has('post.body')")    Enter you valid email
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Phone Number
                input#phone.form-control(v-validate="post.title" data-rules="required|numeric" v-model='post.title', type='tel', placeholder='Phone Number', required='', data-validation-required-message='Please enter your phone number.')
                p.text-danger(v-if="errors.has('post.title')")    Enter you valid telefon number
                p.help-block.text-danger
            .row.control-group
              .form-group.col-xs-12.floating-label-form-group.controls
                label Message
                textarea#message.form-control(v-validate="post.userId" data-rules="required|min:30" v-model='post.userId', rows='5', placeholder='Message', required='', data-validation-required-message='Please enter a message.')
                p.text-danger(v-if="errors.has('post.userId')")    Enter over 30 char
                p.help-block.text-danger
            br
            #success
            .row
              .form-group.col-xs-12
                button.btn.btn-default(v-if="!errors.has('post.userId') && !errors.has('post.title') && !errors.has('post.id') && !errors.has('post.body') ") Send
</template>

<script>

  export default {
    data: () => {
      return {
        post: {
          body: '',
          title: '',
          userId: '',
          id: '',
        }
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
    created: () => document.title = 'Контакты'


  }
</script>
