// src/ContactForm.jsx

import React, { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        className: '',
        subject: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission, e.g., send data to your server
        setIsModalOpen(true); // Open the modal
        // Reset form fields after submission
        setFormData({
            email: '',
            phone: '',
            className: '',
            subject: '',
            message: ''
        });
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-label="Email Address"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 h-10"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            aria-label="Phone Number"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 h-10"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="class-name" className="block text-lg font-medium text-gray-700">Class Name</label>
                        <input
                            type="text"
                            id="class-name"
                            name="className"
                            value={formData.className}
                            onChange={handleChange}
                            required
                            aria-label="Class Name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 h-10"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Select Subjects</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            aria-label="Select Subject"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 h-10">
                            <option value="">--Select Subject--</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                            <option value="hindi">Hindi</option>
                            <option value="social science">Social Science</option>
                            <option value="sanskriti">Sanskriti</option>
                            <option value="zoology">Zoology</option>
                            <option value="biology">Biology</option>
                            <option value="botany">Botany</option>
                            <option value="mathmatics">Mathmatics</option>
                            <option value="physics">Physics</option>
                            <option value="chemistery">Chemistery</option>
                            <option value="social study">Social Study</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            aria-label="Message"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-slate-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Modal for confirmation */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-800 bg-opacity-75 fixed inset-0" onClick={closeModal}></div>
                    <div className="bg-white rounded-lg p-6 relative z-10 w-full max-w-sm">
                        <h3 className="text-lg font-semibold mb-4">Thank You!</h3>
                        <p>Your message has been submitted successfully.</p>
                        <button 
                            onClick={closeModal} 
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentForm;
