<script lang="ts" setup>
// a. Use the Composition API
// const ogImageOptions = {
//   title: 'My awesome home page.',
// }
// defineOgImage(ogImageOptions)
defineOgImage({
  component: 'OGImageHome',
})

</script>

<template>
  <div>
    <!-- b. OR Component API -->
    <!-- <OgImage v-bind="ogImageOptions" /> -->
    Hello OG Image
  </div>
</template>
