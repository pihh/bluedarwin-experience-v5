import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

import wait from '../../../../utils/wait';

export default class ComponentsUiContainerService extends Service {
  // PAGE CONTAINER
  @tracked pageTitle = '';
  @tracked pageSubtitle = '';
  @tracked pageStroke = '';
  @tracked pageContent = [];

  @tracked sliding = false;
  __removeAllClasses(visible = true) {
    const $els = [...document.querySelectorAll('.bde__ui__page-content')];
    for (let $el of $els) {
      $el.classList.remove('fade-in-up');
      $el.classList.remove('fade-in-down');
      $el.classList.remove('fade-out-up');
      $el.classList.remove('fade-out-down');
      if (visible) {
        $el.classList.add('visible');
        $el.classList.remove('invisible');
      } else {
        $el.classList.remove('visible');
        $el.classList.add('invisible');
      }
    }
  }
  async slideInUp() {
    this.__removeAllClasses(false);
    const $els = [...document.querySelectorAll('.bde__ui__page-content')];
    for (let $el of $els) {
      await wait(50);
      $el.classList.remove('visible');
      $el.classList.remove('invisible');
      $el.classList.add('fade-in-up');
    }
    await wait(300);
  }

  async slideInDown() {
    this.__removeAllClasses(false);
    const $els = [...document.querySelectorAll('.bde__ui__page-content')];
    for (let $el of $els.reverse()) {
      await wait(50);
      $el.classList.remove('visible');
      $el.classList.remove('invisible');
      $el.classList.add('fade-in-down');
    }
    await wait(300);
  }

  async slideOutUp() {
    this.__removeAllClasses(true);
    const $els = [...document.querySelectorAll('.bde__ui__page-content')];
    for (let $el of $els) {
      $el.classList.remove('visible');
      $el.classList.remove('invisible');
      $el.classList.add('fade-out-up');
      await wait(50);
    }
    await wait(300);
  }

  async slideOutDown() {
    this.__removeAllClasses(true);
    const $els = [...document.querySelectorAll('.bde__ui__page-content')];

    for (let $el of $els.reverse()) {
      await wait(50);
      $el.classList.remove('visible');
      $el.classList.remove('invisible');
      $el.classList.add('fade-out-down');
    }
    await wait(300);
  }

  // ASIDE MENU
  @tracked asideTitle = '';
  @tracked asideSubtitle = '';
  @tracked asideSections = [
    [0, 1, 2],
    [0, 1],
    [0, 1, 2, 3],
  ];
  @tracked asideSection = 0;

  async loadAsideSection(index, isTransition) {
    if (isTransition) {
      this.asideSection = index;
      this.pageContent = [...this.asideSections[this.asideSection]];
      this.sliding = false;
      return;
    }
    if (this.sliding) return;
    this.sliding = true;

    const direction = index >= this.asideSection ? 'down' : 'up';
    if (direction == 'up') {
      await this.slideOutUp();
    } else {
      await this.slideOutDown();
    }
    this.asideSection = index;

    this.pageContent = [...this.asideSections[this.asideSection]];
    if (direction == 'up') {
      await this.slideInUp();
    } else {
      await this.slideInDown();
    }
    this.sliding = false;
  }

  // TEAM MENU
  @tracked $teamClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
  @tracked teamLocked = false;
  @tracked teamVisible = false;
  @tracked teamButtons = [
    {
      title: 'carlos',
      image: '/images/team.carlos-galveias.jpeg',
      actionName: 'goToCarlos',
    },
    {
      title: 'luis',
      image: '/images/team.luis-pombo.jpeg',
      actionName: 'goToLuis',
    },
    {
      title: 'filipe',
      image: '/images/team.filipe-sa.jpeg',
      actionName: 'goToFilipe',
    },
    {
      title: 'mike',
      image: '/images/team.miguel-vasques.jpeg',
      actionName: 'goToMiguel',
    },
    {
      title: 'favas',
      image: '/images/team.ricardo-favas.jpeg',
      actionName: 'goToFavas',
    },
    {
      title: 'rui',
      image: '/images/team.rui-carvoeiro.jpeg',
      actionName: 'goToRui',
    },
    {
      title: 'perleques',
      image: '/images/team.ricardo-perleques.jpeg',
      actionName: 'goToRicardo',
    },
  ];

