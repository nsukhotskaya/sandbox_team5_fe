import dayjs from 'dayjs';

export const reformatCandidates = (candidates) =>
  candidates.map((candidate) => {
    const newObj = { ...candidate };
    newObj.fullName = `${candidate.firstName} ${candidate.lastName}`;
    newObj.registrationDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    );
    return newObj;
  });
