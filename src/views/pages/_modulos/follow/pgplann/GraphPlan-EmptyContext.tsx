import React/*, { useEffect, useState }*/ from 'react'


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
const Contexto = React.createContext<AppContextInterface | null>(null);






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

  const context = React.useContext(Contexto)
  console.log("data: "+context?.field1)

  return (
    <div style={{ height: 500, width: '100%' }}>
      <h3>
         Gantt ... <>{context?.field1}</>
      </h3>

        <h1> Grantt ... {context?.field2} </h1>


    </div>

  )
}


export default GraphPlan2






//<React.Fragment></React.Fragment>
//<Contexto.Provider value={ {field1, _setData1, field2, _setData2} }>
//type ReactNode = React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
