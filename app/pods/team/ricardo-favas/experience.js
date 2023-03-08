import { BluedarwinExperienceImage } from '../../experience/objects/image';

export class ExperienceTeamRicardoFavas extends BluedarwinExperienceImage {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamRicardoFavas.instance) {
      return ExperienceTeamRicardoFavas.instance;
    }
    ExperienceTeamRicardoFavas.instance = this;
    this.experience = experience;
    this.create('team.ricardo-favas', 'teamFavas');
  }
}
