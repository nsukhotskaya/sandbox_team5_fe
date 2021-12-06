const TableFillerCandidates = (allUsers) => {
  const rowData = [];
  allUsers?.forEach((item) =>
    rowData.push({
      userName: item.firstName.concat(' ').concat(item.lastName),
      status: item.statusType,
      id: item.id,
    }),
  );
  return rowData;
};

export default TableFillerCandidates;
