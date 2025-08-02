import CreateItemForm from '@/components/dashboard/CreateItemForm'
import FormHeader from '@/components/dashboard/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewItem () {
  // Sequential Fetching => Causes Waterfall
  // const categories = await getData('categories')
  // const units = await getData('units');
  // const brands = await getData('brands');
  // const warehouses = await getData('warehouse');
  // const suppliers = await getData('supplier');

   const categoriesData =  getData('categories')
  const unitsData =  getData('units');
  const brandsData =  getData('brands');
  const warehousesData =  getData('warehouse');
  const suppliersData =  getData('supplier');

  // Parallel Fetching
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData
  ])


  return (
    <div>
      {/* Header */}
      <FormHeader title='New Item' href='/inventory-dashboard/inventory'/>
      {/* Form */}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </div>
  )
}

