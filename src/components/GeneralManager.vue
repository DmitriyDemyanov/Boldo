<template>
  <div>
    <div class="img">
      <img :src="require(`@/assets/${manager.img}.png`)" alt="photo">
    </div>
    <div class="full-name">{{ manager.fullName }}</div>
    <div class="position">{{ manager.position }}</div>
  </div>
</template>

<script>
export default {
name: 'GeneralManager',
props: {
  manager: {
    type: Object,
    required: true,
  }
}
}
</script>

<style scoped>
.full-name {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  margin-top: 24px;
  margin-bottom: 12px;
}
.position {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
}
</style>