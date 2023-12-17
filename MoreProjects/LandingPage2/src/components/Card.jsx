import React from 'react'

function Card(props) {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src="" alt="" />
      </div>
      <div className="big-div">
        <h2 className="div-title">{props.heading}</h2>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default Card