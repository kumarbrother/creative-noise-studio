import React from 'react'

const PageHeader = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <div className="header-main flexClass">
      <div className="header-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  )
}

export default PageHeader