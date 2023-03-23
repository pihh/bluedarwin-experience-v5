import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class UiButtonLoaderComponent extends Component {
  @service experience;
  @tracked dots = '.';
  @tracked progress = 0;
  @tracked loaded = false;
  @tracked exiting = false;
  @tracked strokedashOffset = htmlSafe('stroke-dashoffset: 100');

  constructor() {
    super(...arguments);
  }

  onCounterUpdate(progress) {
    this.progress = progress;
    this.strokedashOffset = htmlSafe('stroke-dashoffset: '+(100-progress));
    
    if (progress == 100) {
      this.loaded = true;
      this.onReady();
      //this.onExit();
    }
  }

  target = 0;
  onTargetUpdate() {
    if (this.progress < this.target) {
      clearTimeout(this.targetUpdateTimeout);
      this.targetUpdateTimeout = setTimeout(() => {
        this.progress++;
        this.onCounterUpdate(this.progress);
        this.onTargetUpdate();
      }, 2);
    }
  }

  @action didInsert() {
    this.experience.experience.resources.on('resource-progress', (e) => {
      this.target = Math.floor(e * 100);
      this.onTargetUpdate();
    });

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

  @action async onExit() {
    if (this.exiting || !this.loaded) return;
    this.exiting = true;
    this.args.onExit();
  }

  @action async onReady() {
    this.args.onReady();
  }
}
