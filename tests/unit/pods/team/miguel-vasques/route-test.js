import { module, test } from 'qunit';
import { setupTest } from 'bluedarwin-experience-v5/tests/helpers';

module('Unit | Route | team/miguel-vasques', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team/miguel-vasques');
    assert.ok(route);
  });
});
