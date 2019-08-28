export default (config) => {
  const result = {};
  config.items.map((field) => (result[field.label] = field.type === 'checkbox' ? {} : ''));

  return result;
};