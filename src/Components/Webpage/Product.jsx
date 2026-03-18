import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

const data = [
    {
      id: 1,
      product: "Abstract Canvas Art",
      price: "$349.99",
      stock: "12",
      category: "#Paintings",
      status: "Active"
    }
  ];

const Product = () => {
  return (
    <>
    <div className="admin-container flexClass">
      <PageHeader
          title="Products"
          subtitle="Manage your artwork inventory"
          buttonText="+ Add Product"
        />
        <PageSeachBar
          inputTitle="Search Products..." 
          status="All"
        />
        <div className='data-table flexClass'>
          <div className="data-head data-head-product flexClass">
            <div className="data-head-content"><p>Products</p></div>
            <div className="data-head-content"><p>Price</p></div>
            <div className="data-head-content"><p>Stock</p></div>
            <div className="data-head-content"><p>Category</p></div>
            <div className="data-head-content"><p>Status</p></div>
            <div className="data-head-content"><p>Actions</p></div>
          </div>


          {data.map((item) => (
            <div key={item.id} className="data-table-content data-head data-head-product flexClass">

              <div className="data-head-content"><p>{item.product}</p></div>
              <div className="data-head-content"><p>{item.price}</p></div>
              <div className="data-head-content"><p>{item.stock} in stock</p></div>
              <div className="data-head-content"><p>{item.category}</p></div>

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

export default Product