import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  DataGrid,
  GridToolbar,
  GridLinkOperator
} from '@mui/x-data-grid'

<<<<<<< HEAD
const URI = 'http://localhost:3000/api/customers/getAll'
//'http://10.146.16.37:8080/api/flwplan/getAllDTO'
=======
const URI = 'http://10.146.16.37:8080/api/flwplan/getAllDTO'
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d



export const Contexto = React.createContext()
<<<<<<< HEAD
//https://rapidapi.com/guides/request-headers-axios
/*const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}*/

const FlwPlan = () => {


=======

const FlwPlan = () => {

  //https://rapidapi.com/guides/request-headers-axios
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d

  const [data, setData] = useState([])

  const getPessoa = async () => {
<<<<<<< HEAD


    await axios.get(URI).then((res) => {
      //res.header("ccess-Control-Allow-OriginA", "*");
=======
    await axios.get(
      URI,
      {
        headers: {
          'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
        }
      }
      ).then((res) => {
      //res.header("ccess-Control-Allow-OriginA", "*");
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
      setData(res.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

<<<<<<< HEAD
  console.log("data ------> "+JSON.stringify(data))
  //return 'datagrig1...'
=======
  console.log("data:------>" )
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
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
<<<<<<< HEAD
  /*{ field: 'codcia',  headerName: 'Cia',        width: '20' },
=======
  { field: 'codcia',  headerName: 'Cia',        width: '20' },
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
  { field: 'ponum',   headerName: 'PO',         width: 65, type:'number', },
  { field: 'potype',  headerName: 'Type',       flex: 1},
  { field: 'invoice', headerName: 'Invoice',    flex: 1 },
  { field: 'anoinvc', headerName: 'Ano',        type:'number', flex: 1 },
  { field: 'tpplan',  headerName: 'Plano/Real',  flex: 1 },
<<<<<<< HEAD
  { field: 'plnseq',  headerName: 'Sequencia',   type:'number', flex: 1 },*/
  { field: 'order_id',  headerName: 'Order',     width: '20' },
  { field: 'product_id',headerName: 'Product',   width: '30'},
  { field: 'amount',    headerName: 'quantity'},
=======
  { field: 'plnseq',  headerName: 'Sequencia',   type:'number', flex: 1 },
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
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


<<<<<<< HEAD



=======
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
export default FlwPlan
