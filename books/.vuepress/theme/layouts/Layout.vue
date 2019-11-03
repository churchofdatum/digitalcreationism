<template lang="pug">
.theme-container
  section.cover
    .cover-container
      .cover-hello-world
        Content(slot-key="cover")
        cite.hash-tag
          | #DigitalCreationism
      nav
        ul.language-list
          li
            a(href="/en")
              | EN
          li
            a(href="/ja")
              | JA
          li
            a(href="/ru")
              | RU
          li
            a(href="/fi")
              | FI
  main
    Content(v-if="!($page.frontmatter.home)")
    Content(slot-key="about")
  footer
    small
      | © 2019 Digital Creationism
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
