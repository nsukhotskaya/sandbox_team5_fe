const tableFiller = (userInfo, internships) => {
  const rawData = [];
  internships.forEach((item) => {
    item.users.forEach((secondItem) => {
      if (userInfo.id === secondItem.id) {
        rawData.push({
          name: item.name,
          status: item.internshipStatusType,
          id: item.id,
        });
      }
    });
  });
  return rawData;
};

export default tableFiller;
