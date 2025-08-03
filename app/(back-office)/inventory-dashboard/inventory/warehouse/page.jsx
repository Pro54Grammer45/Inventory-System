import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'

export default async function Warehouse  (){
  const warehouses = await getData('warehouse')

  const columns = ['name','location','warehouseType']
  return (
    <div>
      {/* Header */}
      <FixedHeader title='Warehouses' newLink="/inventory-dashboard/inventory/warehouse/new"/>
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={warehouses} columns={columns} resourceTitle='warehouse'/>
      </div>
      
    </div>
  )
}