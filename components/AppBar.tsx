import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="mb-8">
      <nav className="relative flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 md:px-16">
        {/* Logo */}
        <div className="flex justify-center w-full sm:w-1/4">
          <Link href="/">
            <Image
              src={`/assets/layout/logo.png`}
              alt="image"
              width={190}
              height={280}
            />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden sm:flex justify-center w-full sm:w-1/2 space-x-4 sm:space-x-8 mt-4 sm:mt-0">
          <Link href="/exchange">
            <span className="text-[#FFFFFF] py-2 sm:py-4 hover:text-[#9945FF]">Exchange</span>
          </Link>
          <Link href="/last-transactions">
            <span className="text-[#FFFFFF] py-2 sm:py-4 hover:text-[#9945FF]">Last Transactions</span>
          </Link>
          <Link href="/invite-friend">
            <span className="text-[#FFFFFF] py-2 sm:py-4 hover:text-[#9945FF]">Invite Friend</span>
          </Link>
          <Link href="/notifications">
            <span className="text-[#FFFFFF] py-2 sm:py-4 hover:text-[#9945FF]">Notifications</span>
          </Link>
        </div>

        {/* Drawer toggle */}
        <button
          className="block sm:hidden text-[#FFFFFF] py-2 px-4 hover:text-[#9945FF]"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Login and Signup buttons */}
        <div className="flex justify-center w-full sm:w-1/4 mt-4 sm:mt-0 space-x-2">
          <Link href="/login">
            <span className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#9945FF] hover:text-[#FFFFFF] w-full sm:w-auto">
              LOG IN
            </span>
          </Link>
          <Link href="/signup">
            <span className="text-[#FFFFFF] bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#FFFFFF] hover:text-[#9945FF] w-full sm:w-auto">
              SIGN UP
            </span>
          </Link>
        </div>
      </nav>

      {/* Drawer content */}
      {isDrawerOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1E1E1E] z-10 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/exchange">
              <span className="text-[#FFFFFF] hover:text-[#9945FF]">Exchange</span>
            </Link>
            <Link href="/last-transactions">
              <span className="text-[#FFFFFF] hover:text-[#9945FF]">Last Transactions</span>
            </Link>
            <Link href="/invite-friend">
              <span className="text-[#FFFFFF] hover:text-[#9945FF]">Invite Friend</span>
            </Link>
            <Link href="/notifications">
              <span className="text-[#FFFFFF] hover:text-[#9945FF]">Notifications</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppBar;