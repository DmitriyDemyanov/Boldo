<template>
  <div class="grid-container">
    <img src="@/assets/photo-1.png" alt="photo">
    <img src="@/assets/photo-2.png" alt="photo">
    <img id="photo-big" src="@/assets/photo-3.png" alt="photo">
    <img src="@/assets/photo-4.png" alt="photo">
    <img src="@/assets/photo-5.png" alt="photo">
  </div>
</template>

<script>
export default {
name: 'PhotoSection',
}
</script>

<style scoped>
.grid-container {
  margin-top: -96px;
  margin-bottom: 118px;
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  grid-template-rows: min(285px) min(285px);
  column-gap: 50px;
  row-gap: 40px;
}
.grid-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}
#photo-big {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}
</style>