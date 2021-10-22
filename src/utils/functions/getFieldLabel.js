// import { MessageData } from '..';

import { MessageData } from '..';

// import MessageData from '.';

// const getFieldLabel = (key) =>
//   Object.prototype.hasOwnProperty.call(MessageData, key)
//     ? MessageData[key]
//     : key;

const getFieldLabel = (key) =>
  Object.prototype.hasOwnProperty.call(MessageData, key)
    ? MessageData[key]
    : key;

// const getFieldLabel = (key) => {
//   const key1 = key;
//   return key1;
// };

// export const useMediaOnly = (breakpoint) => {
//   const theme = useTheme();
//   return useMediaQuery(theme.breakpoints.only(breakpoint));
// };

export default getFieldLabel;
