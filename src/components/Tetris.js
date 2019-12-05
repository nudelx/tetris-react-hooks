import React from 'react'

export default ({ children }) => <div className="tetris">
    {children === 'function' ? children() : children}
  </div>
