import Route from '@ember/routing/route';
import { service } from '@ember/service';
import wait from '../../../utils/wait';

export default class ProductsChatbotRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    console.log('Enter chatbot');
    this.transition.start(transition);
  }
}
