import './app.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Sample from './pages/Sample/Sample'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/drag" element={<Sample />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
