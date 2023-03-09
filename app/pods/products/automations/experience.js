import { BluedarwinExperienceCard } from "../../experience/objects/card";

export class ExperienceProductAutomations extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceProductAutomations.instance) {
      return ExperienceProductAutomations.instance;
    }
    ExperienceProductAutomations.instance = this;
    this.experience = experience;
    this.create("products.automations");
  }
}
