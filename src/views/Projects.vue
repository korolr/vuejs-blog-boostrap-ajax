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
</template>


<script>

  export default{
    data: () => {
      return {
      }
    },
    created: () => document.title = 'Проекты'

  }
</script>
