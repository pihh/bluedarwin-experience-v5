import { BluedarwinExperienceCard } from '../../experience/objects/card';

export class ExperienceProductDocumentIntelligence extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceProductDocumentIntelligence.instance) {
      return ExperienceProductDocumentIntelligence.instance;
    }
    ExperienceProductDocumentIntelligence.instance = this;
    this.experience = experience;
    this.create('products.document-intelligence');
  }
}
