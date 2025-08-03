import React from 'react'
import { getData } from '@/lib/getData';
import NewItem from '../../new/page';
import CreateItemForm from '@/components/dashboard/CreateItemForm';
import FormHeader from '@/components/dashboard/FormHeader';

export default async function Update({ params:{id} }) {
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
    const data = await getData(`items/${id}`);
    console.log(data)
  return (
    <div >
      {/* Header */}
      <FormHeader title='Update Item' href='/inventory-dashboard/inventory/items'/>
      {/* Form */}
      <CreateItemForm 
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
        initialData={data}
        isUpdate={true}
      />
    </div>
    // <NewItem initialData={data} isUpdate={true}/>
  )
}
