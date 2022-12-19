<template>
  <div class="wrapper-costumer d-flex align-items-center">
    <div class="img"><img src="@/assets/shevron.svg" alt="icon"></div>
    <div class="title">{{ title.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'OurConnectCostumers',
  props: {
    title: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper-costumer  {
  margin-bottom: 25px;
}
.title {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  margin-left: 27px;
}
</style>