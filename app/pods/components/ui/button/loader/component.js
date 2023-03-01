import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class UiButtonLoaderComponent extends Component {
  @tracked dots = '.';
  @tracked progress = 0;
  @tracked loaded = false;

  constructor() {
    super(...arguments);
    const timeout = () => {
      try {
        setTimeout(() => {
          if (this.dots == '.') {
            this.dots = '..';
          } else if (this.dots == '..') {
            this.dots = '...';
          } else if (this.dots == '...') {
            this.dots = '';
          } else {
            this.dots = '.';
          }
          timeout();
        }, 500);
      } catch (ex) {
        console.warn('timeout ex');
      }
    };
    timeout();
  }
}
