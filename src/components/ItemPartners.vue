<template>
  <div class="wrapper-item d-flex">
    <div class="icon-svg">
      <slot name="icon"></slot>
    </div>

    <div class="title-item">{{ text }}</div>

  </div>
</template>

<script>
export default {
  name: 'ItemPartners',
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.wrapper-item {
  margin-bottom: 24px;
  width: 500px;
  padding: 16px 20px;
  background-color: #fff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  color: #000;
}

.wrapper-item:hover {
  color: #fff;
  background: #0A2640;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
}

.wrapper-item:hover .icon-svg path {
  stroke: #fff;
}

.title-item {
  padding-left: 16px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
}

</style>