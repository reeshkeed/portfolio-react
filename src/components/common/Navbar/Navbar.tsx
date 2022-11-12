import logo from '@assets/logo.svg';
import { Link } from '@components/base/Link';
import { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItem = [
  { name: 'Home' },
  { name: 'Projects' },
  { name: 'Skills' },
  { name: 'Contact' },
];

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between items-center p-8 xl:p-12">
      <img className="w-10 xl:w-14 z-10" src={logo} alt="Girish Daloso" />

      {/* Hamburger button for sidebar*/}
      <button
        className="z-10 md:hidden"
        onClick={() => setShowNav((prevValue) => !prevValue)}
      >
        {showNav ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Sidebar: Navigation for smaller screen */}
      <Sidebar navItem={navItem} showNav={showNav}></Sidebar>

      {/* Navigation for tablet screen or higher */}
      <div className="hidden md:flex md:gap-10">
        {navItem.map((item) => (
          <Link name={item.name} key={item.name} />
        ))}
      </div>
    </nav>
  );
};
