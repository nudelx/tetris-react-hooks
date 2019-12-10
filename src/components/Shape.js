import React from 'react'
import Cell from './Cell'
/*
I-Block
J-Block
L-Block
O-Block
S-Block
T-Block
Z-Block
*/

export default ({ x, y }) => {
  return (
    <div className="shape" style={{ top: x, left: y }}>
      <Cell className="block-cell" />
      <Cell className="block-cell" />
      <Cell className="block-cell" />
      <Cell className="block-cell" />
    </div>
  )
}
