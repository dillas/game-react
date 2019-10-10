import React from 'react'
import { Link } from 'react-router-dom'

const NewCategoryItem = ({cat: {id, name, image}, setGamesFilter}) => {
  return (
    <div className="trx_addons_column-1_3 ">
      <div
        className="sc_services_item no_links with_content with_image sc_services_item_featured_none post-241 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-main-services">
        <div className="sc_services_item_header " style={{backgroundImage: `url(${image})`}}>
          <div className="sc_services_item_header_inner">
            <h1 className="sc_services_item_title">
              <span className="icon-untitled-1" />
              <Link to="/games" onClick={()=>setGamesFilter(id)} >{name}</Link>
              <span className="icon-untitled-2" />
            </h1>
            <div className="sc_services_item_subtitle">
              <a href="http://raider-spirit-paintball.themerex.net/services_group/main-services/" title="View all posts in Main Services">Main Services</a>
            </div>
          </div>
          <Link to="/games" className="sc_services_item_link" onClick={()=>setGamesFilter(id)} />
        </div>

        <div className="sc_services_item_content" style={{backgroundImage: `url(${image})`}}>
          <div className="sc_services_item_content_inner">
            <h1 className="sc_services_item_title">
              <span className="icon-untitled-1" />
              <Link to="/games" onClick={()=>setGamesFilter(id)} >{name}</Link>
              <span className="icon-untitled-2" />
            </h1>
            <div className="sc_services_item_subtitle">
              <a href="http://raider-spirit-paintball.themerex.net/services_group/main-services/" title="View all posts in Main Services">Main Services</a>
            </div>
            <div className="sc_services_item_text">
              <p>Our newest location, Raider Spirit Paintball Spring, opened in the Fall of 2015</p>
            </div>
          </div>
          <Link to="/games" className="sc_services_item_link" onClick={()=>setGamesFilter(id)} />
        </div>
      </div>
    </div>
  )
}

export default NewCategoryItem