import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'

export default async function Adjustments  (){
  const addAdjustmentsData = getData('adjustments/add')
  const transferAdjustmentsData = getData('adjustments/transfer')

  const [addAdjustments,transferAdjustments] = await Promise.all([addAdjustmentsData,transferAdjustmentsData])

  const addColumns = ['referenceNumber','addStockQty','receivingWarehouseId']
  const transferColumns = ['referenceNumber','transferStockQty','givingWarehouseId','receivingWarehouseId']
  return (
    <div>
      {/* Header */}
      <FixedHeader title='Adjustments' newLink="/inventory-dashboard/inventory/adjustments/new"/>
      {/* Table */}
      <div className="my-4 p-8">
        <h2 className='py-4 text-xl font-semibold'>Stock Increment Adjustment</h2>
        <DataTable data={addAdjustments} columns={addColumns}/>
      </div>
      <div className="my-4 p-8">
        <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustment</h2>
        <DataTable data={transferAdjustments} columns={transferColumns}/>
      </div>
      
    </div>
  )
}
