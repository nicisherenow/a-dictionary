import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Nav(): React.ReactElement {
  const [word, setWord] = useState('')
  const history = useHistory()
  console.log(word)

  const handleWordChange = (e): void => {
    setWord(e.target.value)
  }

  const handleOnSubmit = (e): void => {
    e.preventDefault()

    setWord('')
  }

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <input type='text' placeholder="Word you'd like defined..." onChange={handleWordChange} value={word}></input>
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}
