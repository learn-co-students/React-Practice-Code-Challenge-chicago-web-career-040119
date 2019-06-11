import React from 'react'


const MoreButton = (props) => {

const handleClick = () => {props.moreSushiClick()}

    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton
