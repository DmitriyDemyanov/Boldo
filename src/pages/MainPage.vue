<template>
  <div>

    <div class="wrapper-navigation">
      <div class="bg-nav"><img src="@/assets/bg-nav.png" alt=""></div>
      <div class="container">
        <TemplateBoldo />
      </div>
    </div>
    <div class="container-common">

      <MainInfoSection subtitle="Our Services" title="Handshake infographic mass market crowdfunding iteration.">

        <template v-slot:body>
          <div class="d-flex justify-content-between mb-3">
            <MainCardComponent :myCard="card" v-for="(card, idx) in $options.servicesCards" :key="idx">
              <template v-slot:card-footer>
                <router-link class="link" :to="`/${card.link}`">
                  <span class="link-text">Explore page </span>
                  <img src="@/assets/arrow-right.svg" alt="icon">
                </router-link>
              </template>
            </MainCardComponent>
          </div>
        </template>

      </MainInfoSection>

      <MainConnectSection />
      <BestPartners />
    </div>
    <EnterpriseTemplate />
    <div class="container-common">
      <OfficeSection />
    </div>

    <div class="container-short">
      <MainInfoSection subtitle="Our Blog" title="Value proposition accelerator product management venture">
        <template v-slot:body>
          <div class="d-flex justify-content-between mb-3">
            <MainCardComponent :type-of-card="'small'" :myCard="card" v-for="(card, idx) in $options.blogCards" :key="idx">
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
        </template>
      </MainInfoSection>
      <div class="wrapper-btn">
        <ButtonMain buttonText="Load more" />
      </div>
    </div>


  </div>
</template>

<script>
import TemplateBoldo from '@/components/TemplateBoldo';
import MainInfoSection from '@/components/MainInfoSection';
import MainCardComponent from '@/components/MainCardComponent';
import MainConnectSection from '@/components/MainConnectSection';
import BestPartners from '@/components/BestPartners';
import EnterpriseTemplate from '@/components/EnterpriseTemplate';
import OfficeSection from '@/components/OfficeSection';
import ButtonMain from '@/components/ButtonMain';

const myServicesCards = [
  {
    img: 'service-image-1',
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    link: 'about'
  },
  {
    img: 'service-image-2',
    title: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    link: 'about'
  },
  {
    img: 'service-image-3',
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    link: 'about'
  }
];


const myBlogCards = [
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
  }
];

export default {
  name: 'MainPage',
  components: {
    TemplateBoldo,
    MainInfoSection,
    MainCardComponent,
    MainConnectSection,
    BestPartners,
    EnterpriseTemplate,
    OfficeSection,
    ButtonMain,
  },
  servicesCards: myServicesCards,
  blogCards: myBlogCards
}
</script>

<style scoped>
.wrapper-navigation {
  padding: 56px 0 64px;
  width: 100%;
  background-color: #0A2640;
  margin-bottom: 82px;
}

.bg-nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.link {
  padding-bottom: 8px;
  border-bottom: 1px solid #0A2640;
  text-decoration: none;
  color: #0A2640;
}

.link-text {
  margin-right: 17px;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #0A2640;
}
.wrapper-full-name {
  margin-left: 12px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
}
.blogger {
  margin-top: auto;
}
.wrapper-btn {
  display: flex;
  justify-content: center;
  margin-top: 84px;
}
</style>