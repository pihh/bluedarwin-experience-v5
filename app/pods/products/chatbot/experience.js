import { BluedarwinExperienceCard } from '../../experience/objects/card';

export class ExperienceProductChatbot extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceProductChatbot.instance) {
      return ExperienceProductChatbot.instance;
    }
    ExperienceProductChatbot.instance = this;
    this.experience = experience;
    this.create('products.chatbot');
  }
}
