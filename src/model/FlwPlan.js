import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  DataGrid,
  GridToolbar,
  GridLinkOperator
} from '@mui/x-data-grid'


//const URI = 'http://localhost:3000/api/customers/getAll'
//const URI = 'http://10.146.16.37:8080/api/flwplan/getAllDTO'
const URI = 'http://hdamdt5679:8080/api/flwplan/getAllDTO'



export const Contexto = React.createContext()
//https://rapidapi.com/guides/request-headers-axios
/*const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}*/

const FlwPlan = () => {



  const [data, setData] = useState([])

  const getPessoa = async () => {


    await axios.get(URI).then((res) => {
      //res.header("ccess-Control-Allow-OriginA", "*");
      setData(res.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

  console.log("data ------> "+JSON.stringify(data))
  //return 'datagrig1....'
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


/*{ field: 'order_id',  headerName: 'Order',     width: '20' },
  { field: 'product_id',headerName: 'Product',   width: '30'},
  { field: 'amount',    headerName: 'quantity'},*/
]
const Datagrid1 = () => {
  const [data] = React.useContext(Contexto);
  return (
    <div style={{ height: 500, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      //getRowId={(row: any) =>  row.first_name + row.salary}
      getRowId={row => row.ponum + row.plnseq}
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
