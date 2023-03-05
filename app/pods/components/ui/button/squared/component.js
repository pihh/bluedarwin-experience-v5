import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class UiButtonSquaredComponent extends Component {
  @service router;
  @tracked isContactsOpen = false;
  @action onClick() {
    this[this.args.actionName]();
  }

  goToJourney() {
    this.router.transitionTo('journey');
  }
  goToTeam() {
    this.router.transitionTo('team.carlos-galveias');
  }

  goToProducts() {
    this.router.transitionTo('products.chatbot');
  }

  toggleContacts() {
    this.isContactsOpen = !this.isContactsOpen;
  }
}
