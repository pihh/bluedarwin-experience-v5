import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UiContainerScrollbarComponent extends Component {
  @service('components/ui/container') container;
  @action async enterProducts() {
    await this.container.enterScrollbar();
  }
  @action async leaveProducts() {
    await this.container.leaveScrollbar();
  }
}
