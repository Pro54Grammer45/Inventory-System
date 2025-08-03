import Link from 'next/link'
import React from 'react'

export default function SubscriptionCard () {
  return (
    <div className="px-1 py-1">
        <div className='p-3  bg-slate-900 rounded-lg'>
            <div className="border-b border-slate-600 pb-3">
                <p className='text-sm border-l-2 border-orange-400 pl-2'>
                    Your premium's trial expires in <span className='text-orange-300'>13 days</span>.
                </p>
            </div>
            <div className="flex text-sm">
                <button className=' border-r border-slate-600 p-1'>Change Plan</button>
                <Link href='#' className='p-1'>Upgrade</Link>
                
            </div>
        </div>
    </div>
  )
}
