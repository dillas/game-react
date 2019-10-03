import React from 'react'
import ReactMapGL from 'react-map-gl/dist/es6/components/interactive-map'

const NewMapSection = () => {
  return (
    <section>
      <ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoiZGlsbGFzIiwiYSI6ImNrMGI5NXd1MDBwbGkzaXBqaXV3YWY2NWsifQ.FmWw6nnOWCYBYfpW704f2A'
        width='100%'
        height={500}
        mapStyle="mapbox://styles/dillas/ck0b96roj3ffi1clr1qt8gul8"
        latitude={55.742}
        longitude={37.652}
        zoom={16}
      />
    </section>
  )
}

export default NewMapSection