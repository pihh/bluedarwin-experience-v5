import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

import MouseFollower from 'mouse-follower';
import gsap from 'gsap';

MouseFollower.registerGSAP(gsap);

export default class ApplicationController extends Controller {
  @service('components/ui/background') background;
  @service experience;
  @service transition;

  @action didInsertCanvas($el) {
    this.experience.load($el);
    const cursor = new MouseFollower({
      container: '#bde-main',
      speed: 0.2,
    });
  }
}
