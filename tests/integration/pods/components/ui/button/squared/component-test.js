import { module, test } from 'qunit';
import { setupRenderingTest } from 'bluedarwin-experience-v5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/button/squared', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::Button::Squared />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::Button::Squared>
        template block text
      </Ui::Button::Squared>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
