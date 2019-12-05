import React from 'react'
import Cell from './Cell'
import useSettings  from '../hooks/useSettings'

export default () => {
  console.log('render stage')
  const {width, height} = useSettings()

  return (<div className="stage" style={{width, height}}>
      <Cell/>
  </div>)
}