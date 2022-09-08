import React from 'react'


export default function Technology(props) {

    return (
        <div className="technology">
            <div className="technology-logo">
              <img src={props.logo}/>
            </div>
            <div className={"technology-bar technology-bar-"+props.name}>
              <div className="technology-bar-filling">
              </div>
            </div>
        </div>
    )
}