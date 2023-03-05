import Service from '@ember/service';
import { service } from '@ember/service';
/**
 * Processo de transição:
 * 1 - Sai menu e navs
 * 2 - Sai experience
 * 3 - Sai background
 * 4 - Entra background
 * 5 - Entra experience
 * 6 - Entra menu e navs
 */
const CONFIG = {
  journey: {
    level: 0,
    sublevel: 0,
    background: 'dark',
    containers: {
      products: false,
      team: false,
      scroll: false,
    },
    navigationButtons: [
      { title: 'products' },
      { title: 'team' },
      { title: 'contact' },
    ],
  },
  'products.chatbot': {
    level: 1,
    sublevel: 0,
    background: 'light',
    containers: {
      products: true,
      team: false,
      scroll: false,
    },
    navigationButtons: [{ title: 'back' }, { title: 'contact' }],
  },
};
export default class TransitionService extends Service {
  @service('components/ui/container') container;
  @service('components/ui/background') background;

  transition = null;

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
    } else {
      const fromLevel = CONFIG[from].level;
      const toLevel = CONFIG[to].level;
      const fromSubLevel = CONFIG[from].sublevel;
      const toSubLevel = CONFIG[to].sublevel;

      if (fromLevel == toLevel) {
        // Same level transition
        if (fromSubLevel > toSubLevel) {
          await this.sameLevelLTR(CONFIG[to]);
        } else {
          await this.sameLevelRTL(CONFIG[to]);
        }
      } else {
        // Next level transition
        if (fromLevel > toLevel) {
          await this.nextLevelRTL(CONFIG[to]);
        } else {
          await this.nextLevelLTR(CONFIG[to]);
        }
      }
    }
  }

  async __closeContainers(config) {
    console.log('cc', config);
    if (!config.containers.scroll) {
      console.log('leave scroll');
      await this.container.leaveScroll();
    }
    if (!config.containers.products) {
      console.log('leave products');
      await this.container.leaveProducts();
    }
    if (!config.containers.team) {
      console.log('leave team');
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
      await this.container.enterScroll();
    }
  }

  async firstTransition(config) {}

  async sameLevelRTL(config) {}
  async sameLevelLTR(config) {}

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
      await this.__closeContainers(config);
      await this.background.darkToLight();
      await this.container.enterNavigation('rtl', config);
    } catch (ex) {
      console.warn(ex);
    }
  }
  async nextLevelLTR(config) {
    try {
      await this.container.leaveNavigation('ltr');
      await this.__closeContainers(config);
      await this.background.lightToDark();
      await this.__openContainers(config);
      await this.container.enterNavigation('ltr', config);
    } catch (ex) {
      console.warn(ex);
    }
  }
}
