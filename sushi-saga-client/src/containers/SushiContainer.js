import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {

const displayedSushi = props.sushis.map(sushi => {
  return <Sushi sushi={sushi} eaten={props.eaten}/>
})

  return (
    <Fragment>
      <div className="belt">
        {
          displayedSushi.splice(0, 4)
        }
        <MoreButton moreSushiClick={props.moreSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
