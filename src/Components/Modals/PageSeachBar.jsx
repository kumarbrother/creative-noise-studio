import React from 'react'

const PageSeachBar = ({inputTitle,status}) => {
  return (
     <div className="header-main flexClass">
      <div className="header-content flexClass">
        <div className="find-data flexClass"><i className="fa-solid fa-magnifying-glass"></i>{inputTitle}</div>
        <div className="data-status">{status}</div>
      </div>
    </div>
  )
}

export default PageSeachBar