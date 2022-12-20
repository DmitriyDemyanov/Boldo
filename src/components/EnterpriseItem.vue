
<template>
  <div class="wrapper-item">
    <div class="subtitle" v-html="manager.title"></div>
    <div class="wrapper-manager d-flex align-items-center">
      <img :src= "require(`@/assets/${manager.img}.svg`)" alt="photo">

      <div>
        <div class="full-name">{{ manager.fullName }}</div>
        <div class="descr">{{ manager.descr }}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterpriseItem',
  props: {
    manager: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.wrapper-item {
  width: calc(33% - 14px);
  padding: 40px;
  margin-top: 56px;
  background-color: #fff;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.subtitle {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.full-name {
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #0A2640;
}
.descr {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: #0A2640;
}
.wrapper-manager img {
  margin-right: 16px;
}
.wrapper-manager {
  margin-top: 40px;
}
</style>