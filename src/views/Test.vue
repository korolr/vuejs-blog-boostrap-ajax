<template lang="pug">
header
  nav.navbar.navbar-default.navbar-custom.navbar-fixed-top
    .container-fluid
      .navbar-header.page-scroll
        button.navbar-toggle(type='button', data-toggle='collapse', data-target='#bs-example-navbar-collapse-1')
          span.sr-only Toggle navigation
          span Menu
          i.fa.fa-bars
        router-link.navbar-brand(to='/') Vuejs Bootstrap
      #bs-example-navbar-collapse-1.collapse.navbar-collapse
        ul.nav.navbar-nav.navbar-right
          li
            router-link(to='/projects')  Проекты
          li
            router-link(to='/blog', active-class='grey')  Блог
          li
            router-link(to='/contacts')  Контакты
</template>
