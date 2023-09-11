<script setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="living_en">en</option>
        <option value="living_th">th</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
