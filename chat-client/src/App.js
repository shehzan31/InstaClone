import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/login"
import Chat from "./pages/chat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App