import React from 'react'
import GallerySlider  from 'react-slick'
import { gallerySliderSettings, slides } from './config'

const NewGallerySliderSection = () => {
  return (
    <section className='gallery-section'>
      <GallerySlider {...gallerySliderSettings}>
        {slides.map(slide =>
          <div key={slide.id} ><img src={slide.link} alt={slide.alt}/></div>
        )}
      </GallerySlider>
    </section>
  )
}

export default NewGallerySliderSection