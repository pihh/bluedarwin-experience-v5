import { module, test } from 'qunit';
import { setupTest } from 'bluedarwin-experience-v5/tests/helpers';

module('Unit | Route | team/ricardo-perleques', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team/ricardo-perleques');
    assert.ok(route);
  });
});
