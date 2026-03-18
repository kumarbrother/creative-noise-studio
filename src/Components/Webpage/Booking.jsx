import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

const Booking = () => {
  return (
    <>
    <div className="admin-container flexClass">
      <PageHeader
          title="Bookings"
          subtitle="Manage appointments and reservations"
        />
        <PageSeachBar
          inputTitle="Search Bookings..." 
          status="All"
        />
        
    </div>
    </>
  )
}

export default Booking