import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import MyAudioPlayer from '../MyAudioPlayer'
import { findUsableMp3 } from '../../assets/functions'
import './Word.css'

export default function Word(): React.ReactElement {
  const { word } = useParams()

  const [definitions, setDefinitions] = useState([])
  const [definition, setDefinition] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('')
  const [synonyms, setSynonyms] = useState([])
  const [error, setError] = useState('')
  const [sample, setSample] = useState('')

  console.log(definitions)

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res.json()

      if (data.message) {
        setError(data.message)
      } else {
        let url = findUsableMp3(data[0].phonetics)
        setError('')
        setDefinition(data[0].meanings[0].definitions[0].definition)
        setPartOfSpeech(data[0].meanings[0].partOfSpeech)
        setSynonyms(data[0].meanings[0].synonyms)
        setDefinitions(data[0].meanings[0].definitions)
        setSample(url)
      }
    })()

  }, [word])


  return (
    <div className='word-container'>
      <h3 className='word-start'>{word?.toLowerCase()} • {partOfSpeech}</h3>
      {error ?
      <p>Error: {error}</p>
       :
        <>
          {definitions.length ? definitions.map((defined, i) => (
            <p>{i + 1} • {defined.definition}</p>

          ))
        : null}
          {synonyms.length ?
          <p className='synonyms'>Synonyms: {synonyms.map((synonym => (
            <Link to={`/${synonym}`} key={synonym}>{synonym}</Link>
            )))}</p>
          : null}
          {sample ?
          <MyAudioPlayer mp3Url={sample} />
          : null}
        </>
       }
       <div className="created-by">
        <div>Created by: </div>
        <a href='https://github.com/nicisherenow'>Github</a>
        <a href='https://www.linkedin.com/in/nicholas-talbot-5441a4242/'>LinkedIn</a>
      </div>
    </div>
  )
}
