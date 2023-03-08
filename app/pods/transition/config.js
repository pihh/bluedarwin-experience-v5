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
      sections: [
        [0, 1, 2],
        [0, 1],
        [0, 1, 2, 3],
      ],
    },
    page: {
      title: 'Bluedarwin',
      stroke: 'Concept',
      subtitle: 'IBM Presents',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1],
        [0, 1, 2, 3],
      ],
    },
    page: {
      title: 'Carlos',
      stroke: 'Galveias',
      subtitle: 'The mastermind',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1],
        [0, 1, 2, 3],
      ],
    },
    page: {
      title: 'Luis',
      stroke: 'Pombo',
      subtitle: 'The data scientist',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    page: {
      title: 'Filipe',
      stroke: 'Mota de Sá',
      subtitle: 'The frontend guy',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    page: {
      title: 'Miguel',
      stroke: 'Vasques',
      subtitle: 'The machinery master',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    page: {
      title: 'Ricardo',
      stroke: 'Favas',
      subtitle: 'The one-man army',
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
      title: 'Bluedarwin Team',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    page: {
      title: 'Rui',
      stroke: 'Carvoeiro',
      subtitle: 'The diplomat',
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
      subtitle: 'Bluedarwin',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    page: {
      title: 'Ricardo',
      stroke: 'Perleques',
      subtitle: 'The cloud genious',
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
      title: 'Bluedarwin Products',
      subtitle: 'IBM Presents',
      sections: [
        [0, 1, 2],
        [0, 1],
        [0, 1, 2, 3],
      ],
    },
    page: {
      title: 'Cognus',
      stroke: 'Chatbot',
      subtitle: 'Bluedarwin products',
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
      title: 'Services',
      subtitle: 'Bluedarwin',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
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
      title: 'Services',
      subtitle: 'Bluedarwin',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
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
      title: 'Services',
      subtitle: 'Bluedarwin',
      sections: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
  },
};
