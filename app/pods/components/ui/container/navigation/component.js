import Component from '@glimmer/component';
import { action } from '@ember/object';

import { service } from '@ember/service';

export default class UiContainerNavigationComponent extends Component {
  @service('components/ui/container') container;

  @action async enterNavigation() {
    await this.container.enterNavigation();
  }
  @action async leaveNavigation() {
    await this.container.leaveNavigation();
  }
}
