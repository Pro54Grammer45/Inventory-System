"use client"
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React,{useState} from 'react'

export default function Layout  ({children}) {
  const [showSidebar,setShowSidebar] = useState(false)
  return (
    <div className='flex'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <main className='ml-0 lg:ml-60 w-full bg-slate-100 min-h-screen'>
            <Header setShowSidebar={setShowSidebar}/>
            {children}
        </main>
    </div>
  )
}

