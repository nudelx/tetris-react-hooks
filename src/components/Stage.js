import React from 'react'
import useSettings from '../hooks/useSettings'
import Shape from './Shape'

export default () => {
  const { width, height, step, fill } = useSettings()
  const gridArray = new Array(parseInt(fill || 0)).fill(0)
  return (
    <div className="stage" style={{ width, height }}>
      {gridArray.map(i => (
        <div
          className="grid"
          style={{ width: step - 1, height: step - 1 }}
        ></div>
      ))}
      <Shape />
    </div>
  )
}
