import DashboardBanner from '@/components/dashboard/DashboardBanner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
    </div>
  )
}

export default Dashboard