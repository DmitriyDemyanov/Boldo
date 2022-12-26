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
    ],
    leaderManager: [
      {
        img: 'liader-1',
        fullName: 'Michael Scott',
        position: 'general manager'
      },
      {
        img: 'liader-2',
        fullName: 'Dwight Schrute',
        position: 'general manager'
      },
      {
        img: 'liader-3',
        fullName: 'Pam Beetsley',
        position: 'general manager'
      },
    ]
  },
  getters: {
    getManagerSkill({ itemsManager }) {
      return itemsManager;
    },
    getLeaderManager({ leaderManager }) {
      return leaderManager;
    }
  },

};