import React from 'react'

const NewVideoSection = () => {
  return (
    <section className="video-bg">
      <div className="video-bg__media" aria-hidden="true">
        <video autoPlay loop muted playsInline src="bunker42.mp4"/>
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