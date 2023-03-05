import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import wait from '../../../../../utils/wait';

export default class UiButtonLoaderComponent extends Component {
  @tracked dots = '.';
  @tracked progress = 0;
  @tracked loaded = false;
  @tracked exiting = false;

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

  onCounterUpdate(progress) {
    this.progress = progress;
    if (progress == 100) {
      this.loaded = true;
    }
  }

  @action async onExit() {
    if (this.exiting) return;
    this.exiting = true;
    this.args.onExit();
  }
}
