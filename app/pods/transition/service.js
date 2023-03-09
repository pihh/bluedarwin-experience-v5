import Service from '@ember/service';

import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CONFIG } from '../../constants/containers';
/**
 * Processo de transição:
 * 1 - Sai menu e navs
 * 2 - Sai experience
 * 3 - Sai background
 * 4 - Entra background
 * 5 - Entra experience
 * 6 - Entra menu e navs
 */

export default class TransitionService extends Service {
  @service experience;

  @service('components/ui/container') container;
  @service('components/ui/background') background;

  @tracked transition = null;

  async start(transition) {
    try {
      if (this.transition) {
        transition.abort();
        return;
      }
      this.transition = transition;

      await this.__selectAction();

      this.transition = null;
    } catch (ex) {
      this.transition = null;
    }
  }

  async __selectAction() {
    const from = this?.transition?.from?.name || null;
    const to = this?.transition?.to?.name || null;

    if (!from) {
      // First load
      this.firstTransition(CONFIG[to]);
    } else {
      const fromLevel = CONFIG[from].level;
      const toLevel = CONFIG[to].level;
      const fromSubLevel = CONFIG[from].sublevel;
      const toSubLevel = CONFIG[to].sublevel;

      if (fromLevel == toLevel) {
        // Same level transition
        if (fromSubLevel > toSubLevel) {
          await this.sameLevelLTR(CONFIG[to], CONFIG[from]);
        } else {
          await this.sameLevelRTL(CONFIG[to], CONFIG[from]);
        }
      } else {
        // Next level transition
        if (fromLevel < toLevel) {
          await this.nextLevelRTL(CONFIG[to]);
        } else {
          await this.nextLevelLTR(CONFIG[to]);
        }
      }
    }
  }
  __setAsideContainer(config) {
    try {
      this.container.asideSection = 0;
      this.container.asideSections = JSON.parse(
        JSON.stringify(config.asideMenu.sections)
      );
      this.container.asideTitle = config.asideMenu.title;
      this.container.asideSubtitle = config.asideMenu.subtitle;
      this.container.pageTitle = config.page.title;
      this.container.pageSubtitle = config.page.subtitle;
      this.container.pageStroke = config.page.stroke;
      this.container.loadAsideSection(this.container.asideSection, true);
    } catch (ex) {
      console.warn('ex', ex);
    }
  }

  __enterExperience(config, direction = 'ltr') {
    if (this.experience.experience.world.ready) {
      const to = this?.transition?.to?.name;
      const obj = this.experience.experience.world.objects.filter(
        (el) => el.object.name == to
      )[0];
      if (obj) {
        obj.enter();
      }
    }
  }
  __leaveExperience(config, direction = 'ltr') {
    if (this.experience.experience.world.ready) {
      const from = this?.transition?.from?.name;
      const obj = this.experience.experience.world.objects.filter(
        (el) => el.object.name == from
      )[0];
      if (obj) {
        obj.leave();
      }
    }
  }

  async __closeContainers(config) {
    if (!config.containers.scroll) {
      await this.container.leaveScrollbar();
    }
    if (!config.containers.products) {
      await this.container.leaveProducts();
    }
    if (!config.containers.team) {
      await this.container.leaveTeam();
    }
  }

  async __openContainers(config) {
    if (config.containers.products) {
      await this.container.enterProducts();
    }
    if (config.containers.team) {
      await this.container.enterTeam();
    }
    if (config.containers.scroll) {
      await this.container.enterScrollbar();
    }
  }

  async firstTransition(config) {
    this.background.setTheme(config.background);

    await this.__openContainers(config);

    this.__enterExperience(config, 'ltr');

    this.__setAsideContainer(config);

    await this.container.enterNavigation('ltr', config);
  }

  async sameLevelRTL(configTo, configFrom) {
    if (configTo.sublevel != configFrom.sublevel) {
      await this.container.leaveNavigation('rtl');
      this.__leaveExperience(configTo, 'rtl');
      await this.__closeContainers(configTo);

      await this.__openContainers(configTo);
      this.__enterExperience(configTo, 'rtl');
      this.__setAsideContainer(configTo);
      await this.container.enterNavigation('rtl', configTo);
    } else {
      // TODO
      //await this.container.leaveNavigation('ltr');
      this.__leaveExperience(configTo, 'ltr');
      await this.__closeContainers(configTo);

      await this.__openContainers(configTo);
      this.__enterExperience(configTo, 'ltr');
      this.__setAsideContainer(configTo);
      //await this.container.enterNavigation('ltr', configTo);
      // this.__leaveExperience(configTo, 'rtl');
      // await wait(1000);
      // this.__enterExperience(configTo, 'rtl');
    }
  }
  async sameLevelLTR(configTo, configFrom) {
    if (configTo.sublevel != configFrom.sublevel) {
      await this.container.leaveNavigation('ltr');
      this.__leaveExperience(configTo, 'ltr');
      await this.__closeContainers(configTo);

      await this.__openContainers(configTo);
      this.__enterExperience(configTo, 'ltr');
      this.__setAsideContainer(configTo);
      await this.container.enterNavigation('ltr', configTo);
    } else {
      // TODO
      //await this.container.leaveNavigation('ltr');
      this.__leaveExperience(configTo, 'ltr');
      await this.__closeContainers(configTo);

      await this.__openContainers(configTo);
      this.__enterExperience(configTo, 'ltr');
      this.__setAsideContainer(configTo);
      //await this.container.enterNavigation('ltr', configTo);
      // this.__leaveExperience(configTo, 'ltr');
      // await wait(1000);
      // this.__enterExperience(configTo, 'ltr');
    }
  }

  async nextLevelRTL(config) {
    /**
     * Sai buttons
     * Sai experience
     * Muda background
     * Entra experience
     * Entra buttons
     */
    try {
      await this.container.leaveNavigation('rtl');
      this.__leaveExperience(config, 'rtl');
      await this.__closeContainers(config);
      await this.background.darkToLight();
      await this.__openContainers(config);
      this.__enterExperience(config, 'rtl');
      this.__setAsideContainer(config);
      await this.container.enterNavigation('rtl', config);
    } catch (ex) {
      console.warn(ex);
    }
  }
  async nextLevelLTR(config) {
    try {
      await this.container.leaveNavigation('ltr');
      this.__leaveExperience(config, 'ltr');
      await this.__closeContainers(config);
      await this.background.lightToDark();
      await this.__openContainers(config);
      this.__enterExperience(config, 'ltr');
      this.__setAsideContainer(config);
      await this.container.enterNavigation('ltr', config);
    } catch (ex) {
      console.warn(ex);
    }
  }
}
