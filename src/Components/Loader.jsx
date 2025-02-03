import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { LoaderContext } from "./LoaderContext";

function Loader() {
  const { loading } = useContext(LoaderContext);

  // Only render the loader when loading is true
  if (!loading) return null;

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-60"></div>
      
      {/* Spinner */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4">
          <HashLoader
            color="#38B2AC" // Tailwind teal color
            loading={loading}
            size={100} // Reduced size for better fitting
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="text-sm text-white font-semibold">Loading, please wait...</p>
        </div>
      </div>
    </>
  );
}

export default Loader;
