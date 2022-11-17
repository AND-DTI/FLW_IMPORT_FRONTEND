<<<<<<< HEAD
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
=======
import React from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
<<<<<<< HEAD
import useAuth from 'src/hooks/useAuth'










const Login = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  const { signin } = useAuth()
  const navigate = useNavigate()


  const handleLogin = () => {
    if (!email | !senha) {
      setError("*Preencha todos os campos");
      return;
    }

    console.log("use/pass: "+email+"/"+senha)


    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");



  };



=======

const Login = () => {
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
<<<<<<< HEAD
                      <CFormInput placeholder="Username" autoComplete="username"
                       value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}
                       />
=======
                      <CFormInput placeholder="Username" autoComplete="username" />
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
<<<<<<< HEAD
                      <CFormInput type="password" placeholder="Password" autoComplete="current-password"
                       value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}
=======
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
<<<<<<< HEAD
                        <CButton color="primary" className="px-4" onClick={handleLogin} >
=======
                        <CButton color="primary" className="px-4">
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
<<<<<<< HEAD
                      <label style={{color:"red"}}>{error}</label>
=======
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
