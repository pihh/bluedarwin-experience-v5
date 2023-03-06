import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TeamRicardoPerlequesRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    this.transition.start(transition);
  }
}
