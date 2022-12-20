export default {
  namespaced: true,
  state: {
    itemsManager: [
      {
        title: '“Buyer buzz partner network disruptive non-disclosure agreement business”',
        img: 'manager-1',
        fullName: 'Albus Dumbledore',
        descr: 'Manager @ Howarts',
      },
      {
        title: '“Learning curve infrastructure value proposition advisor strategy user<br>experience hypotheses investor.”',
        img: 'manager-2',
        fullName: 'Severus Snape',
        descr: 'Manager @ Slytherin',
      },
      {
        title: '“Release facebook responsive web design business model canvas seed money monetization.”',
        img: 'manager-3',
        fullName: 'Harry Potter',
        descr: 'Team Leader @ Gryffindor',
      },
    ]
  },
  getters: {
    getManagerSkill({ itemsManager }) {
      return itemsManager
    },
  },
};