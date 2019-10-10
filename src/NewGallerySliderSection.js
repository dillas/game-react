import React from 'react'
// import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

// const slides = [
//   { id: '1', link: './images-assets/slider-image/1.jpg', alt: '', desc: '' },
//   { id: '2', link: './images-assets/slider-image/2.jpg', alt: '', desc: '' },
//   { id: '3', link: './images-assets/slider-image/3.jpg', alt: '', desc: '' },
//   { id: '4', link: './images-assets/slider-image/4.jpg', alt: '', desc: '' },
//   { id: '5', link: './images-assets/slider-image/5.jpg', alt: '', desc: '' },
//   { id: '6', link: './images-assets/slider-image/6.jpg', alt: '', desc: '' },
//   { id: '7', link: './images-assets/slider-image/7.jpg', alt: '', desc: '' },
//   { id: '8', link: './images-assets/slider-image/8.jpg', alt: '', desc: '' },
//   { id: '9', link: './images-assets/slider-image/9.jpg', alt: '', desc: '' },
//   { id: '10', link: './images-assets/slider-image/10.jpg', alt: '', desc: '' },
//   { id: '11', link: './images-assets/slider-image/11.jpg', alt: '', desc: '' },
// ]

const NewGallerySliderSection = () => {
  return (
    <section>
      {/*<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          {slides.map(slide =>
            <Slide key={slide.id} index={slide.id}>{slide.link}</Slide>
          )}
        </Slider>
      </CarouselProvider>*/}
    </section>
  )
}

export default NewGallerySliderSection