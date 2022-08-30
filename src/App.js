import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FormPage from './routes/FormPage';
import MenuPage from './routes/MenuPage';

function Layout(props) {
  return (
    <>
      <nav>
        <Link to="/">點我連結到第一頁</Link>
        <Link to="/form" style={{ marginLeft: '20px' }}>
          點我連到第二頁
        </Link>
      </nav>
      {/* 內容體 */}
      {props.children}
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