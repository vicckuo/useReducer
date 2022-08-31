import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FormPage from './routes/FormPage';
import MenuPage from './routes/MenuPage';

import { useReducer } from 'react';
import { LoginContext } from './context/LoginContext'

const initLoginInfo = {
  accountContext: '',
  passwordContext: ''
}

const loginInfoReducer = function (state, action) {
  const stateNext = Object.assign({}, state)

  switch (action.type) {
    case 'SET_ACCOUNT':
      stateNext.accountContext = action.value
      return stateNext;
    case 'SET_PASSWORD':
      stateNext.passwordContext = action.value
      return stateNext;
    default:
      return state
  }
}

function Layout(props) {
  const [loginInfo, loginInfoDispatch] = useReducer(
    loginInfoReducer,
    initLoginInfo
  )

  return (
    <>
      <nav>
        <Link to="/">點我連結到第一頁</Link>
        <Link to="/form" style={{ marginLeft: '20px' }}>
          點我連到第二頁
        </Link>
        <br />
        <span>目前登入帳號：{loginInfo.accountContext}</span>
        <br />
        <span>目前登入密碼：{loginInfo.passwordContext}</span>
      </nav>
      <LoginContext.Provider
        value={{
          accountContext: loginInfo.accountContext,
          passwordContext: loginInfo.passwordContext,
          loginDispatch: loginInfoDispatch,
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  )
}

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MenuPage />}>
          </Route>
          <Route path="/form" element={<FormPage />}>
          </Route>
        </Routes>
      </Layout>
    </Router >
  )
}

export default App