import React from 'react'
import PartnerSlider from 'react-slick/lib'
import { partnerSliderSettings, partners } from './config'

const NewPartnersSection = () => {
  return (
    <section className='section-divider'>
      <div className='container max-width-lg padding-top-md padding-bottom-lg'>
        <h4 className='header-star margin-bottom-sm header-star--left-star partner-header '>Наши партнеры</h4>
        <PartnerSlider {...partnerSliderSettings}>
          {partners.map(partner =>
            <div key={partner.id} className='partner-slider-item'><img src={partner.link} alt="jpg"/></div>
          )}
        </PartnerSlider>
      </div>
    </section>
  )
}

export default NewPartnersSection