import './app.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
