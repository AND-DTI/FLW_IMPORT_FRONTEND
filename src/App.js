import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
<<<<<<< HEAD
import { AuthProvider } from './context/auth'
import useAuth from './hooks/useAuth'
=======
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
<<<<<<< HEAD
=======

>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

<<<<<<< HEAD



const Private = ({ Item }) => {
  //const signed = false;
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />
}


class App extends Component {
  render() {
    return (
      <AuthProvider>
=======
class App extends Component {
  render() {
    return (
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
<<<<<<< HEAD
            <Route path="*" name="Home" element={<Private Item={DefaultLayout} /> } />
          </Routes>
        </Suspense>
      </HashRouter>
      </AuthProvider>
=======
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
    )
  }
}

<<<<<<< HEAD
//<Route path="*" name="Home" element={<DefaultLayout />} />
//<Route exact path="/home" element={<Private Item={Home} />} />




=======
>>>>>>> 1dff1fa913bbd65106abb0b7721f0c4b6a7f708d
export default App
