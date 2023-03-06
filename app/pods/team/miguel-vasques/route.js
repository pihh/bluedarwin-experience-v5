import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TeamMiguelVasquesRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    this.transition.start(transition);
  }
}
