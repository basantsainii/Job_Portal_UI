import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
// importing routes
import SignUpForm from './Login/SignUpForm.jsx'
import MailVerifyFailed from './VerificationComponent/MailVerifyFailed.jsx'
import MailVerifySuccess from './VerificationComponent/MailVerifySuccess.jsx'
import MailVerification from './VerificationComponent/MailVerification.jsx'
import LoginForm from './Login/LoginForm.jsx'
import ForgetPassword from './Login/ForgetPassword.jsx'
import ChangePassword from './Login/ChangePassword.jsx'
import Loader from './Components/Loader.jsx'
import ReVerifyMail from './VerificationComponent/ReVerifyMail.jsx'
import UserRole from './Login/UserRole.jsx'
import EmployeeDashboard from './Dashboard/EmployeeDashboard/EmployeeDashboard.jsx'
import EmployerDashboard from './Dashboard/EmployerDashboard/EmployerDashboard.jsx'
import Footer from './Dashboard/Footer.jsx'

import JwtToken from './Test-pages/JwtToken.jsx'
import EmployeeSideBar from './Dashboard/EmployeeDashboard/EmployeeNavigation.jsx'
import EmployeeHomeContent from './Dashboard/EmployeeDashboard/EmployeeHomeContent.jsx'
import EmployeeJobs from './Dashboard/EmployeeDashboard/EmployeeJobs.jsx'
import EmployeeApplied from './Dashboard/EmployeeDashboard/EmployeeApplied.jsx'
import EmpCompanies from './Dashboard/EmployeeDashboard/EmpCompanies.jsx'
import AboutUs from './Dashboard/AboutUs.jsx'
import TermsAndConditions from './Dashboard/TermsAndConditions.jsx'
import PrivacyPolicy from './Dashboard/PrivacyPolicy.jsx'
import Feedback from './Dashboard/Feedback.jsx'
import HelpCenter from './Dashboard/HelpCenter.jsx'
import GeneralDashBoard from './Dashboard/GeneralDashboard/GeneralDashBoard.jsx'
import SearchJobs from './Dashboard/GeneralDashboard/SearchJobs.jsx'
import GeneralHome from './Dashboard/GeneralDashboard/GeneralHome.jsx'
import SearchByCompanies from './Dashboard/GeneralDashboard/SearchByCompanies.jsx'
import AccountAccessRoot from './Login/AccountAccessRoot.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Toaster position='top-middle'/>
    <Loader/>
    <Routes> 
       {/* general dashboard routes  */}
      <Route path='/' element={<GeneralDashBoard/>}>
            <Route index element={<Navigate to='home'/>}/>
            <Route path='home' element={<GeneralHome/>}/>
            <Route path='search-job' element={<SearchJobs/>}/>
            <Route path='search-by-companies' element={<SearchByCompanies/>}/>
            <Route path='about-us' element={<AboutUs></AboutUs>}/>

      </Route>


      {/* login signup verification password routes  */}
      <Route path='/' element={<AccountAccessRoot/>}>
            <Route index element={<Navigate to="sign-up"/>} />
            <Route path="sign-up" element={<SignUpForm />} />
            <Route path='mail-verification' element={<MailVerification/>}/>
            <Route path='mail-verification-error' element={<MailVerifyFailed/>}/>
            <Route path='mail-verification-successful' element={<MailVerifySuccess/>}/>
            <Route path='login' element={<LoginForm/>} />
            <Route path='password-change-requested' element={<ForgetPassword/>}/>
            <Route path='change-password' element={<ChangePassword/>}/> 
            <Route path='resend-mail-verification-link' element={<ReVerifyMail/>}/>
            <Route path='select-role-of-user' element={<UserRole/>}/>
      </Route>

        {/* employee dashboard routes */}
      <Route path="/employee-dashboard/" element={<EmployeeDashboard/>}>
            <Route index element={<Navigate to="home"/>}/>
            <Route path='home' element={<EmployeeHomeContent/>}/>
            <Route path='jobs' element={<EmployeeJobs/>}/>
            <Route path='applied' element={<EmployeeApplied/>}/>
            <Route path='companies' element={<EmpCompanies/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
            <Route path='feedback' element={<Feedback/>}/>
            <Route path='help-center' element={<HelpCenter/>}/>
      </Route>


      {/* Employer Dashboard Routes */}
      <Route path="/employer-dashboard" element={<EmployerDashboard/>}>

      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
    </BrowserRouter>

{/* <JwtToken></JwtToken> */}
    </>
  )
}

export default App
