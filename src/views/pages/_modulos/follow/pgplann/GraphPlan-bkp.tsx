import React, { useEffect, useState } from 'react'
import axios from 'axios'
import teste from './teste.json'

import { Gantt, Task, ViewMode } from "gantt-task-react";
import { initTasks, getStartEndDateForProject } from "./helpers";
import { ViewSwitcher } from "./ViewSwitcher";




const URI = 'http://hdamdt5679:8080/api/flwplan/getAllDTO'
export const Contexto = React.createContext()


const GraphPlan = () => {



  const [data, setData] = useState([])
/*
  const getPessoa = async () => {
    await axios.get(URI).then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

*/
  return (
    <Contexto.Provider value={ [data] }>
      <Graph1 />
    </Contexto.Provider>
  )
}



//DATA GRID 1:
/*
Entity fields:
String codcia, Integer ponum, String potype, String invoice, Integer anoinvc, String tpplan, Integer plnseq,
String dtemiss, String origem, String ckpcod, Integer ckplevel, String plndo, Integer sla, Integer slaacum, Integer predec
*/
const columns = [
  { field: 'codcia',   headerName: 'Cia',         width: '60' },
  { field: 'ponum',    headerName: 'PO',          width: 95},
  { field: 'potype',   headerName: 'Type',        width: 10},
  { field: 'invoice',  headerName: 'Invoice',     width: 120 },
  { field: 'anoinvc',  headerName: 'Ano',         width: 30, type:'number'},
  { field: 'tpplan',   headerName: 'P/R',         width: 55 },
  { field: 'plnseq',   headerName: 'Seq.',        width: 40, type:'number' },
  { field: 'dtemiss',  headerName: 'PO Creating', width: 110},
  { field: 'origem',   headerName: 'Origin',      width: 40},
  { field: 'ckpcod',   headerName: 'Check P.',    width: 70},
  { field: 'ckplevel', headerName: 'Level',       width: 40, type:'number' },
  { field: 'plndo',  headerName: 'Activity',  flex: 1},

]



//https://levelup.gitconnected.com/lets-loop-data-inside-a-react-component-832e9130ed0f

const Graph1 = () => {
  const [dados] = React.useContext(Contexto);

  let fields = "";
  /*{dados.map((data, idx) => (
    fields = fields + data.ckpcod + "; "
  ))}*/


  const dados2 = teste;
  {dados2.map((data, idx) => (
    fields = fields + data.ckpcod + "; "
  ))}








  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

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
















  return (

  <div style={{ height: 500, width: '100%' }}>
    <h1>chart....</h1>
    <label>data size: {dados2.length}</label><br/>
    <label>data: {fields}</label>


  </div>
  )
}

/*
{dados.map((data, idx) => (
  <p key={idx}> {data.plnseq} index:{idx}  </p>
))}
*/




export default GraphPlan
