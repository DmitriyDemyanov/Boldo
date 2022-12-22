<template>
  <div class="wrap-item d-flex justify-content-between align-items-center">
    <div class="title">{{ title.text }}</div>
    <img src="@/assets/shevron-down.svg" alt="icon">
  </div>
</template>

<script>
export default {
name: 'OfficeItem',
props: {
  title: {
    type: Object,
    required: true,
  }
}
}
</script>

<style scoped>

.wrap-item {
  padding-bottom: 16px;
  border-bottom: 1px solid #C4C4C4;
  margin-bottom: 32px;
}

</style>