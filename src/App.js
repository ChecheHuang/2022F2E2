import './app.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Sample from './pages/Sample/Sample'
import Sample2 from './pages/Sample2/Sample2'
import Sample3 from './pages/Sample3/Sample3'
import Sample4 from './pages/Sample4/Sample4'
import Page2 from './pages/Page2/Page2'
import Page3 from './pages/Page3/Page3'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/sample" element={<Sample />} /> */}
          <Route exact path="/sample" element={<Sample />} />
          <Route exact path="/sample2" element={<Sample2 />} />
          <Route exact path="/sample3" element={<Sample3 />} />
          <Route exact path="/sample4" element={<Sample4 />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route exact path="/page3" element={<Page3 />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
