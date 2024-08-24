import { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import { UserContext } from "../UserContext";
import { RxExit } from 'react-icons/rx';
import { BsFillCaretDownFill } from 'react-icons/bs';


export default function Header() {
  const {user,setUser} = useContext(UserContext);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();


  async function logout(){
    await axios.post('https://backend-event-qj0c.onrender.com/api/auth/logout');
    setUser(null);
  }
//! Search input ----------------------------------------------------------------
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <header className='flex py-2 px-6 sm:px-6 justify-between place-items-center'>
          
          <Link to={'/'} className="flex item-center ">
            <img src="../src/assets/logo.png" alt="" className='w-26 h-9'/>
          </Link>
         

       
    
          
          <Link to={'/createEvent'}> 
            <div className='hidden md:flex flex-col place-items-center py-1 px-2 rounded text-primary cursor-pointer hover:text-primarydark hover:bg-white hover:shadow-sm shadow-gray-200 hover:transition-shadow duration-1500'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-3 py-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div className='font-bold color-primary text-sm'>Create Event</div>
            </div>  
          </Link>

          <div className='hidden lg:flex gap-5 text-sm'>
          </div>
          

          

        {/* -------------------IF user is Logged DO this Main-------------------- */}
        {!!user &&(
          
          <div className="flex flex-row items-center gap-2 sm:gap-8 ">
            <div className="flex items-center gap-2">
              <Link to={'/useraccount'}>  
                {user.name.toUpperCase()}
              </Link>
              
              <BsFillCaretDownFill className="h-5 w-5 cursor-pointer hover:rotate-180 transition-all" onClick={() => setisMenuOpen(!isMenuOpen)}/>
            </div>
            <div className="hidden md:flex">
              <button onClick={logout} className="secondary">
                <div>Log out</div>
                <RxExit/>
              </button>
            </div>
          </div>  
        )}

        {/* -------------------IF user is not Logged in DO this MAIN AND MOBILE-------------------- */}
        {!user &&(
          <div>
            
            <Link to={'/login'} className=" ">
              <button className="primary">
                <div>Sign in </div>
              </button>
            </Link>
          </div>
        )}
          
          {/* -------------------IF user is Logged DO this Mobile -------------------- */}
          {!!user &&(
            //w-auto flex flex-col absolute bg-white pl-2 pr-6 py-5 gap-4 rounded-xl
            <div className="absolute z-10 mt-64 flex flex-col w-48 bg-white right-2 md:right-[160px] rounded-lg shadow-lg"> 
            {/* TODO: */}
              <nav className={`block ${isMenuOpen ? 'block' : 'hidden'} `}>
                <div className="flex flex-col font-semibold text-[16px]">
                <Link className="flex hover:bg-background hover:shadow py-2 pt-3 pl-6 pr-8 rounded-lg" to={'/createEvent'} >
                  Create Event
                </Link>
                
               

                <Link className="flex hover:bg-background hover:shadow py-2 pl-6 pb-3 pr-8 rounded-lg" onClick={logout}>
                  Log out
                </Link>
                </div>
              </nav>
            </div>
        )}

        </header>
          
    </div>
  )
}
