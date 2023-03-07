import Service from '@ember/service';

import Experience from './utils/experience';
import { service } from '@ember/service';

export default class ExperienceService extends Service {
  @service router;
  load(canvas) {
    this.experience = new Experience(canvas);
    this.experience.world.on('ready', () => {
      const obj = this.experience.world.objects.filter(
        (el) => el.object.name == this.router.currentRouteName
      )[0];
      if (obj) {
        obj.object.visible = true;
      }
    });
  }
}
