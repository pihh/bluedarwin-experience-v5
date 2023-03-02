import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

import wait from '../../../../../utils/wait';

export default class UiContainerNavigationComponent extends Component {
  @service('components/ui/container') container;

  @action async enterNavigation() {
    await this.container.enterNavigation();
  }
  @action async leaveNavigation() {
    await this.container.leaveNavigation();
  }
}
