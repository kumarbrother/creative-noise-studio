import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

const data = [
    {
      id: 1,
      category: "Paintings",
      description: "Original paintings and fine art",
      products: 45,
      orders: "#1",
      status: "Active"
    },
    {
      id: 2,
      category: "Sculptures",
      description: "Modern sculptures",
      products: 20,
      orders: "#2",
      status: "Inactive"
    }
  ];

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
        <div className='data-table flexClass'>
          <div className="data-head flexClass">
            <div className="data-head-content"><p>Category</p></div>
            <div className="data-head-content"><p>Description</p></div>
            <div className="data-head-content"><p>Products</p></div>
            <div className="data-head-content"><p>Orders</p></div>
            <div className="data-head-content"><p>Status</p></div>
            <div className="data-head-content"><p>Actions</p></div>
          </div>


          {data.map((item) => (
            <div key={item.id} className="data-table-content data-head flexClass">

              <div className="data-head-content"><p>{item.category}</p></div>
              <div className="data-head-content"><p>{item.description}</p></div>
              <div className="data-head-content"><p>{item.products}</p></div>
              <div className="data-head-content"><p>{item.orders}</p></div>

              <div className="data-head-content">
                <p className={item.status === "Active" ? "active" : "inactive"}>
                  {item.status}
                </p>
              </div>

              <div className="data-head-content-delete">
                <button>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>

            </div>
          ))}

        </div>
        
    </div>
    </>
  )
}

export default Booking