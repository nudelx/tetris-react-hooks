import { useState } from 'react'

export default () => {
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [type, setType] = useState()

  return { x, y, type }
}
