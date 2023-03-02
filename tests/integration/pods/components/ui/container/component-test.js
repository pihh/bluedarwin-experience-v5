import { module, test } from 'qunit';
import { setupRenderingTest } from 'bluedarwin-experience-v5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::Container />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::Container>
        template block text
      </Ui::Container>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
