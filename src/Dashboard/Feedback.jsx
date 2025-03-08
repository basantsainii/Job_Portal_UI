import React, { useState } from 'react';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-navy-800">Feedback</h1>
          <p className="text-black mt-4">We value your feedback! Let us know how we can improve your experience.</p>
          <p className="text-black mt-2">Your opinions help us enhance our services and provide a better experience for job seekers and employers.
          Whether you have suggestions, encountered an issue, or just want to share your thoughts, we would love to hear from you.</p>
          
          {!submitted ? (
              <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="mb-4">
                      <label className="block text-navy-700 font-semibold">Name</label>
                      <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-lg" 
                          placeholder="Your Name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-navy-700 font-semibold">Email</label>
                      <input 
                          type="email" 
                          className="w-full p-2 border border-gray-300 rounded-lg" 
                          placeholder="Your Email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-navy-700 font-semibold">Message</label>
                      <textarea 
                          className="w-full p-2 border border-gray-300 rounded-lg" 
                          placeholder="Your Feedback" 
                          rows="4" 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                          required
                      ></textarea>
                  </div>
                        <button 
                            type="submit" 
                            className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-300 transition"
                        >
                            Submit Feedback
                        </button>
                    </form>
                ) : (
                    <div className="mt-6 text-green-900 font-semibold">Thank you for your feedback!</div>
                )}
            </div>
            
            <footer className="bg-blue-100 text-blue-900 text-center w-96 p-4 mt-6 rounded-lg">
                <p>&copy; 2025 Find Employee. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Feedback;

