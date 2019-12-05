import { useEffect, useState, useCallback, useContext} from 'react'
import layout from '../context/layout'

export default () => {
  const layoutContext = useContext(layout);
  console.log('layout', layoutContext)
  const [width, _setWidth] = useState(null)
  const [height, _setHeight] = useState(null)
  const [step, setStep] = useState(layoutContext.step)

  const setHeight = useCallback((value) => {
    layoutContext.height = value
    _setHeight(value)
  },[layoutContext.height])
  const setWidth = useCallback((value) => {
    layoutContext.width = value
    _setWidth(value)
  },[layoutContext.width])

  useEffect( () => {
    console.log("CDM useSettings")
    const stage = document.querySelector('div.stage')
    const w = stage && stage.offsetWidth
    const h = stage && stage.offsetHeight
    setWidth(w - (w % step))
    setHeight(h - (h % step))
  },[setHeight, setWidth, step]) 

  return {
    width, 
    setWidth,
    height, 
    setHeight,
    step, 
    setStep,
  }
}