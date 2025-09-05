export const getInstructorByCategory = (category) => {
  const instructors = {
    'Python': 'Sarah Johnson',
    'AI/ML': 'Dr. Michael Chen',
    'Java': 'Robert Williams',
    'Web Development': 'Emily Parker',
    'default': 'Expert Instructor'
  };
  
  return instructors[category] || instructors.default;
};