import './App.css'
import Nav from './Components/Nav'
import Word from './Components/Word'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/:word" element={<Word />}/>
      </Routes>
    </>
  )
}
