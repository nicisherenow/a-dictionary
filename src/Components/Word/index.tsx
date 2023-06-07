import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import MyAudioPlayer from '../MyAudioPlayer'
import './Word.css'

export default function Word(): React.ReactElement {
  const { word } = useParams()

  const [definition, setDefinition] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('')
  const [synonyms, setSynonyms] = useState([])
  const [error, setError] = useState('')
  const [wordInfo, setWordInfo] = useState([])
  const [sample, setSample] = useState('')

  console.log(wordInfo)
  console.log(sample)

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res.json()

      if (data.message) {
        setError(data.message)
      } else {
        setError('')
        setDefinition(data[0].meanings[0].definitions[0].definition)
        setPartOfSpeech(data[0].meanings[0].partOfSpeech)
        setSynonyms(data[0].meanings[0].synonyms)
        setSample(data[0].phonetics[1].audio)
        setWordInfo(data[0])
      }
    })()

  }, [word])


  return (
    <>
      <h3>{word}</h3>
      {error ?
      <p>Error: {error}</p>
       :
        <>
          <p>Defintion: {definition}</p>
          <p>Part of speech: {partOfSpeech}</p>
          {synonyms.length ?
          <ul className='synonyms'>Synonyms: {synonyms.map((synonym => (
            <li><Link to={`/${synonym}`} key={synonym}>{synonym}</Link></li>
            )))}</ul>
          : null}
          {sample ?
          <MyAudioPlayer mp3Url={sample} />
          : null}
        </>
       }
    </>
  )
}