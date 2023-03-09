import { helper } from '@ember/component/helper';

export default helper(function atIndex(obj, index /*, named*/) {
  console.log({ obj, index });
  return obj;
});
