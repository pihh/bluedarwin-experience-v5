import { BluedarwinExperienceImage } from '../../experience/objects/image';

export class ExperienceTeamLuisPombo extends BluedarwinExperienceImage {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamLuisPombo.instance) {
      return ExperienceTeamLuisPombo.instance;
    }
    ExperienceTeamLuisPombo.instance = this;
    this.experience = experience;
    this.create('team.luis-pombo', 'teamLuis');
  }
}
