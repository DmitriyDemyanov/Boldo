<template>
  <div class="wrapper-text container-small " :class="`wrapper-text-${color}`">
    <div  class="subtitle">{{ story.subtitle }}</div>
    <div class="title">{{ story.title }}</div>
    <div class="description">{{ story.descr }} </div>
  </div>
</template>

<script>
export default {
  name: 'TemplateSectionsTitle',
  props: {
    story: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.container-small {
  width: 801px;
  margin: 0 auto;
}

.wrapper-text {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
}

.title {
  margin-top: 12px;
  margin-bottom: 30px;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
}
.wrapper-text-dark {
  color: #fff;
  .description {
    color: #F1F1F1;
  }
  .title {
    color: #fff;
  }
}

</style>