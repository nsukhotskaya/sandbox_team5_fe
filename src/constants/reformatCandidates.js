import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const reformatCandidates = (candidates) =>
  candidates.map((candidate) => {
    const registrDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    );
    const users =
      candidate.users && candidate.users.map((item) => item.userName);
    const feedbacks =
      candidate.feedbacks &&
      candidate.feedbacks.map((item) => item.finalEvaluation);
    const [hrName, interviewerName] = users;
    const [hrFeedback, interviewerFeedback] = feedbacks;

    return {
      ...candidate,
      hr: hrName,
      interviewer: interviewerName,
      registrationDate: registrDate,
      hrReview: hrFeedback,
      interviewerReview: interviewerFeedback,
      fullName: `${candidate.firstName} ${candidate.lastName}`,
    };
  });
