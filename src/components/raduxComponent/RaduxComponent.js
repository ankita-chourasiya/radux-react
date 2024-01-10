import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../store/action'

function RaduxComponent = ({connect, increment}) => {
  return (
    <div>
      <h1>Radux</h1>
    </div>
  )
};

export default RaduxComponent;
