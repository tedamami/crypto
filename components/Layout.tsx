import React, { ReactNode } from 'react';
import Image from 'next/image';
import backgroundImage from '../assets/easy.jpeg';
import AppBar from './AppBar';
import styles from '../src/styles/globals.module.css'

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-full relative">
      <AppBar />
      <div className="text-center text-[#FFFFFF]">
        <h1 className="text-3xl font-bold mb-4">Easy send and Request Crypto.</h1>
        <p className="text-lg text-[#FFFFFF]">Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
      </div>
      <div className="relative z-10 p-8 ">{children}</div>
    </div>
  );
};

export default Layout;