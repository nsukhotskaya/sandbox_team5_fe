const getStackType = (value) => {
  switch (value) {
    case 0:
      return 'FrontEnd';
    case 1:
      return 'BackEnd';
    case 2:
      return 'FullStack';
    case 3:
      return 'BusinessAnalysis';
    case 4:
      return 'DevOps';
    case 5:
      return 'Testing';
    default:
      return undefined;
  }
};

export default getStackType;
