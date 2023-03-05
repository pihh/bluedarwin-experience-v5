import Route from '@ember/routing/route';
import { service } from '@ember/service';
import wait from '../../utils/wait';

export default class JourneyRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    console.log('Enter journey');
    this.transition.start(transition);
  }
}
