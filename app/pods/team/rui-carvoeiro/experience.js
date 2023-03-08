import { BluedarwinExperienceImage } from '../../experience/objects/image';

export class ExperienceTeamRuiCarvoeiro extends BluedarwinExperienceImage {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceTeamRuiCarvoeiro.instance) {
      return ExperienceTeamRuiCarvoeiro.instance;
    }
    ExperienceTeamRuiCarvoeiro.instance = this;
    this.experience = experience;
    this.create('team.rui-carvoeiro', 'teamRui');
  }
}
