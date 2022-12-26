<template>
  <div class="wrapper-section">
    <div class="subtitle">Our numbers</div>
    <div class="title">Handshake infographic mass market<br> crowdfunding iteration.</div>
    <div class="container-short wrapper-numbers d-flex justify-content-between">

      <div v-for="(item, index) in numbers" :key="index">
        <div class="number">{{ item.num }}</div>
        <div class="descr-num">Cool feature title</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'OurNumbers',
  data() {
    return {
      numbers: [
        {
          num: '120m',
        },
        {
          num: '10.000',
        },
        {
          num: '240',
        },
      ]
    }
  }
}
</script>

<style scoped>
.wrapper-section {
  width: 100%;
  min-height: 585px;
  background-color: #0A2640;
  margin-top: 96px;
  margin-bottom: 98px;
  padding-top: 94px;
}
.wrapper-numbers {
  margin-top: 82px;
}

.subtitle {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #F1F1F1;
  text-align: center;
}

.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
  text-align: center;
}

.number {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 96px;
  line-height: 56px;
  color: #4FE9A4;
}

.descr-num {
  margin-top: 32px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #F1F1F1;
}
</style>