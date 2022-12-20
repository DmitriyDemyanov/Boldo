<template>
  <div class="wrapper-enterprise">
    <div class="container">

      <div class="wrapper-title d-flex justify-content-between align-items-end">
        <div class="title">An enterprise template to ramp up your company website</div>

        <div>
          <button><img src="@/assets/arrow-left-big.svg" alt="arrow"></button>
          <button><img src="@/assets/arrow-right-big.svg" alt="arrow"></button>
        </div>

      </div>
      <div class="d-flex justify-content-between align-items-start">
        <EnterpriseItem :manager="item" v-for="(item, ind) in getManagerSkill" :key="ind"/>
      </div>

    </div>



  </div>
</template>

<script>
import EnterpriseItem from '@/components/EnterpriseItem';
import { mapGetters } from 'vuex';
export default {
  name: 'EnterpriseTemplate',
  components: {
    EnterpriseItem,
  },
  computed: {
    ...mapGetters('itemsManager',['getManagerSkill']),
  },
}
</script>

<style scoped>
.wrapper-enterprise {
  width: 100%;
  margin-top: 200px;
  background-color: #0A2640;
}

.container {
  padding: 96px 0 96px 50px;
}

.title {
  width: 65%;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
}

button {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-left: 28px;
}

button:hover {
  background-color: #69E6A6;
}
</style>