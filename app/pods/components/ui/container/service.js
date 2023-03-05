import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

import wait from '../../../../utils/wait';

export default class ComponentsUiContainerService extends Service {
  // TEAM MENU
  @tracked $teamClassList = 'opacity-100 bottom-0 max-height-100';
  @tracked teamLocked = false;
  @tracked teamButtons = [
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
  ];

  async enterTeam() {
    if (this.teamLocked) return;
    this.teamLocked = true;

    this.$teamClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
    await wait(1);
    this.$teamClassList = 'opacity-100 bottom-0 max-height-100';

    await wait(this.teamButtons.length * 75 + 400);
    this.teamLocked = false;
  }

  async leaveTeam() {
    if (this.teamLocked) return;
    this.teamLocked = true;
    this.$teamClassList = 'transition-0 opacity-100 bottom-0 max-height-100';
    await wait(1);
    this.$teamClassList = ' opacity-0 bottom-100 max-height-0';
    await wait(this.teamButtons.length * 75 + 400);
    this.teamLocked = false;
  }

  // PRODUCTS MENU
  @tracked $productClassList = 'opacity-100 bottom-0 max-height-100';
  @tracked productLocked = false;
  @tracked productButtons = [
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
  ];

  async enterProducts() {
    if (this.productLocked) return;
    this.productLocked = true;

    this.$productClassList = 'transition-0 opacity-0 bottom-100 max-height-0';
    await wait(1);
    this.$productClassList = 'opacity-100 bottom-0 max-height-100';

    await wait(this.productButtons.length * 75 + 400);
    this.productLocked = false;
  }

  async leaveProducts() {
    if (this.productLocked) return;
    this.productLocked = true;
    this.$productClassList = 'transition-0 opacity-100 bottom-0 max-height-100';
    await wait(1);
    this.$productClassList = ' opacity-0 bottom-100 max-height-0';
    await wait(this.productButtons.length * 75 + 400);
    this.productLocked = false;
  }

  // NAVIGATION MENU
  @tracked $navigationClassList = 'opacity-100 left-0 max-height-100';
  @tracked navigationLocked = false;
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
