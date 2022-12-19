<template>
  <div>
    <h6 class="subtitle">{{subtitle}}</h6>
    <h2 class="title">{{title}}</h2>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
name: 'MainInfoSection',
props: {
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
}
}
</script>

<style scoped>
.title {
  max-width: 842px;
  margin: 0 auto;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #000000;
  margin-bottom: 77px;
}
.subtitle {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
  text-align: center;
  margin-bottom: 12px;
}
</style>