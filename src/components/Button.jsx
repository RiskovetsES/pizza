import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({onClick, className, outline, children}) => (
  <button
    onClick={onClick}
    className={classNames('button', className, {
      'button--outline': outline,
    })}>
    {children}
  </button>
)

export default Button
