import dayjs from 'dayjs';

export const reformatCandidates = (candidates) =>
  candidates.map((candidate) => {
    const newObj = { ...candidate };
    newObj.fullName = `${candidate.firstName} ${candidate.lastName}`;
    newObj.registrationDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    ); 
    const rolyType = candidate.users && candidate.users.map((item) => item.roleType)
    if (rolyType[0] === "Hr") {
      newObj.hr = candidate.users && candidate.users.map((item) => item.userName);
      newObj.hrReview = candidate.users && candidate.users.map((item) => item.feedbacks.map((i) => i.finalEvaluation));
    } 
    return newObj;
  });
