<template>
  <div>
    <div class="wrapper-img">
      <img src="@/assets/office.png" alt="photo">
    </div>
    <div class="wrapper-text d-flex justify-content-between">
      <div class="text">We connect our customers with the best, and help them keep up-and stay open.</div>

      <div class="wrapper-items">
        <OfficeItem :title="text" v-for="(text, ind) in title" :key="ind" />
      </div>

    </div>
  </div>
</template>

<script>
import OfficeItem from '@/components/OffiseItem';
export default {
  name: 'OfficeSection',
  components: {
    OfficeItem,
  },
  data() {
    return {
      title: [
        {
          text: 'We connect our customers with the best?',
        },
        {
          text: 'Android research & development rockstar? ',
        },
      ],
    }
  },
};
</script>

<style scoped>
.wrapper-img {
  width: 100%;
  height: 403px;
  border-radius: 24px;
  margin-top: 124px;
  margin-bottom: 56px;
}

.text {
  width: calc(50% - 50px);
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  color: #000000;
  margin-bottom: 156px;
}

.wrapper-items {
  width: calc(50% - 50px);
}
</style>