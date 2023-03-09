import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class UiContainerPageComponent extends Component {
  @service('components/ui/container') container;
  @service transition;
}
