import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UiGuiComponent extends Component {
  @service('components/ui/background') background;
  @service('components/ui/container') container;

  @action async lightToDark() {
    await this.background.lightToDark();
  }
  @action async darkToLight() {
    await this.background.darkToLight();
  }

  @action async enterNavigation() {
    await this.container.enterNavigation();
  }
  @action async leaveNavigation() {
    await this.container.leaveNavigation();
  }
}
