import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UiContainerAsideComponent extends Component {
  @service('components/ui/container') container;

  constructor() {
    super(...arguments);
    window.addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        this.container.prevAsideSection();
      } else if (event.deltaY > 0) {
        this.container.nextAsideSection();
      }
    });
  }

  @action onClick(index) {
    this.container.loadAsideSection(index);
  }
}
