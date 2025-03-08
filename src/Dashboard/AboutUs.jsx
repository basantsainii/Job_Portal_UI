import React from 'react';
import jobSearch1 from '../../src/assets/jobSearch.png'

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center  p-6">
            
            <div className="bg-white w-full max-w-4xl mt-10 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-900">About Us</h1>
                <h2 className="text-2xl font-semibold text-blue-900 mt-4">Welcome to <span className="text-blue-900">Find Employee</span> – Your Gateway to Smart Hiring & Career Growth</h2>
                
                <div className=" m-auto mt-10">
                    <img src={jobSearch1} alt="" className="m-auto" />
                    <p className="text-blue-900  m-auto text-center">
                      <span className="font-bold">Find Employee</span> is an innovative
                      online job platform designed to connect job seekers with the right
                      career opportunities and employers with the best talent. Whether
                      you're a fresh graduate looking for your first job, an experienced
                      professional aiming for career growth, or a company seeking skilled
                      employees, our platform simplifies the hiring process with advanced
                      search filters, AI-driven recommendations, and seamless communication
                      tools.
                    </p>
                  </div>
                
                <p className="text-black mt-4 leading-relaxed">At <span className="font-semibold text-blue-900">Find Employee</span>, we believe in transforming the way job seekers and employers connect. Whether you're an employer looking for the perfect candidate or a job seeker searching for the right opportunity, we provide a seamless platform designed to bridge the gap between talent and opportunity.</p>
                

                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">Who We Are</h2>
                <p className="text-black mt-2"> <span className="font-semibold text-blue-900">Find Employee</span> is a cutting-edge job portal that simplifies recruitment by connecting employers with top talent. With advanced technology, AI-powered job matching, and user-friendly features, we make hiring and job searching effortless.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">What We Do</h2>
                <h3 className="text-lg font-semibold text-blue-900 mt-4">For Job Seekers:</h3>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Smart Job Search with AI-driven recommendations.</li>
                    <li>Instant Job Alerts and career notifications.</li>
                    <li>Resume Builder & Profile Optimization.</li>
                    <li>Direct Employer Connections.</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-blue-900 mt-4">For Employers & Recruiters:</h3>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Quick Job Posting with easy management.</li>
                    <li>AI-Powered Candidate Matching.</li>
                    <li>Advanced Resume Search and filtering.</li>
                    <li>Seamless Interview Scheduling.</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">Our Mission & Vision</h2>
                <p className="text-black mt-2"><span className="font-semibold text-blue-900">Vision:</span> To become the most trusted job portal, connecting talent with opportunities globally.</p>
                <p className="text-black mt-2"><span className="font-semibold text-blue-900">Mission:</span> To simplify hiring with technology-driven solutions for both job seekers and employers.</p>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">Why Choose Find Employee?</h2>
                <ul className="list-disc list-inside text-black mt-2">
                    <li>Fast & Efficient Hiring Process</li>
                    <li>Secure & Verified Profiles</li>
                    <li>Industry-Specific Job Listings</li>
                    <li>Dedicated Support Team</li>
                </ul>
                
                <h2 className="text-xl font-semibold text-blue-900 mt-6">Join Us Today!</h2>
                <div className="mt-4">
                    <a href="#" className="inline-block bg-blue-100 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-200 transition">Find Jobs</a>
                    <a href="#" className="inline-block bg-blue-100 text-blue-900 px-6 py-2 rounded-lg ml-4 hover:bg-blue-200 transition">Post a Job</a>
                </div>
            </div>
            
            <footer className="bg-blue-100 text-blue-900 text-center w-96 p-4 mt-6 rounded-lg">
                <p>&copy; 2025 Find Employee. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;

