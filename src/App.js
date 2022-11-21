import './app.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Sample from './pages/Sample/Sample'
import Page2 from './pages/Page2/Page2'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sample" element={<Sample />} />
          <Route exact path="/page2" element={<Page2 />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
