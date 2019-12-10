import { useState, useEffect } from 'react'
const types = {
  1: 'I',
  2: 'J',
  3: 'L',
  4: 'O',
  5: 'S',
  6: 'T',
  7: 'Z'
}

export default () => {
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [type, setType] = useState()
  const [onMove, setOnMove] = useState(false)

  useEffect(() => {
    const t = Math.round(Math.random() * Object.keys(types).length) - 1
    setType(t)
  }, [onMove])

  return { x, y, type, onMove, setOnMove, setX, setY }
}
