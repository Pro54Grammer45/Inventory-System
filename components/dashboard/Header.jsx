import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import Search from './Search'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>
      {/* Left Segment */}
        <div className="flex gap-3">
          {/* Recent activities */}
          <button>
            <History className='w-6 h-6'/>
          </button>
          {/* Search */}
          <Search/>
        </div>
      {/* Right Segment */}
        <div className="flex items-center gap-3">
          {/* Plus Icon */}
          <div className="pr-2 border-r border-gray-300">
            <button className='p-1 bg-blue-600 rounded-lg'>
              <Plus className='text-slate-50 w-4 h-4'/>
            </button> 
          </div>
          <div className="flex border-r border-gray-300 space-x-2">
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
              <Users className='text-slate-900 w-4 h-4'/>
            </button>
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
              <Bell className='text-slate-900 w-4 h-4'/>
            </button>
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
              <Settings className='text-slate-900 w-4 h-4'/>
            </button>
          </div>
          {/*  */}
          <div className="flex gap-3">
            <button className='flex items-center'>
              <span>Garat</span>
              <ChevronDown className='w-4 h-4'/>
            </button>
            <button>
              <Image alt='user image' width={96} height={96} className='rounded-full w-8 h-8 border border-slate-800' src='/user.jpg'/>
            </button>
            <button>
              <LayoutGrid className='w-6 h-6 text-slate-900'/>
            </button>
          </div>
          {/*  */}
        </div>
    </div>
  )
}

export default Header