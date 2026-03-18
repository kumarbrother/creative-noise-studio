import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'
import CtgryDataStatus from '../Modals/CtgryDataStatus'
import DataTable from '../Modals/DataTable'

const Category = () => {
  return (
    <>
      <div className="admin-container flexClass">
        <PageHeader
          title="Categories"
          subtitle="Organize products into categories"
          buttonText="+ Add Category"
        />
        <PageSeachBar
          inputTitle="Search categories..." 
          status="All"
        />
        <CtgryDataStatus />
        <DataTable />
      </div>
    </>
  )
}

export default Category