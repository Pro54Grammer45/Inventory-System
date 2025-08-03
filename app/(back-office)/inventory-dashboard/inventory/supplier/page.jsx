import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'

export default async function Supplier  (){
  const suppliers = await getData('supplier')

  const columns = ['name','phone','email']
  return (
    <div>
      {/* Header */}
      <FixedHeader title='Suppliers' newLink="/inventory-dashboard/inventory/supplier/new"/>
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={suppliers} columns={columns} resourceTitle='supplier'/>
      </div>
      
    </div>
  )
}