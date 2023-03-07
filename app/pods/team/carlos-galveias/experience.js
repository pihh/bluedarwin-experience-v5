import { BluedarwinExperienceCard } from '../../experience/objects/image';

export class ExperienceTeamCarlosGaveias extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamCarlosGaveias.instance) {
      return ExperienceTeamCarlosGaveias.instance;
    }
    ExperienceTeamCarlosGaveias.instance = this;
    this.experience = experience;
    this.create('team.carlos-galveias', 'teamCarlos');
  }
}
