import React from 'react';

const HelpCenter = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-navy-800">Help Centre</h1>
                
                <p className="text-black mt-4">Welcome to the <span className="font-semibold text-navy-600">Find Employee Help Centre</span>. We’re here to assist you with any questions or concerns regarding our platform.</p>
                
                <h2 className="text-xl font-semibold text-navy-700 mt-6">1. Getting Started</h2>
                <p className="text-black mt-2">New to <span className="font-semibold text-navy-600">Find Employee</span>? Learn how to create an account, set up your profile, and explore job opportunities.</p>
                
                <h2 className="text-xl font-semibold text-navy-700 mt-6">2. Job Seekers</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>How to search for jobs effectively.</li>
                    <li>Tips for building a strong resume and profile.</li>
                    <li>Receiving job alerts and recommendations.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-navy-700 mt-6">3. Employers & Recruiters</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>How to post job listings.</li>
                    <li>Reviewing applications and shortlisting candidates.</li>
                    <li>Managing interviews and hiring processes.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-navy-700 mt-6">4. Account & Security</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Resetting your password.</li>
                    <li>Updating account details.</li>
                    <li>Reporting suspicious activities.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-navy-700 mt-6">5. Contact Support</h2>
                <p className="text-black mt-2">If you need further assistance, feel free to reach out to us at <a href="mailto:support@findemployee.com" className="text-navy-600 underline">support@findemployee.com</a>.</p>
            </div>
            
            <footer className="bg-blue-100 text-blue-900 text-center w-96 p-4 mt-6 rounded-lg">
                <p>&copy; 2025 Find Employee. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HelpCenter;

