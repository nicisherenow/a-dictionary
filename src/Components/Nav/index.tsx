import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nav(): React.ReactElement {
  const [word, setWord] = useState('')
  const navigate = useNavigate()

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    navigate(`/${word}`)
    setWord('')
  }

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <input type='text' placeholder="Word you'd like defined..." onChange={handleWordChange} value={word} />
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}
