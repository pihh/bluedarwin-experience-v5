import Component from '@glimmer/component';
// import { service } from '@ember/service';
import { action } from '@ember/object';
import wait from '../../../../utils/wait';

export default class UiBackgroundComponent extends Component {
  @action async lightToDark() {
    console.log('lightToDark');
    document.getElementById('bde-main').classList.remove('bde-theme-dark');
    document.getElementById('bde-main').classList.add('bde-theme-light');
    document
      .getElementById('bde-route-background-mask')
      .classList.add('transition');
    document
      .getElementById('bde-route-background-mask')
      .classList.add('transition-backward');

    await wait(700);
    document.getElementById('bde-main').classList.add('bde-theme-dark');
    document.getElementById('bde-main').classList.remove('bde-theme-light');

    document
      .getElementById('bde-route-background-mask')
      .classList.remove('transition');
    document
      .getElementById('bde-route-background-mask')
      .classList.remove('transition-backward');
  }
  @action async darkToLight() {
    console.log('darkToLight');
    document.getElementById('bde-main').classList.remove('bde-theme-light');
    document.getElementById('bde-main').classList.add('bde-theme-dark');
    document
      .getElementById('bde-route-background-mask')
      .classList.add('transition');
    document
      .getElementById('bde-route-background-mask')
      .classList.add('transition-forward');
    await wait(700);
    document.getElementById('bde-main').classList.remove('bde-theme-dark');
    document.getElementById('bde-main').classList.add('bde-theme-light');
    document
      .getElementById('bde-route-background-mask')
      .classList.remove('transition');
    document
      .getElementById('bde-route-background-mask')
      .classList.remove('transition-forward');
  }
}
