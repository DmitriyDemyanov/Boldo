<template>
  <div class="wrapper-belive">
    <div class="bg-belive">
      <TemplateSectionsTitle :story="getValue" color="dark"/>
      <OurSkills :ourSkill="skill" v-for="(skill, index) in ourSkills" :key="index"/>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateSectionsTitle from '@/components/TemplateSectionsTitle';
import OurSkills from '@/components/OurSkills';

export default {
  name: "BeliveSection",
  components: {
    TemplateSectionsTitle,
    OurSkills,
  },
  computed: {
    ...mapGetters('templateTitles',['getValue']),
  },
  data() {
    return {
      ourSkills: [
        {
          img: 'photoSkill-1',
          title: 'We are commited.',
          descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ',
        },
        {
          img: 'photoSkill-2',
          title: 'We are responsible.',
          descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ',
        },
        {
          img: 'photoSkill-3',
          title: 'We aim for progress.',
          descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ',
        },
      ]
    }
  }
};
</script>

<style scoped>
.wrapper-belive {
  margin-top: 120px;
}
.bg-belive {
  min-height: 1166px;
  background-color: #0A2640;
  padding-top: 122px;
}
</style>
