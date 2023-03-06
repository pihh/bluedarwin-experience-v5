export const CONFIG = {
  journey: {
    level: 0,
    sublevel: 0,
    background: 'dark',
    containers: {
      products: true,
      team: false,
      scroll: true,
    },
    navigationButtons: [
      { title: 'products', action: 'goToProducts' },
      { title: 'team', action: 'goToTeam' },
      { title: 'contact', action: 'toggleContacts' },
    ],
  },
  'team.carlos-galveias': {
    level: 0,
    sublevel: 1,

    index: 0,
    background: 'dark',
    containers: {
      products: false,
      team: true,
      scroll: false,
    },
    navigationButtons: [
      { title: 'back', action: 'goToJourney' },
      { title: 'contact', action: 'toggleContacts' },
    ],
  },
  'team.luis-pombo': {
    level: 0,
    sublevel: 1,
    index: 1,
    background: 'dark',
    containers: {
      products: false,
      team: true,
      scroll: false,
    },
    navigationButtons: [
      { title: 'back', action: 'goToJourney' },
      { title: 'contact', action: 'toggleContacts' },
    ],
  },
  'products.chatbot': {
    level: 1,
    sublevel: 0,
    background: 'light',
    containers: {
      products: true,
      team: false,
      scroll: true,
    },
    navigationButtons: [
      { title: 'back', action: 'goToJourney' },
      { title: 'contact', action: 'toggleContacts' },
    ],
  },
};
