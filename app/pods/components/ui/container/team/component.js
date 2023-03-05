import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import wait from '../../../../../utils/wait';
import { service } from '@ember/service';
export default class UiContainerTeamComponent extends Component {
  @service('components/ui/container') container;

  @action async enterTeam() {
    await this.container.enterTeam();
  }
  @action async leaveTeam() {
    await this.container.leaveTeam();
  }
}
