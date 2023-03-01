import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../../utils/wait';

export default class UiContainerTeamComponent extends Component {
  @tracked className = 'opacity-100 bottom-0 max-height-100';
  @tracked locked = false;
  @tracked buttons = [
    { title: 'products' },
    { title: 'team' },
    { title: 'contact' },
  ];

  @action async enterNavigation() {
    if (this.locked) return;
    this.locked = true;

    this.className = 'transition-0 opacity-0 bottom-100 max-height-0';
    this.className = 'opacity-100 bottom-0 max-height-100';

    await wait(this.buttons.length * 75 + 400);
    this.locked = false;
  }
  @action async leaveNavigation() {
    if (this.locked) return;
    this.locked = true;
    this.className = 'transition-0 opacity-100 bottom-0 max-height-100';
    this.className = ' opacity-0 bottom-100 max-height-0';
    await wait(this.buttons.length * 75 + 400);
    this.locked = false;
  }
}
