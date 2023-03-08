import { BluedarwinExperienceImage } from '../../experience/objects/image';

export class ExperienceTeamRicardoPerleques extends BluedarwinExperienceImage {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamRicardoPerleques.instance) {
      return ExperienceTeamRicardoPerleques.instance;
    }
    ExperienceTeamRicardoPerleques.instance = this;
    this.experience = experience;
    this.create('team.ricardo-perleques', 'teamPerleques');
  }
}
