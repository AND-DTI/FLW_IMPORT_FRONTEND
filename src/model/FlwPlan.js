import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  DataGrid,
  GridToolbar,
  GridLinkOperator
} from '@mui/x-data-grid'

const URI = 'http://10.146.16.37:8080/api/flwplan/getAllDTO'



export const Contexto = React.createContext()

const FlwPlan = () => {
  const [data, setData] = useState([])

  const getPessoa = async () => {
    await axios.get(URI).then((res) => {
      //res.header("ccess-Control-Allow-OriginA", "*");
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      setData(res.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

  console.log("data:------>" )
  return (
    <Contexto.Provider value={ [data] }>
      <Datagrid1 />
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
  { field: 'codcia',  headerName: 'Cia',        width: '20' },
  { field: 'ponum',   headerName: 'PO',         width: 65, type:'number', },
  { field: 'potype',  headerName: 'Type',       flex: 1},
  { field: 'invoice', headerName: 'Invoice',    flex: 1 },
  { field: 'anoinvc', headerName: 'Ano',        type:'number', flex: 1 },
  { field: 'tpplan',  headerName: 'Plano/Real',  flex: 1 },
  { field: 'plnseq',  headerName: 'Sequencia',   type:'number', flex: 1 },
]
const Datagrid1 = () => {
  const [data] = React.useContext(Contexto);
  return (
    <div style={{ height: 500, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={12}
      //disableColumnFilter
      disableColumnSelector
      //disableDensitySelector
      components={{ Toolbar: GridToolbar }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
        filterPanel: {
          // Force usage of "And" operator
          linkOperators: [GridLinkOperator.And],
          // Display columns by ascending alphabetical order
          columnsSort: 'asc',
          filterFormProps: {
            // Customize inputs by passing props
            linkOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
            deleteIconProps: {
              sx: {
                '& .MuiSvgIcon-root': { color: '#d32f2f' },
              },
            },
          },
          sx: {
            // Customize inputs using css selectors
            '& .MuiDataGrid-filterForm': { p: 2 },
            '& .MuiDataGrid-filterForm:nth-child(even)': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
            },
            '& .MuiDataGrid-filterFormLinkOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormColumnInput': { mr: 2, width: 150 },
            '& .MuiDataGrid-filterFormOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormValueInput': { width: 200 },
          },
        },
      }}
    />
  </div>
  )
}


export default FlwPlan
