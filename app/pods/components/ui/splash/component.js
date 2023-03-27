import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../utils/wait';
export default class UiSplashComponent extends Component {
  @tracked loaded = false;
  @tracked className = '';
  @tracked text = 'LOADING';
  @tracked textClassName = 'opacity-1';

  @action async onReady() {
    if (this.loaded) return;
    this.textClassName = 'opacity-0';
    this.className = 'bde__transition-ready';
    await wait(500);

    this.loaded = true;
    this.text = 'READY';
    this.textClassName = 'opacity-1';
  }
  @action async onExit() {
    this.text = 'READY';
    this.className = 'bde__transition-ready opacity-0 scale-95';
    await wait(2000);
    this.className = 'pixel';
  }
}
