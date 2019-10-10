import React from 'react'

const SliderArrow = ({ classNames, style, onClick, type }) => {
  const styles = {}

  if (type === 'prev') { styles.rotation = { transform: 'rotate(180deg)'} }

  // const rightPosition = center ? '55vw' : '5vw'
  return (
    <div
      className={`${classNames} slider-arrow `}
      style={{
        ...style,
        display: 'flex'
      }}
      onClick={onClick}
    >
      <svg style={styles.rotation} width="16" height="16" viewBox="0 0 16 16" fill="#FBFCFD">
        <path d="M9.24264 8L5 3.75736L6.41421 2.34315L12.0711 8L6.41422 13.6569L5 12.2426L9.24264 8Z"/>
      </svg>
    </div>
  )
}

export default SliderArrow
