import React from 'react'
import {
  CCard, CCardBody, CCardHeader,
  CCol, CRow
} from '@coreui/react'
import FlwPlan from 'src/model/FlwPlan'



const pgPlann = () => {

  return (
  <CRow>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
      <small>Follow Importação - </small> <strong>Plano Projetado x Real</strong>
      </CCardHeader>

      <CCardBody>
        <p className="text-medium-emphasis small">
          Order&#39;s Activity <code>@Chart</code>.
        </p>
        <h1>chart....</h1>
      </CCardBody>

      <CCardBody>
        <p className="text-medium-emphasis small">
          Order&#39;s Activity List <code>&lt;@FlwPlann&gt;</code>.
        </p>
        <FlwPlan />
      </CCardBody>

    </CCard>
  </CCol>
  </CRow>
  )
}
/*const Page1 = () => {
  return <Pessoa />
}*/

export default pgPlann
