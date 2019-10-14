import React from 'react'

const NewSidebarSection = ({title, children}) => {
  return (
    <section className='sidebar-section'>
      {title && <div className="sidebar-section--title">
        <h3>{title}</h3>
      </div>}
      <div className="sidebar-section--body">
        {children}
      </div>
    </section>
  )
}

export default NewSidebarSection