import React from 'react'
import useSettings  from '../hooks/useSettings'
import Shape from './Shape'

export default () => {
  const {width, height, step} = useSettings()
  const gridArray = new Array(parseInt(width / step)).fill(0)
  return (
  <div className="stage" style={{width, height}}>
          {gridArray.map(i => 
          <div className="grid" style={{ width: step, height:step}}></div>) }
      <Shape/>
  </div>)
}  