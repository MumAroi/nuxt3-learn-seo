<script lang="ts" setup>
useHead({
    title: "Living the dream",
    meta: [
      {
        name: 'description',
        content: "This is the description of the page",
      },
      // Open Graph
      {
        property: 'og:url',
        content: `https://www.livinginsider.com`
      },
      {
        property: 'og:title',
        content: "Living the dream og title",
      },
      {
        property: 'og:description',
        content: "Living the dream og description",
      },
      {
        property: 'og:type',
        content: 'article',
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: "https://www.livinginsider.com/",
      },
    ],
  })
</script>

<template>
  <div>
    Hello Use Head
  </div>
</template>
