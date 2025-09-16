import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const PaymentHistory = () => {
  const { darkMode } = useDarkMode();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample payment data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPayments([
        {
          id: 1,
          courseName: "React Masterclass",
          amount: 49.99,
          date: "2023-10-15",
          status: "Completed",
          invoiceId: "INV-001"
        },
        {
          id: 2,
          courseName: "JavaScript Fundamentals",
          amount: 29.99,
          date: "2023-09-22",
          status: "Completed",
          invoiceId: "INV-002"
        },
        {
          id: 3,
          courseName: "Node.js Advanced",
          amount: 59.99,
          date: "2023-08-05",
          status: "Refunded",
          invoiceId: "INV-003"
        },
        {
          id: 4,
          courseName: "Python for Data Science",
          amount: 79.99,
          date: "2023-07-18",
          status: "Completed",
          invoiceId: "INV-004"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';

  if (loading) {
    return (
      <div className={`min-h-screen p-6 ${bgClass}`}>
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className={`h-8 w-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded mb-6`}></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg mb-4`}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-2xl font-bold mb-6 ${textClass}`}>Payment History</h1>
        
        {payments.length === 0 ? (
          <div className={`rounded-lg p-8 text-center ${cardClass}`}>
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No payment history found
            </p>
          </div>
        ) : (
          <div className={`rounded-lg overflow-hidden shadow ${cardClass}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Invoice
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {payment.courseName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          ${payment.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {new Date(payment.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          payment.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {payment.invoiceId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;