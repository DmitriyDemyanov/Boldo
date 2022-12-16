<template>
  <div>

    <div class="wrapper-navigation">
      <div class="bg-nav"><img src="@/assets/bg-nav.png" alt=""></div>
      <div class="container">
        <TemplateBoldo />
      </div>
    </div>
  </div>
</template>

<script>
import TemplateBoldo from '@/components/TemplateBoldo';

export default {
  name: 'MainPage',
  components: {
    TemplateBoldo,
  }
}
</script>

<style scoped>
.wrapper-navigation {
  padding-top: 56px;
  width: 100%;
  height: 800px;
  background-color: #0A2640;
  z-index: -2;
}

.bg-nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>