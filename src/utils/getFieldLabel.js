import messages from './messages.json';

const getFieldLabel = (key) => messages[key] ?? key;

export default getFieldLabel;
