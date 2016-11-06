<template lang="pug">
  div
    .intro-header(style="background-image: url('https://lh3.ggpht.com/LK9ybCkPixB2--dRdvocRJiZYkeXzyazC6eFNLNqN37Ae3CHoApqu8XDTennLeo8OA=h1080')")
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
