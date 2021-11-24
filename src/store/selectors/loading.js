import _ from 'lodash';

export const loadingSelector = (actions) => (state) => (
 _(actions).some((action) => _.get(state, `loading.${action}`)));
export default loadingSelector;
