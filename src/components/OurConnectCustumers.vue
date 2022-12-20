<template>
  <div class="wrapper-custumer d-flex align-items-center">
    <div class="img"><img src="@/assets/shevron.svg" alt="icon"></div>
    <div class="title">{{ title.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'OurConnectCustumers',
  props: {
    title: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper-custumer  {
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