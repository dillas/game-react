import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// mapbox://styles/dillas/ck1l99iy89dv11cp1ya56f7t2
// 37.649106 55.741644

const NewMapSection = () => {
  const [viewport, setViewport] = useState({
    latitude: 55.741644,
    longitude: 37.649106,
    zoom: 16,
    width: '100%',
    height: '50vh'
  })
  return (
    <section>
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/dillas/ck1l99iy89dv11cp1ya56f7t2'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Marker
          latitude={55.741731}
        longitude={37.649191}
        >
          <svg style={{transform: 'translate(-50%,-50%)'}} width="51" height="48" viewBox="0 0 51 48" fill="#C84A48">
            <path d="M6.1695 20.8589L15.0096 29.369L23.8263 26.5323L6.1695 20.8589Z"/>
            <path d="M35.9767 29.369L27.1599 26.5323L44.8012 20.8589L35.9767 29.369Z"/>
            <path d="M24.9712 28.1047L14.0827 42.9433L24.9712 37.2776V28.1047Z"/>
            <path d="M31.4592 17.5366L26.0072 24.9675V6.59071L31.4592 17.5366Z"/>
            <path d="M24.1457 27.5035L15.3133 30.3402L13.2338 42.3575L24.1457 27.5035Z"/>
            <path d="M19.5269 17.5365L24.9712 6.59831V24.9596L19.5269 17.5365Z"/>
            <path d="M26.0072 28.0972V37.2933L36.9191 42.9589L26.0072 28.0972Z"/>
            <path d="M18.6781 18.1223L24.1457 25.5609L6.48886 19.8875L18.6781 18.1223Z"/>
            <path d="M26.8403 25.5609L44.4816 19.8875L32.2924 18.13L26.8403 25.5609Z"/>
            <path d="M37.7444 42.3575L26.8403 27.5035L35.657 30.3402L37.7444 42.3575Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M51 18.3382L33.3665 15.8022L25.4922 0L17.6101 15.8022L0 18.3382L12.7422 30.6253L9.72023 48L25.4766 39.7983L41.233 47.9923L38.2188 30.6331L51 18.3382ZM39.87 46.0883L25.4922 38.6189L11.1378 46.0883L13.8794 30.2553L2.2665 19.0628L18.3111 16.7503L25.4922 2.35105L32.6655 16.7503L48.7101 19.0628L37.0973 30.2708L39.87 46.0883Z"/>
          </svg>
        </Marker>
      </ReactMapGL>
    </section>
  )
}

export default NewMapSection