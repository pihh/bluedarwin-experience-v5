import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../utils/wait';

export default class ComponentsUiContainerService extends Service {
  @tracked $navigationClassList = 'opacity-100 left-0 max-height-100';
  @tracked navigationLocked = false;
  @tracked navigationButtons = [
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
  ];

  async enterNavigation(direction = 'ltr') {
    if (this.navigationLocked) return;
    this.navigationLocked = true;

    this.$navigationClassList = 'transition-0 opacity-0 left-200 max-height-0';
    await wait(1);
    this.$navigationClassList = 'opacity-100 left-0 max-height-100';

    await wait(this.navigationButtons.length * 75 + 400);

    this.navigationLocked = false;
  }

  async leaveNavigation(direction = 'rtl') {
    if (this.navigationLocked) return;
    this.navigationLocked = true;
    this.$navigationClassList =
      'transition-0 opacity-100 left-0 max-height-100';
    await wait(1);

    this.$navigationClassList = ' opacity-0 left-200 max-height-0';

    await wait(this.navigationButtons.length * 75 + 400);

    this.navigationLocked = false;
  }
}
