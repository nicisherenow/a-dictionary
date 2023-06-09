import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import MyAudioPlayer from '../MyAudioPlayer'
import { findUsableMp3, WordObj, WordInfo, Definitions } from '../../assets/functions'
import './Word.css'

export default function Word(): React.ReactElement {
  const { word } = useParams()

  const [definitions, setDefinitions] = useState<Definitions[]>([])
  const [partOfSpeech, setPartOfSpeech] = useState('')
  const [synonyms, setSynonyms] = useState([])
  const [error, setError] = useState('')
  const [sample, setSample] = useState('')
  const [wordInfo, setWordInfo] = useState<WordInfo[]>([])
  const [wordObj, setWordObj] = useState<WordObj[]>([])

  console.log(wordInfo)
  console.log(wordObj)

  useEffect(() => {
    setWordObj(
      wordInfo.flatMap(info => {
      return info.meanings.flatMap((meaning) => {
        return {
        starter: `${word} • ${meaning.partOfSpeech}`,
        definitions: meaning.definitions.map(define => define.definition),
        synonyms: meaning.synonyms.map(synonym => synonym),
        mp3Url: findUsableMp3(info.phonetics)
        }
      })
    })
    )
  }, [wordInfo])

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res.json()

      if (data.message) {
        setError(data.message)
      } else {
        let url = findUsableMp3(data[0].phonetics)
        setError('')
        setPartOfSpeech(data[0].meanings[0].partOfSpeech)
        setSynonyms(data[0].meanings[0].synonyms)
        setDefinitions(data[0].meanings[0].definitions)
        setWordInfo(data)
        setSample(url)
      }
    })()

  }, [word])


  return (
    <div className='word-container'>
      {error ?
      <p className='error-layout'>Searched for {word?.toLowerCase()}: {error}</p>
      :
      <>
      <h3 className='word-start'>{word?.toLowerCase()} • {partOfSpeech}</h3>
          {definitions.length ? definitions.map((defined, i) => (
            <p key={i + 1}>{i + 1} • {defined?.definition}</p>
          )) : null}
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
