import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

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
    </div>
    </>
  )
}

export default Product