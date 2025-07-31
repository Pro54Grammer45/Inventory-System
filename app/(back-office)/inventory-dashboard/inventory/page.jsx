"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, Plus, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Inventory = () => {
  const optionCards = [
    {
      title: 'Item Groups',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '#',
      linkTitle: 'New Item Group',
      enabled: true,
      icon: Boxes,
    },
    {
      title: 'Items',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '#',
      linkTitle: 'New Item',
      enabled: true,
      icon: Shirt,
    },
    {
      title: 'Composite Items',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '#',
      linkTitle: 'New Composite Item',
      enabled: false,
      icon: Component,
    },
    {
      title: 'Price Lists',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut?',
      link: '#',
      linkTitle: 'New Composite Item',
      enabled: false,
      icon: ScrollText,
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