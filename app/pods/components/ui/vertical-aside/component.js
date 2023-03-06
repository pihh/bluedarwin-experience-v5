import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class UiVerticalAsideComponent extends Component {
  @action onClick(index) {
    this.args.onClick(index);
  }
}
