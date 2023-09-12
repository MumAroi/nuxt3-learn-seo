<template>
  <div>
    Hello page route demo
    <br/>
    <NuxtLink to="/living_en/page-route-demo/with-q-string" >Link</NuxtLink>
    <br/>
    <NuxtLink :to="{path:'/living_en/page-route-demo/with-q-string', query:{name: 'living-post', type:'doc'}}" >Link</NuxtLink>
    <br/>
    <button @click="navigate">
      Link with query string
    </button>
  </div>
</template>


<script setup lang="ts">
const name = ref('living-post');
const type = ref(1);

function navigate(){
  return navigateTo({
    path: '/living_en/page-route-demo/with-q-string',
    query: {
      name: name.value,
      type: type.value
    }
  })
}
</script>
