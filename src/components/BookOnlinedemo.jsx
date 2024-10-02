import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookOnlinedemo = () => {  

  const classes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // State to track selected class, subjects, and modal visibility

  const [selectedClass, setSelectedClass] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classSubjects = {
    3: ['Math', 'English', 'Science', 'Hindi', 'Computer Science', 'General Knowledge', 'Sanskrit', 'Social Science'],
    4: ['Math', 'English', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Sanskrit', 'General Knowledge'],
    5: ['Math', 'English', 'Science', 'Hindi', 'Computer Science', 'Sanskrit', 'General Knowledge'],
    6: ['Math', 'English', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Sanskrit', 'General Knowledge'],
    7: ['Math', 'English', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Sanskrit', 'General Knowledge'],
    8: ['Math', 'English', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Sanskrit', 'General Knowledge'],
    9: ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Social Science'],
    10: ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Science', 'Hindi'],
    11: ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Economics', 'Hindi'],
    12: ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Hindi'],
  };

  // Handle class selection
  const handleClassSelection = (classLevel) => {
    setSelectedClass(classLevel);
    setSubjects(classSubjects[classLevel]);
    setSelectedSubjects([]); // Reset selected subjects when a new class is selected
  };

  // Handle subject selection
  const handleSubjectChange = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open modal on submit
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Online Classes</h2>

          {/* Class Selection */}
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Class</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {classes.map((classLevel) => (
              <button
                key={classLevel}
                onClick={() => handleClassSelection(classLevel)}
                className={`${
                  selectedClass === classLevel ? 'bg-blue-600' : 'bg-slate-500'
                } text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200`}>
                Class {classLevel}
              </button>
            ))}
          </div>

          {/* Subject Selection */}
          {selectedClass && (
            <form onSubmit={handleSubmit} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Select Subjects for Class {selectedClass}
              </h3>
              <ul className="space-y-3 mb-6">
                {subjects.map((subject, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`subject-${index}`}
                      className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleSubjectChange(subject)}/>
                    <label htmlFor={`subject-${index}`} className="text-gray-800">
                      {subject}
                    </label>
                  </li>
                ))}
              </ul>

              {/* Submit Button */}
              <Link to='/form'>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-green-300">
                Next
              </button>
              </Link>
            </form>
          )}
        </div>
      </div>

      {/* Modal for showing selected class and subjects */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              &#10006;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Selection Summary</h3>
            <p className="mb-4 text-gray-700 text-center">
              You have selected <strong>Class {selectedClass}</strong> and the following subjects:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              {selectedSubjects.length > 0 ? (
                selectedSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))
              ) : (
                <li>No subjects selected</li>
              )}
            </ul>
            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookOnlinedemo;



