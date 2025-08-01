"use client"
import { CreditCard, X } from 'lucide-react'
import React,{useState} from 'react'

const DashboardBanner = () => {
    const [hidden, setHidden] = useState(false);
  return (
    <div className={`${hidden ? 'hidden' : 'grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative'}`}>
        {/* Icon */}
        <div className="col-span-2">
            <CreditCard className='w-16 h-16 text-slate-500'/>
        </div>
        {/* Text */}
        <div className="col-span-6">
            <h2 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum iste quae atque quia accusamus maxime debitis quam sunt molestiae porro.</p>
        </div>
        {/* Button */}
        <div className='col-span-3'>
            <button className='py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg'>Enable</button>
        </div>
        {/* Close Button */}
        <button onClick={()=>setHidden(true)} className="absolute top-4 right-16">
            <X className='text-slate-600'/>
        </button>
    </div>
  )
}

export default DashboardBanner