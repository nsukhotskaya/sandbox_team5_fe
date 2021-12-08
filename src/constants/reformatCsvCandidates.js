export const reformatCsvCandidates = (candidates) =>
  candidates.map((candidate) => {
    const {
      fullName,
      registrationDate,
      location,
      languageType,
      stackType,
      englishLevelType,
      hr,
      hrReview,
      interviewer,
      interviewerReview,
      mentor,
      mentorReview,
      statusType,
    } = candidate;
    return {
      'Full Name': fullName,
      'Application Date': registrationDate,
      Location: location,
      Language: languageType,
      Stack: stackType,
      'English Level': englishLevelType,
      HR: hr,
      'HR Review': hrReview,
      Interviewer: interviewer,
      'Interviewer Review': interviewerReview,
      Mentor: mentor,
      'Mentor Review': mentorReview,
      Status: statusType,
    };
  });
