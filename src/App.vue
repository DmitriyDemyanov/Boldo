<template>
  <div>
    <NavigationSection />
    <router-view class="main-view"></router-view>
    <FooterWindow/>
    <FooterSection/>
  </div>
</template>

<script>
import NavigationSection from '@/components/NavigationSection';
import FooterWindow from '@/components/FooterWindow';
import FooterSection from '@/components/FooterSection';
export default {
  name: 'App',
  components: {
    NavigationSection,
    FooterWindow,
    FooterSection,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

html, body {
  font-family: 'Manrope', 'Open Sans' sans-serif;
  background-color: #E5E5E5;
}
.container {
  width: 1200px !important;
  margin: 0 auto;
}

.container-common {
  width: 1200px !important;
  margin: 0 auto;
  padding: 0 50px;
}

.container-short {
  width: 1200px !important;
  margin: 0 auto;
  padding: 0 100px;
}


</style>
