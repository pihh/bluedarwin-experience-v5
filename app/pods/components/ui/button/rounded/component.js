import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class UiButtonRoundedComponent extends Component {
  @service router;
  @action onClick() {
    console.log('an', this.args.actionName);
    this[this.args.actionName]();
  }

  goToChatbot() {
    this.router.transitionTo('products.chatbot');
  }
  goToStreams() {
    this.router.transitionTo('products.streams');
  }

  goToDocIntel() {
    this.router.transitionTo('products.document-intelligence');
  }

  goToAutomations() {
    this.router.transitionTo('products.automations');
  }

  goToCarlos() {
    this.router.transitionTo('team.carlos-galveias');
  }

  goToFilipe() {
    this.router.transitionTo('team.filipe-sa');
  }

  goToLuis() {
    this.router.transitionTo('team.luis-pombo');
  }

  goToMiguel() {
    this.router.transitionTo('team.miguel-vasques');
  }

  goToFavas() {
    this.router.transitionTo('team.ricardo-favas');
  }

  goToRui() {
    this.router.transitionTo('team.rui-carvoeiro');
  }
  goToRicardo() {
    this.router.transitionTo('team.ricardo-perleques');
  }
}
