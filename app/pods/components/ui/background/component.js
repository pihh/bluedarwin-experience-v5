import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UiBackgroundComponent extends Component {
  @service('components/ui/background') background;
  @action async lightToDark() {
    await this.background.lightToDark();
  }
  @action async darkToLight() {
    await this.background.darkToLight();
  }
}
