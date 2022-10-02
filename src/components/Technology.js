import React from 'react'


export default function Technology(props) {
    return (
      <div className={`outer-circle outer-circle-${props.name}`}>
        <div className={`shower-circle shower-circle-top`}>
          <div className={`shower-half-circle`}></div>
        </div>
        <div className={`shower-circle shower-circle-bottom`}>
          <div className={`shower-half-circle`}></div>
        </div>
        <div className={`hider-circle hider-circle-top`}>
          <div className={`hider-half-circle`}></div>
        </div>
        <div className={`hider-circle hider-circle-bottom`}>
          <div className={`hider-half-circle`}></div>
        </div>
        <div className={`inner-circle`}>
           <img src={props.logo} />
        </div>
      </div>
    )

}