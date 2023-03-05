import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import wait from '../../../../../utils/wait';

export default class UiContainerProductsComponent extends Component {
  @service('components/ui/container') container;

  @action async enterProducts() {
    await this.container.enterProducts();
  }
  @action async leaveProducts() {
    await this.container.leaveProducts();
  }
}
