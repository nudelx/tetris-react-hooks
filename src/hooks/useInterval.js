import { useEffect, useState } from 'react'

export default (cb, value) => {
  const [isRunning, setRunning] = useState(true)
  const timer = isRunning && setInterval(cb, value)

  useEffect(() => {
    return () => clearInterval(timer)
  }, [timer])

  return {
    isRunning,
    setRunning
  }
}
