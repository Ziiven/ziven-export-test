import { compat } from '@flarum/core/forum';
import exportFunction from './common/helpers/exportFunction';

export default () => {
  Object.assign(compat, {
    'ziven/export/exportFunction': exportFunction,
  });
};
