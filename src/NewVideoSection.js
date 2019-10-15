import React, { useRef } from 'react'

const NewVideoSection = () => {
  const headerHeight = useRef(null);

  return (
    <section ref={headerHeight} className="video-bg">
      <div className="video-bg__media" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster='poster-video.jpg'
        >
          <source src="bunker42-1280x720HD.mp4"
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
          <source src="bunker42-640x360.webm"
                  type='video/webm; codecs="vp8, vorbis"'/>
          Тег video не поддерживается вашим браузером.
          <a href="bunker42-1280x720HD.mp4">Скачайте видео</a>.
        </video>
      </div>

      <div className="video-bg__content container max-width-lg">
        <div className="flex flex-center padding-y-xxxxl">
          {/*<div className="text-component text-center">
            <h1>Responsive Video Background</h1>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default NewVideoSection