import React from 'react'

const MoreButton = (props) => {
    return <button onClick={event => props.moreSushiHanlder(event)}>
            More sushi!
          </button>
}

export default MoreButton
