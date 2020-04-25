export const keyCodes = {
  enter: 13,
  space: 32,
  esc: 27,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
};

export const FILTER_TYPES = {
  MOST_VOTED: 'MOST_VOTED',
  LESS_VOTED: 'LESS_VOTED',
};

export const isValidURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
};

export const haveEnoughCharacters = (str, length) => {
  return str.trim().length >= length;
};
