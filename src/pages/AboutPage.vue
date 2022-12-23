<template>
  <div>
    <div class="bg-header">
      <div class="container-common">
        <div class="wrap-text">
          <div class="subtitle">About</div>
          <div class="title">We love to make great things, things that matter.</div>
          <div class="descr">Funding handshake buyer business-to-business metrics iPad partnership. First mover
            advantage
            innovator success deployment non-disclosure.</div>
        </div>
      </div>
    </div>
    <div class="container-common position-relative">
      <PhotoSection />
    </div>
    <TemplateSectionsTitle :story="getStory" color="dark" />
    <OurNumbers />
    <TemplateSectionsTitle :story="getTeam" color="dark" />
    <div class="container-short d-flex justify-content-between wrapper-leader">
      <GeneralManager :manager="item" v-for="(item, index) in getLiaderManager" :key="index" />
    </div>
  </div>

</template>

<script>
import PhotoSection from '@/components/PhotoSection';
import TemplateSectionsTitle from '@/components/TemplateSectionsTitle';
import OurNumbers from '@/components/OurNumbers';
import GeneralManager from '@/components/GeneralManager';

import { mapGetters } from 'vuex';
export default {
  name: 'AboutPage',
  components: {
    PhotoSection,
    TemplateSectionsTitle,
    OurNumbers,
    GeneralManager,
  },
  computed: {
    ...mapGetters('templateTitles', ['getStory', 'getTeam', 'getValue']),
    ...mapGetters('itemsManager', ['getLiaderManager']),
  }

}
</script>

<style scoped>
.bg-header {
  background-color: #0A2640;
  width: 100%;
  min-height: 615px;


}

.wrap-text {
  padding: 155px 154px 0 154px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 400;
  color: #F1F1F1;
}



.subtitle {
  font-size: 20px;
  line-height: 32px;
}

.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
  color: #FFFFFF;
  margin-top: 12px;
  margin-bottom: 17px;
}

.descr {
  font-size: 16px;
  line-height: 28px;
}
.wrapper-leader {
  margin-top: 52px;
}
</style>