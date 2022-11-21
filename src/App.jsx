import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { AuthProvider } from './context/auth'
import useAuth from './hooks/useAuth'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))




const Private = ({ Item }) => {
  //const signed = false;
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />
  //return signed > 0 ? React.createElement(Item, null) : React.createElement(Login, null);
}


class App extends Component {
  render() {
    return (
      <AuthProvider>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/500" element={<Page500 />} />
            <Route path="*" element={<Private Item={DefaultLayout} /> } />
          </Routes>
        </Suspense>
      </HashRouter>
      </AuthProvider>
    )
  }
}

//************** <Route path="*" element={<Private Item={DefaultLayout} /> } />
//<Route path="*" element={<DefaultLayout />} />
//<Route exact path="/home" element={<Private Item={Home} />} />




export default App
