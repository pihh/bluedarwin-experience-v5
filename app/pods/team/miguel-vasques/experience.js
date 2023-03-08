import { BluedarwinExperienceImage } from '../../experience/objects/image';

export class ExperienceTeamMiguelVasques extends BluedarwinExperienceImage {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamMiguelVasques.instance) {
      return ExperienceTeamMiguelVasques.instance;
    }
    ExperienceTeamMiguelVasques.instance = this;
    this.experience = experience;
    this.create('team.miguel-vasques', 'teamMiguel');
  }
}
