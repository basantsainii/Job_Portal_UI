import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-900">Privacy Policy</h1>
                
                <p className="text-black mt-4">Welcome to <span className="font-semibold text-blue-900">Find Employee</span>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">1. Information We Collect</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Personal details (e.g., name, email, phone number).</li>
                    <li>Employment-related information (e.g., resumes, job preferences).</li>
                    <li>Technical data (e.g., IP address, browser type).</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>To provide job matching services.</li>
                    <li>To communicate with users regarding job opportunities.</li>
                    <li>To improve our platform and user experience.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">3. Data Security</h2>
                <p className="text-black mt-2">We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">4. Sharing of Information</h2>
                <p className="text-black mt-2">We do not sell or rent your personal information. However, we may share your data with trusted partners for job placement services.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">5. Cookies and Tracking</h2>
                <p className="text-black mt-2">We use cookies to enhance your experience on our website. You can manage cookie preferences in your browser settings.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">6. Your Rights</h2>
                <p className="text-black mt-2">You have the right to access, update, or delete your personal information. Contact us if you wish to make any changes.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">7. Changes to Privacy Policy</h2>
                <p className="text-black mt-2">We may update this policy periodically. Continued use of our platform implies acceptance of the revised policy.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">8. Contact Us</h2>
                <p className="text-black mt-2">For any questions regarding this Privacy Policy, contact us at <a href="mailto:privacy@findemployee.com" className="text-blue-900 underline">privacy@findemployee.com</a>.</p>
            </div>
            
            <footer className="bg-blue-100 text-blue-900 text-center w-96 p-4 mt-6 rounded-lg">
                <p>&copy; 2025 Find Employee. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;

