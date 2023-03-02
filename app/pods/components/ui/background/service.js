import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../utils/wait';

export default class ComponentsUiBackgroundService extends Service {
  @tracked $mainClassList = 'bde-theme-dark';
  @tracked $maskClassList = '';
  @tracked locked = false;

  _lock() {
    this.locked = true;
  }

  _unlock() {
    this.locked = false;
  }

  async lightToDark() {
    if (this.locked) return;
    this._lock();

    this.$mainClassList = 'bde-theme-light';
    this.$maskClassList = 'transition transition-backward';

    await wait(700);

    this.$mainClassList = 'bde-theme-dark';
    this.$maskClassList = '';

    this._unlock();
  }

  async darkToLight() {
    if (this.locked) return;
    this._lock();

    this.$mainClassList = 'bde-theme-dark';
    this.$maskClassList = 'transition transition-forward';

    await wait(700);

    this.$mainClassList = 'bde-theme-light';
    this.$maskClassList = '';

    this._unlock();
  }
}
