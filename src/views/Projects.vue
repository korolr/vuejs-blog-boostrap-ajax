<template lang="pug">
  div
    .intro-header(style="background-color: #26A69A")
      .container
        .row
          .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
            .post-heading
              h1  Мои проекты
              h2.subheading Мои работы где-то тут
    .container
      .row
        .col-lg-8.col-lg-offset-2.col-md-10.col-md-offset-1
          h1  Проекты
          .form-group(:class="{'has-error': errors.has('email') }")
            label.control-label(for='email') Email
            input.form-control(v-model='email', v-validate='email', data-rules='required|email', type='email', placeholder='Email')
            p.text-danger(v-if="errors.has('email')") {{ errors.first(&apos;email&apos;) }}
</template>


<script>

  module.exports = {
    data: function() {
      return {
      }
    },
    created: function() {
      document.title = 'Проекты'
    }

  }
</script>
