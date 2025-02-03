import axios from 'axios';
import React, { useContext, useState } from 'react';
import { LoaderContext } from '../Components/LoaderContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Components/DataContext';
import jobportalGif from '../assets/jobportal2.gif'; // Ensure correct path

function UserRole() {
    const [role, setRole] = useState(null); 
    const { setLoading } = useContext(LoaderContext);
    const { data } = useContext(DataContext);
    const navigate = useNavigate();

    const ChooseCategory = async (e) => {
        e.preventDefault();
        
        if (!role) {
            toast.error("Please select a category");
            return;
        }

        setLoading(true);
        try {
            const email = data.email; 
            const res = await axios.post("http://localhost:3000/api/select-your-role", { role, email });

            toast.success(res.data.message || "Role selected successfully!");

            // what is the meaning of this line
            await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for smoother transition

            navigate(role === "Employee" ? "/employee-dashboard" : "/employer-dashboard");
        } catch (err) {
            console.error("Error:", err);
            toast.error(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto p-6 w-full sm:w-2/3 md:w-[50%] lg:w-[45%] xl:w-[40%] rounded-md shadow-lg">
            <div className="flex justify-between items-center">
                <img src={jobportalGif} width="150px" alt="Job Portal" />
                <h2 className="text-3xl font-bold text-blue-950 text-center">Category</h2>
            </div>
            <br />
            <form onSubmit={ChooseCategory}>
                <div className="space-y-3">
                    <button
                        type="button"
                        onClick={() => setRole("Employee")}
                        className={`w-full py-2 rounded-md text-center transition-all ${
                            role === "Employee" ? "bg-blue-950 text-white scale-105" : "bg hover:bg-emerald-950 text-white"
                        }`}
                    >
                        Employee
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("Employer")}
                        className={`w-full py-2 rounded-md text-center transition-all ${
                            role === "Employer" ? "bg-blue-950 text-white scale-105" : "bg hover:bg-emerald-950 text-white"
                        }`}
                    >
                        Employer
                    </button>
                </div>
                <br />
                <div className="text-end">
                    <input
                        type="submit"
                        value="Continue"
                        className="px-4 py-2 rounded-md bg-yellow-600 hover:bg-yellow-500 hover:scale-105 transition-all cursor-pointer text-blue-950 shadow-md"
                    />
                </div>
            </form>
        </div>
    );
}

export default UserRole;