  async enterTeam() {
    if (this.teamLocked || this.teamVisible) return;
    this.teamLocked = true;

    this.$teamClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
    await wait(1);
    this.$teamClassList = 'opacity-100 bottom-0 max-height-100';

    await wait(this.teamButtons.length * 75 + 400);
    this.teamVisible = true;
    this.teamLocked = false;
  }

  async leaveTeam() {
    if (this.teamLocked || !this.teamVisible) return;

    this.teamLocked = true;
    this.$teamClassList = 'transition-0 opacity-100 bottom-0 max-height-100';
    await wait(1);
    this.$teamClassList = ' opacity-0 bottom-100 max-height-0';
    await wait(this.teamButtons.length * 75 + 400);
    this.teamVisible = false;
    this.teamLocked = false;
  }

  // PRODUCTS MENU
  @tracked $productClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
  @tracked productLocked = false;
  @tracked productVisible = false;
  @tracked productButtons = [
    { title: 'chatbot', icon: '/icons/chatbot.svg', actionName: 'goToChatbot' },
    {
      title: 'doc intell',
      icon: '/icons/document-intelligence.svg',
      actionName: 'goToDocIntel',
    },
    { title: 'streams', icon: '/icons/streams.svg', actionName: 'goToStreams' },
    {
      title: 'automations',
      icon: '/icons/automations.svg',
      actionName: 'goToAutomations',
    },
  ];

  async enterProducts() {
    if (this.productLocked || this.productVisible) return;
    this.productLocked = true;

    this.$productClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
    await wait(1);
    this.$productClassList = 'opacity-100 bottom-0 max-height-100';

    await wait(this.productButtons.length * 75 + 400);
    this.productVisible = true;
    this.productLocked = false;
  }

  async leaveProducts() {
    if (this.productLocked || !this.productVisible) return;
    this.productLocked = true;
    this.$productClassList = 'transition-0 opacity-100 bottom-0 max-height-100';
    await wait(1);
    this.$productClassList = ' opacity-0 bottom-100 max-height-0';
    await wait(this.productButtons.length * 75 + 400);
    this.productVisible = false;
    this.productLocked = false;
  }

  // SCROLL MENU
  @tracked $scrollClassList = 'opacity-0 zoom-90';
  @tracked scrollLocked = false;
  @tracked scrollVisible = false;

  async enterScrollbar() {
    if (this.scrollLocked || this.scrollVisible) return;
    this.scrollLocked = true;
    this.$scrollClassList = 'opacity-100 zoom-100';
    await wait(400);
    this.scrollVisible = true;
    this.scrollLocked = false;
  }

  async leaveScrollbar() {
    if (this.scrollLocked || !this.scrollVisible) return;
    this.scrollLocked = true;
    this.$scrollClassList = 'opacity-0 zoom-90';
    await wait(400);

    this.scrollVisible = false;
    this.scrollLocked = false;
  }

  // NAVIGATION MENU
  @tracked $navigationClassList = 'opacity-100 left-0 max-height-100';
  @tracked navigationLocked = false;
  @tracked navigationVisible = true;
  @tracked navigationButtons = [
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
  ];

  async enterNavigation(direction = 'ltr', config) {
    if (this.navigationLocked) return;
    this.navigationLocked = true;

    if (direction == 'ltr') {
      this.$navigationClassList =
        'transition-0 opacity-0 right-200 max-height-0';
    } else {
      this.$navigationClassList =
        'transition-0 opacity-0 left-200 max-height-0';
    }

    this.navigationButtons = [...config.navigationButtons];
    await wait(1000);
    this.$navigationClassList = 'opacity-100 left-0 max-height-100';

    await wait(this.navigationButtons.length * 75 + 400);

    this.navigationLocked = false;
  }

  async leaveNavigation(direction = 'rtl') {
    if (this.navigationLocked) return;
    this.navigationLocked = true;
    this.$navigationClassList =
      'transition-0 opacity-100 left-0 max-height-100';

    await wait(1000);

    if (direction == 'ltr') {
      this.$navigationClassList = ' opacity-0 left-200 max-height-0';
    } else {
      this.$navigationClassList = ' opacity-0 right-200 max-height-0';
    }

    await wait(this.navigationButtons.length * 75 + 400);

    this.navigationLocked = false;
  }
}
