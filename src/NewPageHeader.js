import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const NewPageHeader = ({title, links}) => {
  return (
    <header className='page-header'>
      <div className='container padding-bottom-lg max-width-lg'>
      <h1>{title}</h1>
      <p className='bread-crumbs'>
        {links.map((link, index) =>
          <Fragment key={index}><Link to={link.to} >{link.name}</Link> / </Fragment>
        )}
        <span>{title}</span>
      </p>
      </div>
    </header>
  )
}

export default NewPageHeader