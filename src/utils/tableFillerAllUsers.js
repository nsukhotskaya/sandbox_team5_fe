const TableFillerAllUsers = (allUsers) => {
  const rowData = [];
  allUsers.forEach((item) =>
    rowData.push({
      userName: item.userName,
      role: item.roleType,
      position: item.position,
    }),
  );
  return rowData;
};

export default TableFillerAllUsers;
