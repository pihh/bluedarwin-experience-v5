import Experience from './experience';
export class BluedarwinExperienceMouse {
  static instance;

  x = 0;
  y = 0;

  constructor() {
    if (BluedarwinExperienceMouse.instance) {
      return BluedarwinExperienceMouse.instance;
    }
    BluedarwinExperienceMouse.instance = this;
    this.experience = new Experience();
  }
}
