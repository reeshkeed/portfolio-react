import logo from '@assets/logo.svg';
import { BaseLink } from '@components/base/BaseLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Sidebar } from '../Sidebar/Sidebar';

const navItem = [
  { name: 'Home' },
  { name: 'Projects' },
  { name: 'Skills' },
  { name: 'Contact' },
];

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="absolute w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-8 xl:p-12">
        <img className="w-10 xl:w-14 z-10" src={logo} alt="Girish Daloso" />

        {/* Hamburger button for sidebar */}
        <button
          className="z-10 md:hidden"
          onClick={() => setShowNav((prevValue) => !prevValue)}
          type="button"
        >
          {showNav ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Sidebar: Navigation for smaller screen */}
        <Sidebar navItem={navItem} showNav={showNav} />

        {/* Navigation for tablet screen or higher */}
        <div className="hidden md:flex md:gap-10">
          {navItem.map((item) => (
            <BaseLink name={item.name} key={item.name} />
          ))}
        </div>
      </div>
    </nav>
  );
};
