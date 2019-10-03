import React, {useState, useCallback} from 'react'
import NewOrderSection from './NewOrderSection'
import { Link } from 'react-router-dom'
import NewVideoSection from './NewVideoSection'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "slider-image/1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/2.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/3.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/5.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/6.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/7.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/8.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/9.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/10.jpg",
    width: 4,
    height: 3
  },
  {
    src: "slider-image/11.jpg",
    width: 4,
    height: 3
  }
];

function NewPhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

const NewGalleryPage = props => {
  const {setModalIsShow, modalIsShow } = props
  return (
    <div>
        <header><h1>Галерея</h1></header>
        <p><Link to='/'>Главная</Link> / Галерея</p>
        <hr/>
        <div>
          <NewVideoSection/>
          <NewPhotoGallery/>
        </div>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewGalleryPage