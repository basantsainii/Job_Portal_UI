import React, { useEffect, useState } from 'react'
import comp1 from '../assets/companies/comp1.jpeg'
import comp2 from '../assets/companies/comp2.webp'
import comp3 from '../assets/companies/comp3.jpeg'
import comp4 from '../assets/companies/comp4.jpeg'
import comp5 from '../assets/companies/comp5.jpeg'
import comp6 from '../assets/companies/comp6.webp'
import comp7 from '../assets/companies/comp7.webp'
import comp8 from '../assets/companies/comp8.webp'
import comp9 from '../assets/companies/comp9.webp'
import comp10 from '../assets/companies/comp10.webp'
import comp11 from '../assets/companies/comp11.jpeg'
import comp12 from '../assets/companies/comp12.webp'
import comp13 from '../assets/companies/comp13.jpeg'
import comp14 from '../assets/companies/comp14.jpeg'
import comp15 from '../assets/companies/comp15.jpeg'
import comp16 from '../assets/companies/comp16.webp'
import comp17 from '../assets/companies/comp17.webp'
import comp18 from '../assets/companies/comp18.webp'
import comp19 from '../assets/companies/comp19.webp'
import comp20 from '../assets/companies/comp20.webp'

function CompanyCrousal() {

const CompanyData = [
    {name : comp1, link : ""}, {name : comp2, link : ""}, {name : comp3, link : ""}, {name : comp4, link : ""},
    {name : comp5, link : ""}, {name : comp6, link : ""}, {name : comp7, link : ""}, {name : comp8, link : ""},
    {name : comp9, link : ""}, {name : comp10, link : ""}, {name : comp11, link : ""}, {name : comp12, link : ""},
    {name : comp13, link : ""}, {name : comp14, link : ""}, {name : comp15, link : ""}, {name : comp16, link : ""},
    {name : comp17, link : ""}, {name : comp18, link : ""}, {name : comp19, link : ""}, {name : comp20, link : ""},
]

const [companyState, setCompanyState] = useState(CompanyData)

const ChangeImage = ()=>{
    const ImageToChange = [...companyState];
    const ChangedImage = ImageToChange.slice(1);
    // console.log(ChangedImage)
    setCompanyState([...ChangedImage,ImageToChange[0]])
}
let interval;
const intrvl = ()=>{
    interval = setInterval(ChangeImage, 2000);
}
useEffect(() => {
    intrvl()
    return () => clearInterval(interval);
  }, );

const ReverseChangeImage = ()=>{
    const ImageToChange = [...companyState];
    const ChangedImage = ImageToChange.pop();  
    setCompanyState([ChangedImage, ...ImageToChange])
}

  return (<div className='px-14 bg-white border-t border-b  '>
      <div className='flex justify-start items-center overflow-hidden w-[90%]'>
      <i onClick={ChangeImage}  className="fa-solid fa-angles-right absolute right-28 z-10 rounded-full bg-white border p-1 "></i>

        <div className='p-4'>
            Featured  <br /> Companies
        </div>
        <div className='overflow-hidden flex'>

        <div className=' pl-6 border-l flex items-center align-middle justify-evenly gap-x-8 relative '>
        <i onClick={ReverseChangeImage} className="fa-solid fa-angles-left absolute -left-3 rounded-full bg-white border p-1 "></i>
            {
                companyState.map((obj, index)=>{
                        return(
                            <div key={index} onMouseEnter={()=>clearInterval(interval)} onMouseLeave={intrvl} className='w-36 duration-300 animate-crosal'>
                                <img src={obj.name} alt="" className='' />
                            </div>
                        )
                })
            }
        </div>
        </div>
      </div>
    </div>)
}

export default CompanyCrousal
