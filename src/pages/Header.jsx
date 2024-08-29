import { useContext, useRef, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { RxExit } from 'react-icons/rx';
import { BsFillCaretDownFill } from 'react-icons/bs';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();

  async function logout() {
    await axios.post('https://backend-event-qj0c.onrender.com/api/auth/logout');
    setUser(null);
  }

  return (
    <div>
      <header className="flex py-4 px-6 sm:px-8 justify-between items-center bg-white shadow-md">
        <Link to={'/'} className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-26 h-9" />
        </Link>

        {!!user && (
          <Link to={'/createEvent'} className="hidden md:flex items-center space-x-2 py-2 px-4 rounded-lg text-primary bg-white border border-primary hover:text-white hover:bg-primary hover:shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="font-semibold">Create Event</span>
          </Link>
        )}

        <div className="flex items-center space-x-4">
          {!!user ? (
            <div className="relative flex items-center space-x-2">
              <Link to={'/useraccount'} className="font-semibold text-gray-800">
                {user.name.toUpperCase()}
              </Link>
              <BsFillCaretDownFill className="h-5 w-5 cursor-pointer hover:rotate-180 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)} />
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  <nav className="flex flex-col space-y-2 py-2">
                    <Link className="px-4 py-2 hover:bg-gray-100 rounded-lg" to={'/createEvent'}>
                      Create Event
                    </Link>
                    <button className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 rounded-lg" onClick={logout}>
                      <span>Log out</span>
                      <RxExit className="h-5 w-5" />
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to={'/login'}>
                <button className="py-2 px-4 rounded-lg text-white bg-primary hover:bg-primarydark transition-all">
                  Sign in
                </button>
              </Link>
              <Link to={'/register'}>
                <button className="py-2 px-4 rounded-lg text-primary bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all">
                  Sign up
                </button>
              </Link>
              
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
