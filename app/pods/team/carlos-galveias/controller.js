import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class TeamCarlosGalveiasController extends Controller {
  @tracked section = 0;
  @tracked sections = [0, 1, 2];
  @tracked isScrolling = false;
  @tracked sectionActive = 0;

  @action onSectionChange(index) {
    this.section = index;
  }

  constructor() {
    super(...arguments);
  }

  @action didInsert() {
    console.log('didInsert');
    this.isScrolling = false;

    window.addEventListener('wheel', (event) => {
      if (this.isScrolling) return;
      this.isScrolling = true;
      if (event.deltaY < 0) {
        this.section++;
      } else if (event.deltaY > 0) {
        this.section--;
        if (this.section < 0) {
          this.section = 0;
        }
      }
      setTimeout(() => {
        this.sectionActive = this.section;
        this.isScrolling = false;
      }, 1000);
    });
  }
}
