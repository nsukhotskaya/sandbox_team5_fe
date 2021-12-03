import dayjs from 'dayjs';

export const reformatCandidates = (candidates) =>
  candidates.map((candidate) => {
    const newObj = { ...candidate };
    newObj.fullName = `${candidate.firstName} ${candidate.lastName}`;
    newObj.registrationDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    );
    const users =
      candidate.users && candidate.users.map((item) => item.userName);
    const feedbacks =
      candidate.feedbacks &&
      candidate.feedbacks.map((item) => item.finalEvaluation);
    const [hrName, interviewerName] = users;
    newObj.hr = hrName;
    newObj.interviewer = interviewerName;
    const [hrFeedback, interviewerFeedback] = feedbacks;
    newObj.hrReview = hrFeedback;
    newObj.interviewerReview = interviewerFeedback;

    return newObj;
  });
