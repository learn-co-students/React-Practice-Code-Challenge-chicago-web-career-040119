import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.sushi.map(sushi => <Sushi sushi={sushi} eatSushiHandler={props.eatSushiHandler}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton moreSushiHanlder={props.moreSushiHanlder}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
