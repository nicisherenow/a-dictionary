import './App.css'
import Nav from './Components/Nav'
import Word from './Components/Word'
import Landing from './Components/Landing'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/:word" element={<Word />}/>
        <Route path="/*" element={<Landing />} />
      </Routes>
    </>
  )
}
