import React from 'react'


export default ({ txt , onYes, onNo , onCancel, ok, nok, can, className}) => {
  return (
    <div className="popup">
      <div className="display">
      <div className="fog"></div>
      <div className={`text ${className}`}> {txt}</div>
      <div className="buttonHolder">
        {ok && <button className="button" onClick={onYes}>OK</button>}
        {nok && <button className="button" onClick={onNo}>NOT OK</button>}
        {can && <button className="button" onClick={onCancel}>BACK</button>}
      </div>
    </div>
    </div>
  )
}