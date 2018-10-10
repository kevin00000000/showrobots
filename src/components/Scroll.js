import React from 'react'

export default (props) => {
    return (
      <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
        {props.children}
      </div>
    )
  }


