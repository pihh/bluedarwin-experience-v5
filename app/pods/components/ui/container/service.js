import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

import wait from '../../../../utils/wait';

export default class ComponentsUiContainerService extends Service {
  // TEAM MENU
  @tracked $teamClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
  @tracked teamLocked = false;
  @tracked teamVisible = false;
  @tracked teamButtons = [
    { title: 'carlos' },
    { title: 'luis' },
    { title: 'pihh' },
    { title: 'mike' },
    { title: 'favas' },
    { title: 'rui' },
    { title: 'perleques' },
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
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
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
