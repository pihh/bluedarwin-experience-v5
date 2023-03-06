import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TeamCarlosGalveiasRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    this.transition.start(transition);
  }

  setupController(controller) {
    controller.section = 0;
  }
}
