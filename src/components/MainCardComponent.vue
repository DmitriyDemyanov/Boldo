<template>
  <div class="wrapper-card" :class="`card-type-${typeOfCard}`">
    <div class="wrapper-img"><img :src="require(`@/assets/${myCard.img}.png`)" alt="photo" width="100%"></div>
    <div class="title">{{ myCard.title }} <span class="dateText">{{ dateText }}</span> </div>
    <div class="subtitle">{{ myCard.description }}</div>

    <slot name="card-footer"></slot>

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
    typeOfCard: {
      type: String,
      default: "normal"
    }
  },
  computed: {
    dateText() {
      return this.myCard.date || "";
    },
    categoryText() {
      if (this.myCard.title == 'Category') {
        return 'title-category'
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-card {
  width: calc(33% - 67px);
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 36px;
  color: #000;
}


.subtitle {
  margin-bottom: 28px;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
}

.dateText {
  font-weight: 400;
  color: #777777;
  margin-left: 12px;
}

.wrapper-card.card-type-small {
  .title {
    font-size: 16px;
    line-height: 28px;
    color: #0A2640;
    font-weight: 700;
  }

  .subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #000;
  }
}
</style>