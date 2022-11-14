import './app.scss'
import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Link to="page1">app</Link>} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2:id" element={<Page2 />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
