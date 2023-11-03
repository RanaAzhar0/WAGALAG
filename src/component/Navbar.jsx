import React, { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="bg-white  p-4  border-b-2 z-50 top-0 sticky">
      <div className="container  h-10 mx-auto flex justify-between items-center">
        <div className="flex items-center  ">
          <img src="images/img_img.png" alt="Logo" className="   h-12 w-12  md:h-14 md:w-14" />
        </div>
        <div className="hidden md:flex space-x-4 text-black">
          <ul className="flex space-x-4">
            <li className=" custom-hover text-base md:font-bold  p-2 rounded cursor-pointer">Home      </li>
            <li className=" custom-hover text-base md:font-bold  p-2 rounded cursor-pointer">Our Story  </li>
            <li className=" custom-hover text-base md:font-bold  p-2 rounded cursor-pointer">Events      </li>
            <li className=" custom-hover text-base md:font-bold  p-2 rounded cursor-pointer">Offers     </li>
            <li className=" custom-hover text-base md:font-bold  p-2 rounded cursor-pointer">Contact    </li>
          </ul>
          <button className="bg-indigo-900 rounded-lg uppercase hover:bg-blue-600 text-white p-2  cursor-pointer">
          Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded cursor-pointer">
          Buy Tickets
          </button>
        
        </div>
         

        <div className="md:hidden">
          <button onClick={toggleNav} className="to-black">
            {showNav ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {showNav && (
        
        <div className="md:hidden flex flex-col text-center items-center space-y-2 mt-2">
          <ul className='text-center w-40'>
            <li className="transform   transition duration-500 hover:scale-75 hover:bg-blue-600  p-2 rounded cursor-pointer font-semibold text-sm">Home      </li>
            <li className="transform   transition duration-500 hover:scale-75 hover:bg-blue-600  p-2 rounded cursor-pointer font-semibold text-sm">Our Story </li>
            <li className="transform   transition duration-500 hover:scale-75 hover:bg-blue-600  p-2 rounded cursor-pointer font-semibold text-sm">Events    </li>
            <li className="transform   transition duration-500 hover:scale-75 hover:bg-blue-600  p-2 rounded cursor-pointer font-semibold text-sm">Offers    </li>
            <li className="transform   transition duration-500 hover:scale-75 hover:bg-blue-600  p-2 rounded cursor-pointer font-semibold text-sm">Contact   </li>
          </ul>
          
        </div>
        
        
        
      )}
    </nav>
  );
};

export default Navbar;
