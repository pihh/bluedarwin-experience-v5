import { module, test } from 'qunit';
import { setupTest } from 'bluedarwin-experience-v5/tests/helpers';

module('Unit | Service | components/ui/background', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:components/ui/background');
    assert.ok(service);
  });
});