<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div>
    Hello i18n
    <form>
      <select v-model="locale">
        <option value="living_th">th</option>
        <option value="living_en">en</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
