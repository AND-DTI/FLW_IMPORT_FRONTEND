import React, { /*useEffect,*/ useState } from 'react'
//import axios from 'axios'
//import teste from './teste.json'

//import { Gantt, Task, ViewMode } from "gantt-task-react"
//import { initTasks, getStartEndDateForProject } from "./helpers";
import { initTasks/*, getStartEndDateForProject*/ } from "./helper"
//import { ViewSwitcher } from "./ViewSwitcher"
import "./index.css"
import { Gantt, Task/*, EventOption, StylingOption, ViewMode*/, DisplayOption } from 'gantt-task-react';



//const URI = 'http://hdamdt5679:8080/api/flwplan/getAllDTO'
//const taskDefault = initTasks() //[{name:'task1'}]
//export const Contexto = React.createContext(taskDefault)

/*const GraphPlan = () => {

  const [data, setData] = useState([])

  return (
    <Contexto.Provider value={ [data] }>
      <Graph1 />
    </Contexto.Provider>
  )
}*/
const GraphPlan = () => {

  //const [tasks, setTasks] = useState<Task[]>(
  /*const [tasks, setTasks] = useState<Task[]>(
   [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea',
      id: 'Task 0',
      type:'task',
      progress: 45,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
   ]
  )*/
  const [tasks, setTasks] = useState<Task[]>(initTasks())
  //setTasks(initTasks())


  return (

    <Gantt
          tasks={tasks}
          rtl={false}

    />
  )
}

//onViewListChange(!isChecked)


/*
   <div style={{ height: 500, width: '100%' }}>
      <h3>Gantt With Unlimited Height</h3>
    </div>
*/





/*
  let fields = "";
  const dados2 = teste;
  {dados2.map((data, idx) => (
    fields = fields + data.ckpcod + "; "
  ))}
*/


  /*const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }*/
/*
  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };
*/




/*

 <ViewSwitcher
      onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
      onViewListChange={setIsChecked}
      isChecked={isChecked}
    />
    <h3>Gantt With Unlimited Height</h3>
    <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
    />

 <Gantt
          tasks={tasks}
          viewMode={view}
          listCellWidth={isChecked ? "155px" : ""}
          columnWidth={columnWidth}
      />



  <div style={{ height: 500, width: '100%' }}>
    <h1>chart....</h1>
    <label>data size: {dados2.length}</label><br/>
    <label>data: {fields}</label>
  </div>
*/

export default GraphPlan
