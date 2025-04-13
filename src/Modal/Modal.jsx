import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion"; // Motion for animations
import UpdateProfileDp from "../Dashboard/EmployeeDashboard/Profile/UpdateProfileDp";
import UpdateResume from "../Dashboard/EmployeeDashboard/Profile/UpdateResume";
import { ModalContext } from "./ModalContext";
import UserEducation from "../Dashboard/EmployeeDashboard/Profile/UserEducation";
import Confirmation from "../Components/Confirmation";

function Modal() {
  const {edu, setEdu, activeModal, setActiveModal } = useContext(ModalContext);

  if (!activeModal) return null;

  let PromptContent;

  switch (activeModal) {
    case "dp":
      PromptContent = <UpdateProfileDp />;
      break;
    case "resume":
      PromptContent = <UpdateResume />;
      break;
    case "education":
      PromptContent = <UserEducation defaultEdu={edu} />;
      break;
    case "confirm1":
      PromptContent = <Confirmation defaultEdu={edu} />;
      break;
    default:
      PromptContent = null;
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-10"
      onClick={() => setActiveModal(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={() => {setActiveModal(null); setEdu(null);}}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-600 transition transform hover:scale-110"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Modal Content */}
        {PromptContent}
      </motion.div>
    </motion.div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
