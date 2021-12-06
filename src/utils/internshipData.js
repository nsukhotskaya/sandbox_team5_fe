const InternshipData = (internshipInfo) => {
  let finishArray1 = [];
  let finishArray2 = [];
  let obj;
  const initialValues = [
    'id',
    'name',
    'startDate',
    'endDate',
    'imageLink',
    'requirements',
    'maxCandidateCount',
    'teamsCount',
    'registrationStartDate',
    'registrationFinishDate',
    'spreadSheetId',
    'internshipStatusType',
  ];
  const Arrays = [
    { users: 'userName' },
    { locations: 'name' },
    { internshipStacks: 'technologyStackType' },
    { languageTypes: 'language' },
  ];
  finishArray1 = initialValues.map((item) => [item, internshipInfo?.[item]]);
  finishArray2 = Arrays.map(
    (item) =>
      internshipInfo?.[Object.keys(item)] && [
        Object.keys(item).join(),
        internshipInfo?.[Object.keys(item)].map(
          (secondItem) => secondItem?.[Object.values(item)],
        ),
      ],
  );
  finishArray1 = finishArray1.concat(finishArray2);
  if (internshipInfo.name) obj = Object.fromEntries(finishArray1);
  return obj;
};

export default InternshipData;
