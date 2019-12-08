import React from 'react'
import useSettings  from '../hooks/useSettings'
import Shape from './Shape'

export default () => {
  console.log('render stage')
  const {width, height} = useSettings()
  return (<div className="stage" style={{width, height}}>
      <Shape/>
  </div>)
}