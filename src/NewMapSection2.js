import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import mapboxStyle from './data/streets-style.json';

const Map = ReactMapboxGl({
  scrollZoom: false,
  center: [37.649052499999996, 55.741677499999994],
  accessToken:
    'pk.eyJ1IjoiZGlsbGFzIiwiYSI6ImNrMGI5NXd1MDBwbGkzaXBqaXV3YWY2NWsifQ.FmWw6nnOWCYBYfpW704f2A'
});

const NewMapSection2 = () => {
  return (
    <section style={{}}>
      <Map
        style={mapboxStyle}
        containerStyle={{
          height: '50vh',
          width: '100%'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[37.649052499999996, 55.741677499999994]} />
        </Layer>
      </Map>
    </section>
  )
}

export default NewMapSection2