import Component from '@glimmer/component';
import { action } from '@ember/object';

import { service } from '@ember/service';

export default class UiContainerAsideComponent extends Component {
  @service('components/ui/container') container;

  @action onClick(index) {
    this.container.loadAsideSection(index);
  }
}
