'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import SignInSignUp from './SingInSignUp';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const getInitials = (name: string) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 bg-transparent text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Smart Coaching</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/courses" className="hover:text-gray-300 transition-colors">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300 transition-colors">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Login / Avatar */}
        <div className="relative">
          {user ? (
            <div>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold focus:outline-none"
              >
                {getInitials(user.name ?? '')}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20">
                  <button
                    onClick={() => {
                      signOut();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition-colors">
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
    <SignInSignUp isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;