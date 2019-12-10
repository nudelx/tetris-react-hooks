import React from 'react'
import Cell from './Cell'
import useShape from '../hooks/useShape'
import useInterval from '../hooks/useInterval'

export default ({ x, y }) => {
  const { type, onMove } = useShape()
  const { setRunning } = useInterval(() => {}, 2000)
  return (
    <div className="shape" style={{ top: x, left: y }}>
      <Cell key={1} className="block-cell" />
      <Cell key={2} className="block-cell" />
      <Cell key={3} className="block-cell" />
      <Cell key={4} className="block-cell" />
    </div>
  )
}
