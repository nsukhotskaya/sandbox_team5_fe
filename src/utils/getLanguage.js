const getLanguage = (value) => {
  switch (value) {
    case 0:
      return 'English';
    case 1:
      return 'Russian';
    case 2:
      return 'German';
    case 3:
      return 'French';
    case 4:
      return 'Indian';
    case 5:
      return 'Chinese';
    default:
      return undefined;
  }
};

export default getLanguage;
