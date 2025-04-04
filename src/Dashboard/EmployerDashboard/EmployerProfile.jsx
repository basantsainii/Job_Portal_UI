import React from "react";

const EmployerProfile = () => {
  const employerData = {
    employerName: "John Doe",
    companyName: "Tech Solutions Inc.",
    email: "johndoe@techsolutions.com",
    phone: "+1 555-123-4567",
    address: "1234 Tech Lane, Silicon Valley, CA",
    website: "https://www.techsolutions.com",
    companyDescription:
      "Tech Solutions Inc. is a leading software development company specializing in innovative solutions for various industries, including fintech, healthcare, and e-commerce.",
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-center mb-6">Employer Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{employerData.employerName}</h2>
          <p className="text-xl text-gray-600">{employerData.companyName}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
            <p className="text-gray-600"><strong>Email:</strong> {employerData.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {employerData.phone}</p>
            <p className="text-gray-600"><strong>Address:</strong> {employerData.address}</p>
            <p className="text-gray-600">
              <strong>Website:</strong> 
              <a href={employerData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {employerData.website}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Company Description</h3>
            <p className="text-gray-600">{employerData.companyDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;

