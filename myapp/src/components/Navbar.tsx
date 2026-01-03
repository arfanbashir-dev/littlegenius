'use client'

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../public/logopreschool.png';

import { IoSearch } from "react-icons/io5";
import { useSession } from "next-auth/react";

import {navObj} from '@/constants/NavObj';
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {

  const { data: session } = useSession();
  
  
  return (
  
  <nav className="bg-slate-600  fixed z-10 h-32 w-full  ">

    <div className=" max-w-screen-xl mx-auto  sm:px-6">
      
      <div className="flex-between">

        {/* Logo + Title */}
        <div className="flex-center ">
          <Image src={LogoImg} alt="logo" className="w-24 " />
          <span>Little Genius TechSchool</span>
        </div>

        {/* Search */}
        <div className="relative flex-center gap-1">
          <input type="text" placeholder="Search" className="mr-10  bg-light "/>
          <IoSearch className="absolute top-2 right-12 text-white" />
          
        </div>

      </div>

      {/* Nav Links */}
      
        <div className="lg:flex-center gap-10 ">
          {navObj.map((item) => (
            <div key={item.id} className="group relative ">
              <Link href={item.href} className="link flex-center gap-1  font-medium">
                {item.title}
                {item.submenu && <FaCaretDown className="group-hover:rotate-180" />}
              </Link>
              {item.submenu && (
                <ul className="absolute  left-0 w-48 bg-light font-medium  p-2 rounded-lg shadow-lg hidden group-hover:block z-50">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link href={sub.href} className="block px-4 py-2 link">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}          
          
        
          {session?.user?.role === 'admin' && (
            <Link href="/dashboard" className="link font-medium">DASHBOARD</Link>
          )}     
        
        </div>


      

            
        </div>
      
          
    </nav>
  );
}











