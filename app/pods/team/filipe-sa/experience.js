import { BluedarwinExperienceCard } from '../../experience/objects/image';

export class ExperienceTeamFilipeSa extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamFilipeSa.instance) {
      return ExperienceTeamFilipeSa.instance;
    }
    ExperienceTeamFilipeSa.instance = this;
    this.experience = experience;
    this.create('team.filipe-sa', 'teamFilipe');
  }
}
