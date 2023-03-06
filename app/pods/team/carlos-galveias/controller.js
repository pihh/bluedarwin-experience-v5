import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class TeamCarlosGalveiasController extends Controller {
  @tracked section = 0;
  @tracked sections = [0, 1, 2];

  @action onSectionChange(index) {
    this.section = index;
  }
}
