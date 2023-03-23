import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../utils/wait';
export default class UiSplashComponent extends Component {
  @tracked className = '';
  @tracked text = 'LOADING'
  @action async onExit() {
    this.text = 'READY'
    this.className = 'opacity-0 scale-95';
    await wait(2000);
    this.className = 'pixel';
  }
}
