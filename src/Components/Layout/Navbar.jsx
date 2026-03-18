import React from 'react'

const Navbar = ({ setIsOpen }) => {
  return (
    <>
    <div className="navbar flexClass">
      <div className="navbar-main flexClass">
        <div className="navbar-content">
          <i className="fa-solid fa-bars-staggered"
           onClick={() => setIsOpen(prev => !prev)}>
            </i>
        </div>
        <div className="navbar-content flexClass">
          <div className="navbar-search flexClass">
            <p><i className="fa-solid fa-magnifying-glass"></i>Search...</p>
          </div>
        </div>
        <div className="navbar-content flexClass">
          <i className="fa-solid fa-bell"></i>
          <div className='flexClass'>
            <div className="log-out_section"></div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar