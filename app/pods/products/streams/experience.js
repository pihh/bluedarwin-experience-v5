import { BluedarwinExperienceCard } from '../../experience/objects/card';

export class ExperienceProductStreams extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceProductStreams.instance) {
      return ExperienceProductStreams.instance;
    }
    ExperienceProductStreams.instance = this;
    this.experience = experience;
    this.create('products.streams');
  }
}
