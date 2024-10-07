import { Link } from 'react-router-dom';
import { useLocation, useResolvedPath } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';

const navLinks = [
    {
        name:'Upload',
        path:'/upload',        
    },
    {
        name:'Recieve',
        path:'/recieve',        
    },
    {
        name:'Contact Us',
        path:'/contact-us',        
    },
    {
        name:'About Us',
        path:'/about-us',        
    },
]

const Navbar = () => {
  const location = useLocation();
//   console.log(location);

   const [isMobile,setIsMobile] = useState(false);
  return (
    <div className='py-4 border-b fixed w-10/12 mx-auto'>
        <div className='flex w-full items-center justify-between'>
            {/* Left side */}
            <div className='flex items-center justify-between'>
               <Link to={'/'} className='flex gap-2 items-center '>
                <div className='p-2 rounded-full bg-slate-200'>
                    <img src={logo} alt='logo' className='text-blue-600'/>
                </div>
                    <h1 className='text-3xl font-bold font-sans text-blue-500'>Quick Share</h1>
               </Link>
            </div>

            {/* Right Side */}
            {/* Large devices  */}
            <div className='hidden md:block'>
               <div className='flex gap-4'>
               {
                    navLinks.map((li,index) => (
                        <Link to={li.path} className='flex items-center gap-3 cursor-pointer ' key={index}>
                        <p className={`font-semibold text-[16px] ${location.pathname == li.path ? "text-blue-400" : "text-slate-400"} hover:text-blue-400`}>{li.name}</p>
                        {
                            index != navLinks.length - 1 && <span className='h-5 w-[2px] bg-slate-400 opacity-50'></span>
                        }
                        </Link>
                    ))
                }
               </div>
            </div>
                {/* Mobile Devices  */}
            <div className='block md:hidden relative'>
                    <p onClick={() => setIsMobile((prev) => !prev)} className='cursor-pointer text-white'>Menu</p>
                    {
                        isMobile && <div className={`absolute py-4 px-2 bg-slate-200 rounded-xl w-[160px] -right-5 top-10 flex flex-col gap-2`}>
                        <ul className='flex flex-col w-full gap-2'>
                            {
                                navLinks.map((li,index) => (
                                <Link to={li.path} className={`flex w-full rounded-lg text-center gap-3 cursor-pointer py-2 px-3 ${location.pathname == li.path ? "bg-slate-400 text-white" : "bg-slate-200 text-slate-500"}`} key={index}>
                                    <p className={`font-semibold w-full text-[16px]`}>{li.name}</p>
                                </Link>
                                ))
                            }
                        </ul>
                    </div>
                    }
            </div>
        </div>
    </div>
  )
}

export default Navbar;