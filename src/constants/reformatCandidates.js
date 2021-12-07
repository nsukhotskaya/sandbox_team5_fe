import dayjs from 'dayjs';

export const reformatCandidates = (candidates) =>
  candidates.map((candidate) => {
    const registrDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    );

      const hrName = candidate.users.filter((user) => user.roleType === 'Hr').map((item) => item.userName);

      const interviewerName = candidate.users.filter(
        (user) => user.roleType === 'Interviewer',
      ).map((item) => item.userName);

      const mentorName = candidate.users.filter((user) => user.roleType === 'Mentor').map((item) => item.userName);

    const feedbacks =
      candidate.feedbacks &&
      candidate.feedbacks.map((item) => item.finalEvaluation);

    const [hrFeedback, interviewerFeedback, mentorFeedback] = feedbacks;

    return {
      ...candidate,
      hr: hrName,
      mentor: mentorName,
      interviewer: interviewerName,
      registrationDate: registrDate,
      hrReview: hrFeedback,
      interviewerReview: interviewerFeedback,
      mentorReview: mentorFeedback,
      fullName: `${candidate.firstName} ${candidate.lastName}`,
    };
  });
