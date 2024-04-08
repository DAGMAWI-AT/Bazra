import React, { useContext, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Search } from '@mui/icons-material';
import { AuthContext } from '../../../Auths/AuthProvider';

function Navbars() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {user}=useContext(AuthContext);
  console.log(user)
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <Navbar className="bg-white h-14 flex items-center justify-between overflow-hidden"> {/* Ensure no overflow */}
        <div className="flex items-center">
          <div className="md:hidden ml-2 text-black">
            <Search/>
          </div>
          <div className="hidden md:flex ml-0 flex-grow"> {/* Allow search input to grow */}
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="px-2 py-1 rounded-full border text-black border-gray-300 focus:outline-none focus:border-blue-500 text-sm w-full" // Adjusted padding and font size, allow to grow
            />
          </div>

        </div>
        {/* <div className="flex items-center ">
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img="https://dagmawiamare.netlify.app/assets/dagi-vVZ85jA3.png"
                rounded
                className="w-8 h-8 m-0"
              />
            }
            isOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          >
            <Dropdown.Header>
              <span className="block text-sm font-medium">dagm</span>
              <span className="block truncate text-xs">dagmawiamare1@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item className="w-25 h-8">Dashboard</Dropdown.Item>
            <Dropdown.Item className="w-30 h-8">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="w-30 h-8">Sign out</Dropdown.Item>
          </Dropdown>
        </div> */}
       <div className='text-black'>{user?user.email:""}</div> 
      </Navbar>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 z-10">
          {/* Dropdown content */}
        </div>
      )}
    </div>
  );
}

export default Navbars;
