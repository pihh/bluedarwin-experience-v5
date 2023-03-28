import Component from '@glimmer/component';

export default class UiContainerTextComponent extends Component {
  get text() {
    return this.args.text;
  }

  get reversed() {
    return this.args.reversed || false;
  }
}
