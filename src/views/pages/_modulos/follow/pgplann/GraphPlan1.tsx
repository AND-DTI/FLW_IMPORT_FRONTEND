import { /*useEffect,*/ useState } from 'react'
import { Gantt, Task, ViewMode } from "gantt-task-react"
//import { initTasks, getStartEndDateForProject } from "./helpers";
import { initTasks/*, getStartEndDateForProject*/ } from "./graph1/helper"
//import { ViewSwitcher } from "./graph1/ViewSwitcher"





const GraphPlan1 = () => {
  return (
      <Graph1 />
  )
}



const Graph1 = () => {


  const [view, _setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, _setTasks] = useState<Task[]>(initTasks());
  const [isChecked, _setIsChecked] = useState(true);
  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }
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







  return (
    <div style={{ height: 500, width: '100%' }}>
      <h3>Gantt With Unlimited Height</h3>
      <Gantt
          tasks={tasks}
          viewMode={view}
          listCellWidth={isChecked ? "155px" : ""}
          columnWidth={columnWidth}
      />
    </div>


  )
}

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


  <div style={{ height: 500, width: '100%' }}>
    <h1>chart....</h1>
    <label>data size: {dados2.length}</label><br/>
    <label>data: {fields}</label>
  </div>
*/

export default GraphPlan1
