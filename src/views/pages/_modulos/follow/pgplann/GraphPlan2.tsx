import React/*, { useEffect, useState }*/ from 'react'
import { Chart } from "react-google-charts";


function daysChart(days: number) {
  return days * 24 * 60 * 60 * 1000 //to miliseconds
}

function chartDate(date: Date){
  return date.getMilliseconds()
}

type TTask = {
  fd1: string,
  fd2: string
}

//export const Contexto = React.createContext({})

interface AppContextInterface {
  field1: string
  field2: string
  tasks: TTask[]
}
const Contexto = React.createContext<AppContextInterface | null>(null)


const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
]

const rows = [
  ["act1", "Activity 1", "person x", null, null, daysChart(30), 50, null],
  ["act2", "Activity 2", "sector x", null, null, daysChart(20),                    75, null],
  /*["toTrain", "Walk to train stop", "walk", null, null, 5 * 60 * 1000, 50, null],
  ["music", "Listen to music", "music", null, null, 70 * 60 * 1000, 75, null],
  [ "wait", "Wait for train", "wait", null, null, 10 * 60 * 1000, 30, "toTrain"],
  ["train", "Train ride", "train", null, null, 45 * 60 * 1000, 75, "wait"],
  ["toWork", "Walk to work", "walk", null, null, 10 * 60 * 1000, 80, "train"],
  ["work", "Sit down at desk", null, null, null, 2 * 60 * 1000, 25, "toWork"],*/
]

export const data = [columns, ...rows];

export const options = {
  height: 275,
  //gantt: {defaultStartDateMillis: new Date(2022, 10, 25), },
  percentEnabled:	true,
  shadowEnabled: true,
  shadowColor: 'white',
  shadowOffset: 2,
};





const GraphPlan2 = () => {


  // Provider in your app
  const sampleAppContext: AppContextInterface = {

  //const [field2, _setData2] = useState("---default 2")
  //_setData1("vl1");

    field1: "value field 1",
    field2: "field 2 value",
    //tasks: undefined
    tasks: [
      {fd1:"111", fd2:"222"} ,
      {fd1:"111-", fd2:"222-"}
    ]
  }




  return (
    <Contexto.Provider value={ sampleAppContext }>
      <Graph1 />
    </Contexto.Provider>
  )
}



const Graph1 = () => {

  //const context = React.useContext(Contexto)
  //console.log("data: "+context?.field1)
  const d = new Date();
  console.log(chartDate(d))

  return (
    <div style={{ height: 500, width: '100%' }}>


      <Chart
        chartType="Gantt"
        width="100%"
        height="50%"
        data={data}
        options={options}
      />



    </div>

  )
}


export default GraphPlan2






//<React.Fragment></React.Fragment>
//<Contexto.Provider value={ {field1, _setData1, field2, _setData2} }>
//type ReactNode = React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
