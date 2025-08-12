import React from 'react';
import { dummyBooks } from '../dummydata/dummydata';



export const StudyMaterials = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dummyBooks.map((book, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col items-center bg-white shadow h-full min-h-[340px]" // Equal card height
          >
            <img
              src={book.image}
              alt={book.title}
              className="mb-4 w-32 h-44 object-cover"
            />
            <div className="text-center flex-1 flex flex-col justify-between">
              <h3
                className="font-semibold mb-1 text-sm line-clamp-2 max-w-[150px]"
                style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {book.title}
              </h3>
              <p className="text-xs text-gray-500">{book.date} • {book.pages} pages</p>
            </div>
            <button className="mt-4 border border-orange-500 text-orange-500 px-3 py-1 rounded hover:bg-orange-500 hover:text-white text-sm cursor-pointer">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>

      {/* Latest Titles Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Latest Titles</h2>
        <p className="text-gray-600 mb-4">Explore the latest titles from Packt</p>

        <div className="flex gap-4 mb-4">
          <button className="border-b-2 border-orange-500 font-semibold cursor-pointer">Books</button>
          <button className="text-gray-500 cursor-pointer">Videos</button>
          <button className="text-gray-500 cursor-pointer">Audiobooks</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyBooks.map((book, index) => (
            <div
              key={index}
              className="border rounded p-4 flex flex-col items-center bg-white shadow h-full min-h-[340px]"
            >
              <img
                src={book.image}
                alt={book.title}
                className="mb-4 w-32 h-44 object-cover"
              />
              <div className="text-center flex-1 flex flex-col justify-between">
                <h3
                  className="font-semibold mb-1 text-sm line-clamp-2 max-w-[150px]"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500">{book.date} • {book.pages} pages</p>
              </div>
              <button className="mt-4 border border-orange-500 text-orange-500 px-3 py-1 rounded hover:bg-orange-500 hover:text-white text-sm cursor-pointer">
                DOWNLOAD
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

