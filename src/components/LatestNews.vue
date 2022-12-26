<template>
  <div class="container-short">
    <div class="title">Latest news</div>

    <div class="grid-container">

      <MainCardComponent :style="{ width: '100%' }" :type-of-card="'small'" :myCard="card"
        v-for="(card, idx) in $options.news" :key="idx">
        <template v-slot:card-footer>
          <div class="d-flex blogger">
            <img :src="require(`@/assets/${card.blogger.photo}.png`)" alt="icon">
            <div class="wrapper-full-name">
              <span>{{ card.blogger.name }}</span> <span>{{ card.blogger.secondName }}</span>
            </div>
          </div>
        </template>
      </MainCardComponent>
    </div>
    <div class="wrapper-btn">
      <ButtonMain buttonText="Load more" />
    </div>
  </div>
</template>

<script>
import MainCardComponent from '@/components/MainCardComponent';
import ButtonMain from '@/components/ButtonMain';

const itemsBlogger = [

  {
    img: 'blog-1',
    title: 'Category',
    description: 'Pitch termsheet backing validation focus release.',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-1',
      name: 'Chandler',
      secondName: 'Bing'
    }
  },

  {
    img: 'blog-2',
    title: 'Category',
    description: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-2',
      name: 'Rachel',
      secondName: 'Green'
    }
  },
  {
    img: 'blog-3',
    title: 'Category',
    description: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-3',
      name: 'Monica',
      secondName: 'Geller'
    }
  },
  {
    img: 'blog-1',
    title: 'Category',
    description: 'Pitch termsheet backing validation focus release.',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-1',
      name: 'Chandler',
      secondName: 'Bing'
    }
  },
  {
    img: 'blog-2',
    title: 'Category',
    description: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-2',
      name: 'Rachel',
      secondName: 'Green'
    }
  },
  {
    img: 'blog-3',
    title: 'Category',
    description: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    date: 'November 20, 2022',
    blogger: {
      photo: 'blogger-3',
      name: 'Monica',
      secondName: 'Geller'
    }
  },
];

export default {
  name: 'LatestNews',
  components: {
    MainCardComponent,
    ButtonMain,
  },
  news: itemsBlogger
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
  margin-top: 96px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 435px 435px;
  column-gap: 50px;
  row-gap: 80px;
}

.blogger {
  margin-top: auto;

  .wrapper-full-name {
    margin-left: 12px;
  }
}

.wrapper-btn {
  margin-top: 96px;
  text-align: center;
}
</style>