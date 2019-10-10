import React from 'react'
import PartnerSlider from 'react-slick/lib'
import { partnerSliderSettings } from './config'

const NewPartnersSection = () => {
  return (
    <section>
      <h2>Наши партнеры</h2>
      <PartnerSlider {...partnerSliderSettings}>
        <div><img src="partners-logo/01.png" alt="jpg"/></div>
        <div><img src="partners-logo/02.png" alt="jpg"/></div>
        <div><img src="partners-logo/03.png" alt="jpg"/></div>
        <div><img src="partners-logo/04.png" alt="jpg"/></div>
        <div><img src="partners-logo/05.png" alt="jpg"/></div>
        <div><img src="partners-logo/06.png" alt="jpg"/></div>
      </PartnerSlider>
      <hr/>
    </section>
  )
}

export default NewPartnersSection