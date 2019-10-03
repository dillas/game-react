import React, {useState} from 'react'
import Cover from 'react-video-cover'

const NewVideoSection = () => {
  const [ setResizeNotifier] = useState(() => {});
  const videoOptions = {
    src: 'bunker42.mp4',
    autoPlay: false,
    muted: true,
    loop: true,
  };
  return (
    <section>
      <Cover
        videoOptions={videoOptions}
        remeasureOnWindowResize
        getResizeNotifier={ (resizeNotifier) => {
          setResizeNotifier(
            resizeNotifier
          );
        }}
      />
      <hr/>
    </section>
  )
}

export default NewVideoSection