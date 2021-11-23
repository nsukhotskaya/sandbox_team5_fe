import _ from 'lodash';

export const loadingSelector = (actions) => (state) => {
  console.log(actions, state);
  return _(actions).some((action) => _.get(state, `loading.${action}`));
};
export default loadingSelector;
