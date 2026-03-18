import React from 'react'
import PageHeader from '../Modals/PageHeader'
import PageSeachBar from '../Modals/PageSeachBar'

const Blog = () => {
  return (
    <>
    <div className="admin-container flexClass">
      <PageHeader
          title="Blog"
          subtitle="Manage your blog content"
          buttonText="+ Add Post"
        />
        <PageSeachBar
          inputTitle="Search Post..." 
          status="All"
        />
    </div>
    </>
  )
}

export default Blog