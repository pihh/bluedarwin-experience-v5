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
    asideMenu: {
      title: 'Bluedarwin Experience',
      subtitle: 'IBM Presents',
      sections: [0, 1, 2],
    },
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
    asideMenu: {
      title: 'Carlos Galveias',
      subtitle: 'The mastermind',
      sections: [0, 1, 2],
    },
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
    asideMenu: {
      title: 'Luis Pombo',
      subtitle: 'The data scientist',
      sections: [0, 1, 2],
    },
  },
  'team.filipe-sa': {
    level: 0,
    sublevel: 1,
    index: 2,
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
    asideMenu: {
      title: 'Filipe Sá',
      subtitle: 'The front end guy',
      sections: [0, 1, 2],
    },
  },
  'team.miguel-vasques': {
    level: 0,
    sublevel: 1,
    index: 3,
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
    asideMenu: {
      title: 'Miguel Vasques',
      subtitle: 'The machines master',
      sections: [0, 1, 2],
    },
  },
  'team.ricardo-favas': {
    level: 0,
    sublevel: 1,
    index: 4,
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
    asideMenu: {
      title: 'Ricardo favas',
      subtitle: '@Todo',
      sections: [0, 1, 2],
    },
  },
  'team.rui-carvoeiro': {
    level: 0,
    sublevel: 1,
    index: 5,
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
    asideMenu: {
      title: 'Rui carvoeiro',
      subtitle: '@Todo',
      sections: [0, 1, 2],
    },
  },
  'team.ricardo-perleques': {
    level: 0,
    sublevel: 1,
    index: 6,
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
    asideMenu: {
      title: 'Ricardo Perleques',
      subtitle: '@Todo',
      sections: [0, 1, 2],
    },
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
    asideMenu: {
      title: 'Cognus Chatbot',
      subtitle: 'Bluedarwin',
      sections: [0, 1, 2],
    },
  },
  'products.document-intelligence': {
    level: 1,
    sublevel: 1,
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
    asideMenu: {
      title: 'Document intelligence',
      subtitle: 'Bluedarwin',
      sections: [0, 1, 2],
    },
  },
  'products.streams': {
    level: 1,
    sublevel: 2,
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
    asideMenu: {
      title: 'Cognus Streams',
      subtitle: 'Bluedarwin',
      sections: [0, 1, 2],
    },
  },
  'products.automations': {
    level: 1,
    sublevel: 3,
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
    asideMenu: {
      title: 'Cognus Automations',
      subtitle: 'Bluedarwin',
      sections: [0, 1, 2],
    },
  },
};
