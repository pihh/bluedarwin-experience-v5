import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UiContainerProductsComponent extends Component {
  @service('components/ui/container') container;

  @action async enterProducts() {
    await this.container.enterProducts();
  }
  @action async leaveProducts() {
    await this.container.leaveProducts();
  }
}
