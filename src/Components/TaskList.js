import React, { useState, useEffect } from 'react';
import InsertTask from './InsertTask.js';
import IconButton from '@material-ui/core/IconButton';


export default function TaskList (props) {

  const [tasks, addTasks] = useState({
    names: [''],
    times: ['']
  })

  //retrieving items from localstorage on component load (page open)
  useEffect(() => {
    addTasks({
      names: JSON.parse(localStorage.getItem('names')),
      times: JSON.parse(localStorage.getItem('times'))
    })

  }, [])

  const createItem = (state) => {
    let {names, times} = tasks;
    names.push(state.name);
    times.push(state.time);
    addTasks({
      names: names,
      times: times
    })
  }

  const timeInfo = (event) => {
    event.preventDefault();
    let num = parseFloat(event.target.id);
    props.switchTo(num*60);
  }

  const deleteItem = (event) => {
      let {names, times} = tasks;
      names.splice(event.target.id, 1);
      times.splice(event.target.id, 1);
      addTasks({
        names: names,
        times: times
      })
  }

  const [list, appendList] = useState(null);
  useEffect(() => {
    //creating the table
    let fullDisplay = [<h1 style={titleStyle}> e n c o u r a g e m e n t </h1>];
    for (let i=0; i<tasks.names.length; i++) {
      fullDisplay.push(
        <button onClick={timeInfo} id={tasks.times[i]} style={buttonStyle} className='task'>

          {tasks.names[i]} {tasks.times[i]*60}s
          <IconButton id={i} style={{marginLeft: '15px'}} onClick={deleteItem}/>
        </button>
      )
    }
    appendList(fullDisplay);
    //saving the table to localStorage
    localStorage.setItem('names', JSON.stringify(tasks.names));
    localStorage.setItem('times', JSON.stringify(tasks.times));
  }, [tasks])

  const formatStyle = {
    position: 'relative',
    margin: 'auto',
    maxWidth: '800px',
    top: '100px',
    display:'flex',
    flexDirection: 'column'
  }

  const titleStyle = {
    width: '100%',
    paddingBottom: '5px',
    background: 'black',
    color: 'white',
    borderRadius: '5px 5px 0px 0px',
    textAlign: 'center'
  }

  const buttonStyle = {
    width: '100%',
    height: '55px',
    fontSize: '21px',
    backgroundColor: '#f7e1c9'
  }


  return (
    <div>
      <InsertTask sendItem={createItem} />
      <span style={formatStyle}>{list}</span>
    </div>
  )
}
