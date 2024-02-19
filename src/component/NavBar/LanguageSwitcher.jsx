import React, { useState } from 'react'
import mm from '../../assets/img/myanmar-flag-icon.svg';
import en from '../../assets/img/united-states-flag-icon.svg';
import { IoIosArrowDown } from "react-icons/io";
import { ArrowRight } from '@mui/icons-material';
import { Divider } from '@mui/material';

const LanguageSwitcher = () => {
  const [lang,setLang] =useState ({
    show:en,
    dropdown:mm,
  })
  const [toggleDropdown , setToggleDropdown] = useState(false);
  const handleLanguage = () => {

    setLang(prev =>({...prev,show:prev.show == en ? mm : en}));
    setLang(prev => ({...prev,dropdown:prev.dropdown == en?mm:en}))
    setToggleDropdown(false)
    console.log(toggleDropdown)
  }
console.log(lang);
  return (
    <div className='bg-primary-soft relative'>
      <div className="container flex items-center justify-end py-2 relative  p-3">
        <button className="border p-1 flex" onClick={()=>setToggleDropdown(!toggleDropdown)}>
            <img src={lang.show} className='w-6 h-6 ' alt="" />
          <IoIosArrowDown className='text-white text-sm'/>

        </button>
        <Divider/>
        {
          toggleDropdown && 
          <div className=" absolute top-11">
            <button className="container p-3 flex items-center justify-end py-2 bg-white  cursor-pointer hover:border-primary-soft">
              <img onClick={()=>handleLanguage()}  src={lang.dropdown} className='w-6 h-6 cursor-pointer' alt="" />
            </button>
          </div>
      
        }
      </div>
      

        {/* <button onClick={()=>handleLanguage()} className="container flex items-center justify-end py-2 cursor-pointer hover:border-primary-soft">
            <img  src={lang.dropdown} className='w-6 h-6 border' alt="" />
          </button> */}
        
    </div>
  )
}

export default LanguageSwitcher