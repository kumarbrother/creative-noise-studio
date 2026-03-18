import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

const Order = () => {
  return (
    <>
    <div className="admin-container flexClass">
      <PageHeader
          title="Orders"
          subtitle="Track and manage customer orders"
        />
        <PageSeachBar
          inputTitle="Search Orders..." 
          status="All Status"
        />
    </div>
    </>
  )
}

export default Order