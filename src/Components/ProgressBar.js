import React from 'react';

export default function ProgressBar(props) {

  const centering = {
    position: 'relative',
    left: '10vw',
    display: 'flex',
    justifyContent: 'center'
  }

  const centeringPlus = {
    position: 'relative',
    top: '60px',
    height: '110px',
    left: '10vw',
    display: 'flex',
    justifyContent: 'center'
  }

  const fullBarStyle = {
    position: 'relative',
    left: '10vw',
    top: '50px',

    width: '100%',
    height: '60px',
    backgroundColor: "#ebfafc",
    borderRadius: '15px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxShadow: '1px 1px 15px rgba(133, 227, 239, 0.5)'
  }

  const progressBarStyle = {
    width: `${props.timeFrac*100+0.1}%`,
    height: '60px',
    position: 'relative',
    left: '10vw',
    top: '-27px',
    margin: 'auto',
    background: 'linear-gradient(90deg, rgba(255,52,2,1) 0%, rgba(255,117,75,1) 60%, rgba(255,153,122,1) 100%)',
    borderRadius: '15px'
  }

  const buttonStyle ={
    transition: '0.5s',
    position: 'relative',
    marginLeft: '25px',
    marginRight: '25px',
    height: '50px',
    width: '150px',
    border: 'none',
    borderRadius: '15px',
    color: 'white',
    fontSize: '25px',
    background: 'linear-gradient(0deg, rgba(255,130,100,1) 0%, rgba(255,153,122,1) 100%)',
    boxShadow: '2px 2px 5px rgba(255,153,122,1)'
  }

  if (props.timeFrac <= 0.01) {
    return (
      <div style={{maxWidth:'80vw'}}>
        <p style={fullBarStyle}></p>
        <div style={centeringPlus}>
          <button  style={buttonStyle} className='timer' onClick={props.reset}>Reset</button>
          <button style={buttonStyle} className='timer' onClick={props.startPause}> !Pause </button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div style={{maxWidth: '80vw'}}>
        <p style={fullBarStyle}></p>
        <p style={progressBarStyle}> </p>
        <div style={centering}>
          <button  style={buttonStyle} className='timer' onClick={props.reset}>Reset</button>
          <button style={buttonStyle} className='timer' onClick={props.startPause}> !Pause </button>
        </div>
      </div>
    )
  }

}
