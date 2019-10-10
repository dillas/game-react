import React from 'react'

import NewOrderSection from './NewOrderSection'
import NewMapSection from './NewMapSection'
import NewVideoSection from './NewVideoSection'
import NewCategorySection from './NewCategorySection'
import NewGamesSliderSection from './NewGamesSliderSection'
import NewPostsSection from './NewPostsSection'
import NewPartnersSection from './NewPartnersSection'
import NewGallerySliderSection from './NewGallerySliderSection'


const NewLandingPage = ({setModalIsShow, modalIsShow, setGamesFilter}) => {

  return (
    <div>
      <NewVideoSection/>
      <NewCategorySection setGamesFilter={setGamesFilter} />
      <NewGamesSliderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
      <NewPostsSection/>
      <NewGallerySliderSection/>
      <NewPartnersSection/>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
      <NewMapSection />
    </div>
  )
}

export default NewLandingPage