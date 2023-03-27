import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TeamCarlosGalveiasRoute extends Route {
  @service transition;

  async beforeModel(transition) {
    await this.transition.start(transition);
  }
}
