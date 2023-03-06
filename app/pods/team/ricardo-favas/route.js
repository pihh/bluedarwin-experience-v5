import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TeamRicardoFavasRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    this.transition.start(transition);
  }
}
