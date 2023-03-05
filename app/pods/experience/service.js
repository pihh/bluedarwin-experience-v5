import Service from '@ember/service';

import Experience from './utils/experience';

export default class ExperienceService extends Service {
  load(canvas) {
    this.experience = new Experience(canvas);
  }
}
