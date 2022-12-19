<template>
  <div class="wrapper-card">
    <div class="wrapper-img"><img :src="require(`@/assets/${myCard.img}.png`)" alt="photo" width="100%"></div>
    <div class="title">{{myCard.title}}</div>
    <div class="subtitle">{{myCard.description}}</div>
    <router-link class="link" :to="`/${myCard.link}`">
      <span class="descr">Explore page </span>
      <img src="@/assets/arrow-right.svg" alt="icon">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainCardComponent',
  props: {
    myCard: {
      type: Object,
      required: true,
    },

  }
}
</script>

<style scoped>
.wrapper-card {
  width: calc(33% - 67px);
}

.title {
  margin-top: 24px;
  margin-bottom: 12px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000;
}

.subtitle {
  margin-bottom: 28px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
}

.descr {
  margin-right: 17px;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #0A2640;
}

.link {
  padding-bottom: 8px;
  border-bottom: 1px solid #0A2640;
  text-decoration: none;
}
</style>