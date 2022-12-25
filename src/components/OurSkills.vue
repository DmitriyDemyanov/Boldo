<template>
  <div class="wrapper-skill container-small">
    <div class="image-skill"><img :src="require(`@/assets/${ourSkill.img}.png`)" alt="photo"></div>
    <div class="wrapper-text">
      <div class="title">{{ ourSkill.title }}</div>
      <div class="descr">{{ ourSkill.descr }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurSkills',
  props: {
    ourSkill: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.container-small {
  width: 801px;
  margin: 0 auto;
}
.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  color: #FFFFFF;
  margin-bottom: 16px;
}
.descr {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #F1F1F1;
}
.wrapper-skill {
  display: flex;
  margin-top: 72px;
}
.image-skill {
  margin-right: 50px;
}
</style>