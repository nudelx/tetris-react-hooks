import { useState, useContext, useEffect }from 'react'
import layout from '../context/layout'


export default () => {
  const layoutContext = useContext(layout);
  const [layoutReady, setLayoutReady] = useState(!!(layoutContext.width && layoutContext.height))
  useEffect(() => {
    setLayoutReady(!!(layoutContext.width && layoutContext.height))
  }, [layoutContext.width, layoutContext.height])
  return {layoutReady}
}