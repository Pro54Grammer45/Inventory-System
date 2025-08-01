"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, Plus, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Inventory = () => {
  const optionCards = [
    {
      title: 'Items',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '/inventory-dashboard/inventory/items/new',
      linkTitle: 'New Item',
      enabled: true,
      icon: Shirt,
    },
    {
      title: 'Categories',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '/inventory-dashboard/inventory/categories/new',
      linkTitle: 'New Category',
      enabled: true,
      icon: Boxes,
    },
    {
      title: 'Brands',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '/inventory-dashboard/inventory/brands/new',
      linkTitle: 'New Brand',
      enabled: true,
      icon: ScrollText,
    },
    {
      title: 'Warehouse',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '/inventory-dashboard/inventory/warehouse/new',
      linkTitle: 'New Warehouse',
      enabled: true,
      icon: ScrollText,
    },
    {
      title: 'Units',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '/inventory-dashboard/inventory/units/new',
      linkTitle: 'New Unit',
      enabled: true,
      icon: Component,
    },
    {
      title: 'Inventory Adjustments',
      description: 'Transfer stock from Main warehouse',
      link: '/inventory-dashboard/inventory/adjustments/new',
      linkTitle: 'New Adjustment',
      enabled: true,
      icon: Component,
    },
  ]

  return (
    <div>
      <FixedHeader newLink="/inventory-dashboard/inventory/items/new"/>
      <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
        {
          optionCards.map((card,i)=>{
            return (
              <OptionCard optionData={card} key={i}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Inventory