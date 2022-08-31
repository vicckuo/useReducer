import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FormPage from './routes/FormPage';
import MenuPage from './routes/MenuPage';

import { useState } from 'react';
import { LoginContext } from './context/LoginContext'

function Layout(props) {
  const [account, setAccount] = useState('');

  return (
    <>
      <nav>
        <Link to="/">點我連結到第一頁</Link>
        <Link to="/form" style={{ marginLeft: '20px' }}>
          點我連到第二頁
        </Link>
        <span>目前登入帳號：{account}</span>
      </nav>
      {/* 內容體 */}
      <LoginContext.Provider
        value={{
          accountContext: account,
          setAccountContext: setAccount,
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