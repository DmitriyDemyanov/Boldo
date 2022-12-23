export default {
  namespaced: true,
  state: {
   storyText: {
    subtitle: 'Our story',
    title: 'Handshake infographic mass market crowdfunding iteration.',
    descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ',
   },
   teamText: {
    subtitle: 'Our team',
    title: 'The leadership team',
    descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. ',
   },
   valuesText: {
    subtitle: 'Our values',
    title: 'Things in we believe',
    descr: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. ',
   },
  },
  getters: {
    getStory({ storyText }) {
      return storyText;
    },
    getTeam({ teamText }) {
      return teamText;
    },
    getValue({ valuesText }) {
      return valuesText;
    },
  }
};