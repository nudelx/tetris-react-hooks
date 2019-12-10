import { useEffect, useState, useCallback, useContext } from 'react'
import layout from '../context/layout'

export default () => {
  const layoutContext = useContext(layout)
  const [width, _setWidth] = useState(null)
  const [height, _setHeight] = useState(null)
  const [step, setStep] = useState(layoutContext.step)
  const [fill, _setFill] = useState(null)

  const setHeight = useCallback(
    value => {
      layoutContext.height = value
      _setHeight(value)
    },
    [layoutContext.height]
  )
  const setWidth = useCallback(
    value => {
      layoutContext.width = value
      _setWidth(value)
    },
    [layoutContext.width]
  )

  const setFill = useCallback((modW, modH, step) => {
    _setFill((modW * modH) / (step * step))
  }, [])

  useEffect(() => {
    console.log('CDM useSettings')
    const stage = document.querySelector('div.stage')
    const w = stage && stage.offsetWidth
    const h = stage && stage.offsetHeight
    const modW = w - (w % step)
    const modH = h - (h % step)
    setWidth(modW)
    setHeight(modH)
    return () => setFill(modW, modH, step)
  }, [setFill, setHeight, setWidth, step])

  return {
    fill,
    width,
    setWidth,
    height,
    setHeight,
    step,
    setStep
  }
}
