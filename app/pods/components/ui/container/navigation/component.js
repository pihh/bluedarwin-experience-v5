import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../../utils/wait';

export default class UiContainerNavigationComponent extends Component {
  @tracked className = 'opacity-100 left-0 max-height-100';

  @action async enterNavigation() {
    this.className = 'transition-0 opacity-0 left-200 max-height-0';
    this.className = 'opacity-100 left-0 max-height-100';
  }
  @action async leaveNavigation() {
    this.className = 'transition-0 opacity-100 left-0 max-height-100';
    this.className = ' opacity-0 left-200 max-height-0';
  }
}
