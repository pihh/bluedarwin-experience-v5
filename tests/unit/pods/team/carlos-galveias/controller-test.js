import { module, test } from 'qunit';
import { setupTest } from 'bluedarwin-experience-v5/tests/helpers';

module('Unit | Controller | team/carlos-galveias', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:team/carlos-galveias');
    assert.ok(controller);
  });
});
