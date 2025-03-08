import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-900">Terms and Conditions</h1>
                
                <p className="text-black mt-4">Welcome to <span className="font-semibold text-blue-900">Find Employee</span>. By accessing and using our platform, you agree to comply with the following terms and conditions.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">1. Acceptance of Terms</h2>
                <p className="text-black mt-2">By using our website, you accept these terms in full. If you disagree with any part of these terms, please do not use our services.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">2. User Responsibilities</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Users must provide accurate and up-to-date information.</li>
                    <li>Job seekers and employers must use the platform ethically and legally.</li>
                    <li>Users are responsible for the security of their accounts.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">3. Employer Responsibilities</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Employers must post genuine job listings.</li>
                    <li>No misleading or fraudulent job postings are allowed.</li>
                    <li>Employers must comply with all applicable labor laws.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">4. Prohibited Activities</h2>
                <p className="text-black mt-2">Users may not:</p>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Share false or misleading information.</li>
                    <li>Engage in spamming or phishing activities.</li>
                    <li>Violate any intellectual property rights.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">5. Termination</h2>
                <p className="text-black mt-2">We reserve the right to terminate or suspend any user account found violating these terms.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">6. Limitation of Liability</h2>
                <p className="text-black mt-2">Find Employee is not responsible for any losses or damages resulting from the use of our platform.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">7. Changes to Terms</h2>
                <p className="text-black mt-2">We reserve the right to update these terms at any time. Users will be notified of any changes.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">8. Contact Us</h2>
                <p className="text-black mt-2">If you have any questions about these terms, please contact us at <a href="mailto:support@findemployee.com" className="text-blue-900 underline">support@findemployee.com</a>.</p>
            </div>
            
            <footer className="bg-blue-100 text-blue-900 text-center w-96 p-4 mt-6 rounded-lg">
                <p>&copy; 2025 Find Employee. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default TermsAndConditions;

