import React from "react";

const RecentEnrollments = () => {
  const enrollments = [
    { id: 1, course: "Advanced Python", user: "John Doe", date: "2023-10-15", amount: "$99", status: "Completed" },
    { id: 2, course: "React Mastery", user: "Jane Smith", date: "2023-10-14", amount: "$79", status: "In Progress" },
    { id: 3, course: "Data Structures", user: "Alex Johnson", date: "2023-10-13", amount: "$89", status: "Completed" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enrollment.course}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enrollment.user}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enrollment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enrollment.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  enrollment.status === "Completed" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {enrollment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentEnrollments;