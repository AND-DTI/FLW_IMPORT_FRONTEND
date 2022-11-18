import React, { useEffect, useState } from 'react'
import axios from 'axios'



const URI = 'http://hdamdt5679:8080/api/flwplan/getAllDTO'
export const Contexto = React.createContext()


const GraphPlan = () => {



  const [data, setData] = useState([])

  const getPessoa = async () => {
    await axios.get(URI).then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

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
  {dados.map((data, idx) => (
    fields = fields + data.ckpcod + "; "
  ))}

  return (

  <div style={{ height: 500, width: '100%' }}>
    <h1>chart....</h1>
    <label>data size: {dados.length}</label><br/>
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
