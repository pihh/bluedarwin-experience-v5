import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service('components/ui/background') background;
  @service experience;

  @action didInsertCanvas($el) {
    this.experience.load($el);
  }
}
