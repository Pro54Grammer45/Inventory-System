"use client"
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNavbar () {
    const pathname = usePathname();
    console.log(pathname); 
    const navLinks = [
        {
            title: 'Dashboard',
            href: '/inventory-dashboard/home/dashboard'
        },
        {
            title: 'Getting Started',
            href: '/inventory-dashboard/home/getting-started'
        },
        {
            title: 'Recent Updates',
            href: '/inventory-dashboard/home/updates'
        },
        {
            title: 'Announcements',
            href: '/inventory-dashboard/home/announcements'
        }
    ]
  return (
    <div className='h-32 bg-green-300 p-5 border-b border-slate-300'>
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 items-center justify-center rounded-lg bg-white ">
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className='font-semibold text-slate-700'>Hello, JB WEBDEVELOPER</p>
                <span className='text-sm'>Garat</span>
            </div>
        </div>
        <nav className='sticky mt-6 flex space-x-4'>
            {navLinks.map((item,i)=>{
                return(
                    <Link key={i} href={item.href} className={`${pathname === item.href ? "py-1 border-b-2 border-blue-600" : "py-1"} `}>
                        {item.title}
                    </Link>
                )
            })}
        </nav>
    </div>
  )
}
