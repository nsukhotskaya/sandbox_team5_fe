const getChipColor = (statusType) => {
  switch (statusType) {
    case 'New':
      return 'secondary';
    case 'HR_Review':
    case 'InterviewerReview':
    case 'TestTask':
      return 'primary';
    case 'Pending':
      return 'default';
    case 'Accepted':
    case 'Graduated':
      return 'success';
    case 'Questionable':
      return 'warning';
    default:
      return 'error';
  }
};

export default getChipColor;
