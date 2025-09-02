import React, { useState } from 'react';

// Icons (you can replace these with your actual icon components or libraries like Heroicons)
const CourseIcon = () => <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">C</div>;
const AssessmentIcon = () => <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">A</div>;
const QuizIcon = () => <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">Q</div>;
const ProgressIcon = () => <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white">P</div>;
const ArrowUpIcon = () => <div className="w-4 h-4 bg-green-200 rounded flex items-center justify-center">↑</div>;
const ArrowDownIcon = () => <div className="w-4 h-4 bg-red-200 rounded flex items-center justify-center">↓</div>;

const DashPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the student dashboard
  const stats = [
    {
      title: 'Enrolled Courses',
      value: '5',
      change: '+2 this month',
      trend: 'up',
      icon: <CourseIcon />,
      color: 'blue'
    },
    {
      title: 'Assessments Completed',
      value: '12',
      change: '+3 this week',
      trend: 'up',
      icon: <AssessmentIcon />,
      color: 'green'
    },
    {
      title: 'Pending Assessments',
      value: '3',
      change: '-2 this week',
      trend: 'down',
      icon: <QuizIcon />,
      color: 'purple'
    },
    {
      title: 'Overall Progress',
      value: '78%',
      change: '+5% this month',
      trend: 'up',
      icon: <ProgressIcon />,
      color: 'yellow'
    }
  ];

  const enrolledCourses = [
    { id: 1, title: 'Advanced JavaScript', progress: 85, nextLesson: 'Module 5: Async Patterns', instructor: 'Sarah Johnson' },
    { id: 2, title: 'React Masterclass', progress: 65, nextLesson: 'Module 4: State Management', instructor: 'Mike Chen' },
    { id: 3, title: 'Cloud Infrastructure', progress: 42, nextLesson: 'Module 3: Deployment', instructor: 'Emma Wilson' },
    { id: 4, title: 'UI/UX Design', progress: 30, nextLesson: 'Module 2: Design Principles', instructor: 'Alex Rivera' }
  ];

  const pendingAssessments = [
    { id: 1, course: 'Advanced JavaScript', title: 'Module 4 Quiz', dueDate: '2023-06-15', duration: '30 mins' },
    { id: 2, course: 'React Masterclass', title: 'Project Submission', dueDate: '2023-06-20', duration: '2 days' },
    { id: 3, course: 'Cloud Infrastructure', title: 'Module 2 Assessment', dueDate: '2023-06-18', duration: '45 mins' }
  ];

  const progressData = [
    { month: 'Jan', progress: 40 },
    { month: 'Feb', progress: 55 },
    { month: 'Mar', progress: 60 },
    { month: 'Apr', progress: 65 },
    { month: 'May', progress: 70 },
    { month: 'Jun', progress: 78 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">CodeBrain Student Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your learning progress.</p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-200">
          {['overview', 'course schedule'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                {stat.icon}
              </div>
              <span
                className={`flex items-center text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress</h2>
          <div className="bg-gray-100 h-64 rounded-lg p-4">
            <div className="flex items-end h-5/6 gap-2">
              {progressData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1 h-full">
                  <div 
                    className="bg-blue-500 w-full rounded-t-lg transition-all duration-500"
                    style={{ height: `${data.progress}%` }}
                  ></div>
                  <span className="text-xs mt-1">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Monthly progress overview</span>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
                <span className="text-xs">Progress %</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-600">Last 6 months progress</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              View Detailed Report
            </button>
          </div>
        </div>

        {/* Pending Assessments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Assessments</h2>
          <div className="space-y-4">
            {pendingAssessments.map((assessment) => (
              <div key={assessment.id} className="flex flex-col p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{assessment.title}</p>
                    <p className="text-xs text-gray-500">{assessment.course}</p>
                  </div>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    Due: {assessment.dueDate}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{assessment.duration}</span>
                  <button className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">
                    Start Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            View All Assessments
          </button>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {course.progress}% Complete
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Instructor: {course.instructor}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Next: {course.nextLesson}</span>
                <button className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          Browse More Courses
        </button>
      </div>
    </div>
  );
};

export default DashPanel;