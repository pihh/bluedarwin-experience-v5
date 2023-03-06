import { helper } from '@ember/component/helper';

export default helper(function doublePlaceNumber(positional /*, named*/) {
  let str = String(parseInt(positional) + 1);
  if (str.length < 2) {
    str = 0 + str;
  }
  return str;
});
