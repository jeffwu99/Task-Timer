import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function InserTask (props) {

  const [activity, updateActivity] = useState({
    name: '',
    time: ''
  });

  const handleChange = (event) => {
    updateActivity({
      name: activity.name,
      time: activity.time,
      [event.target.id]: event.target.value
    });
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(window.localStorage);
    if (!isNaN(activity.time)) {
      props.sendItem(activity);
      updateActivity({
        name: '',
        time: ''
      });
    }
  }

  const formStyle = {
    position: 'relative',
    margin: 'auto',
    top: '25px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column'
  }

  const buttonStyle = {
    height: '56px',
    borderRadius: '5px',
    borderWidth:'1px',
    borderColor: '#aaaaa9',
    backgroundColor: '#faeddf'

  }

  if(isNaN(activity.time)) {
    return(
      <form autoComplete='off' style={formStyle}>
        <TextField onChange={handleChange} id="name" label="Activity"  variant='outlined' value={activity.name}/>
        <TextField onChange={handleChange} id="time" label="Minutes" variant='outlined' value={activity.time} error helperText='Enter Numbers Only' />
        <button onClick={submit} style={buttonStyle} className='addItem' >Item++</button>
      </form>
    )
  }
  else {
    return (
      <form autoComplete='off' style={formStyle}>
        <TextField onChange={handleChange} id="name" label="Activity"  variant='outlined' value={activity.name}/>
        <TextField onChange={handleChange} id="time" label="Minutes" variant='outlined' value={activity.time} />
        <button onClick={submit} style={buttonStyle} className='addItem' >Item++</button>
      </form>
    )
  }
}
