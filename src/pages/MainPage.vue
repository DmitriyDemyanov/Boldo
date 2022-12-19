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
            <MainCardComponent :myCard="card" v-for="(card, idx) in $options.cards" :key="idx"/>
          </div>
        </template>

      </MainInfoSection>
      <MainConnectSection/>
    </div>
  </div>
</template>

<script>
import TemplateBoldo from '@/components/TemplateBoldo';
import MainInfoSection from '@/components/MainInfoSection';
import MainCardComponent from '@/components/MainCardComponent';
import MainConnectSection from '@/components/MainConnectSection';

const myCards = [
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

export default {
  name: 'MainPage',
  components: {
    TemplateBoldo,
    MainInfoSection,
    MainCardComponent,
    MainConnectSection,
  },
  cards: myCards
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
</style>