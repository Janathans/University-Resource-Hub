import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResourceDetail from './pages/ResourceDetail'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
