"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import CollapsibleLink from './CollapsibleLink'
import SidebarDropdownLink from './SidebarDropdownLink'

export default function Sidebar ({ showSidebar, setShowSidebar }) {
    console.log(showSidebar)
    const inventoryLinks =[
        {
            title: 'All',
            href: '/inventory-dashboard/inventory',
        },
        {
            title: 'Items',
            href: '/inventory-dashboard/inventory/items',
        },
        {
            title: 'Categories',
            href: '/inventory-dashboard/inventory/categories',
        },
        {
            title: 'Brands',
            href: '/inventory-dashboard/inventory/brands',
        },
        {
            title: 'Units',
            href: '/inventory-dashboard/inventory/units',
        },
        {
            title: 'Warehouse',
            href: '/inventory-dashboard/inventory/warehouse',
        },
        {
            title: 'Inventory Adjustments',
            href: '/inventory-dashboard/inventory/adjustments',
        },
        {
            title: 'Supplier',
            href: '/inventory-dashboard/inventory/supplier',
        }
    ]

    const salesLinks =[
        {
            title: 'Customers',
            href: '#',
        },
        {
            title: 'Sales Orders',
            href: '#',
        },
        {
            title: 'Packages',
            href: '#',
        },
        {
            title: 'Shipments',
            href: '#',
        },
        {
            title: 'Invoices',
            href: '#',
        },
        {
            title: 'Sales Receipts',
            href: '#',
        },
        {
            title: 'Payment Received',
            href: '#',
        },
        {
            title: 'Sales Returns',
            href: '#',
        },
        {
            title: 'Credit Notes',
            href: '#',
        }
    ]

  return (
    <div className={`${showSidebar?'w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed  lg:block z-50':'w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed hidden lg:block z-50'}`}>
        {/* Top Part */}
        <div className="flex flex-col">
            {/* Logo */}
            <div className="flex justify-between">
                <Link href='#' className="flex space-x-2 items-center bg-slate-950 py-3 px-2 w-full">
                    <ShoppingCart/>
                    <span className='font-semibold text-xl'>Inventory</span>
                </Link>
                <button className='px-4 py-3 bg-slate-950 lg:hidden' onClick={()=>setShowSidebar(false)}>
                    <X className='h-6 w-6 text-white'/>
                </button>
            </div>
            {/* Links */}
            <nav className='flex flex-col gap-1 px-3 py-6'>
                <Link href='/inventory-dashboard/home/dashboard' className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'>
                    <Home className='w-4 h-4'/>
                    <span>Home</span>
                </Link>

                <SidebarDropdownLink 
                    title='Inventory' 
                    items={inventoryLinks} 
                    icon={BaggageClaim}
                    setShowSidebar={setShowSidebar}
                />

                <SidebarDropdownLink 
                    title='Sales' 
                    items={salesLinks} 
                    icon={ShoppingBasket}
                />

                <button className='flex items-center space-x-2 p-2'>
                    <ShoppingBag className='w-4 h-4'/>
                    <span>Purchases</span>
                </button>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <Cable className='w-4 h-4'/>
                    <span>Integrations</span>
                </Link>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <BarChart4 className='w-4 h-4'/>
                    <span>Reports</span>
                </Link>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <Files className='w-4 h-4'/>
                    <span>Documents</span>
                </Link>
            </nav>
            <SubscriptionCard/>
        </div>

        {/* Bottom Part */}
        <div className="flex flex-col ">
            <button className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
                <ChevronLeft/>
            </button>
        </div>
        {/* Subscription Card */}
        {/* Footer Icon */}
    </div>
  )
}

