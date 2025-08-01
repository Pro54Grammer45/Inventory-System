import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'

const SalesOverview = () => {
    const salesActivity = [
        {
            title: 'To be packed',
            number: 10,
            unit: 'Qty',
            href: '#',
            color: 'text-blue-600',
        },
        {
            title: 'To be shipped',
            number: 24,
            unit: 'Pkgs',
            href: '#',
            color: 'text-red-600',
        },
        {
            title: 'To be delivered',
            number: 12,
            unit: 'Pkgs',
            href: '#',
            color: 'text-green-600',
        },
        {
            title: 'To be invoiced',
            number: 15,
            unit: 'Qty',
            href: '#',
            color: 'text-yellow-400',
        },
        
    ]

    const inventorySummary = [
        {
            title: 'Quantity in Hand',
            number: 10,
        },
        {
            title: 'Quantity to be received',
            number: 20,
        }
    ]
  return (
    <div className='bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4'>
        {/* Sales Activity */}
        <div className="col-span-8 border-r border-slate-300 p-8">
            <h2 className='mb-6 text-xl'>Sales Activity</h2>
            <div className="pr-8 grid grid-cols-4 gap-4">
                {/* Card  */}
                {
                    salesActivity.map((item,i)=>{
                        return(
                            <SalesActivityCard item={item} key={i}/>
                        )
                    })
                }
                
            </div>
        </div>
        {/* Inventory Summary */}
        <div className="col-span-4 p-8">
            <h2 className='mb-6 text-xl'>Inventory Summary</h2>
            <div className="">
                {
                    inventorySummary.map((item,i)=>{
                        return(
                            <InventorySummaryCard item={item} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SalesOverview