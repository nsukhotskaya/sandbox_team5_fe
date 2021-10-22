import messages from './messages.json';

const getFieldLabel = (key) =>
  Object.prototype.hasOwnProperty.call(messages, key) ? messages[key] : key;

export default getFieldLabel;
