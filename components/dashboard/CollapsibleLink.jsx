import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink  ({ href, title, setShowSidebar}) {
  return (
    <Link 
      className='flex items-center justify-between rounded-md py-2 pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 space-x-5' 
      href={href}
      onClick={()=>setShowSidebar(false)}
    >
        <span className='text-sm'>{title}</span>
        <PlusCircle className='w-4 h-4'/>
    </Link>
  )
}

