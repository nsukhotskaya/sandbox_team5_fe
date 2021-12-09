const TableFillerAllUsers = (allUsers, getUserInfo) => {
  const rowData = [];
  allUsers.forEach((item) => {
    if (item.id !== getUserInfo?.id) {
      rowData.push({
        userName: item.userName,
        role: item.roleType,
        position: item.position,
        id: item.id,
      });
    }
  });
  return rowData;
};

export default TableFillerAllUsers;
