<template>

  <div>
    <div class="container wrapper-text">
      <div class="subtitle">Blog</div>
      <div class="title">Thoughts and words</div>

      <div class="d-flex justify-content-between align-items-center">
        <div class="image"><img src="@/assets/blogHeader.png" alt="photo"></div>
        <div class="wrapper-blog">

          <span class="category">Category</span>
          <span class="number"> November 22, 2021</span>
          <div class="blog-title">Pitch termsheet backing validation focus release.</div>
          <div class="blogger">
            <img src="@/assets/blogger-1.png" alt="icon">
            <span class="blogger-name">Chandler Bing</span>
          </div>
        </div>
      </div>

    </div>
    <LatestNews />
  </div>
</template>

<script>
import LatestNews from '@/components/LatestNews';
export default {
  name: 'BlogPage',
  components: {
    LatestNews,
  }
}
</script>

<style lang="scss" scoped>
.wrapper-text {
  padding-top: 170px;
  padding-bottom: 72px;
  font-weight: 400;
  font-family: 'Open Sans';
  font-size: 20px;
  line-height: 32px;
  color: #0A2640;
  text-align: center;
  border-bottom: 1px solid #0A2640;
}

.title {
  font-family: 'Manrope';
  font-size: 64px;
  margin-top: 12px;
  margin-bottom: 67px;
}

.image {
  width: calc(50% - 50px);

  img {
    border-radius: 24px;
  }
}

.wrapper-blog {
  width: calc(51% - 50px);
  text-align: start;
}

.category {
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #0A2640;
}

.number {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #777777;
}

.blog-title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 20px;
}

.blogger-name {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
  margin-left: 12px;
}
</style>