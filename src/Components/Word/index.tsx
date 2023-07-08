import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findUsableMp3, WordObj, WordInfo } from '../../assets/functions'
import ActiveWord from '../ActiveWord'
import './Word.css'

export default function Word(): React.ReactElement {
  const { word } = useParams()

  const [error, setError] = useState('')
  const [wordInfo, setWordInfo] = useState<WordInfo[]>([])
  const [wordObj, setWordObj] = useState<WordObj[]>([])

  useEffect(() => {
    setWordObj(
      wordInfo.flatMap(info => {
      return info.meanings.flatMap((meaning) => {
        return {
        starter: `${word?.toLowerCase()} • ${meaning.partOfSpeech} ${info.phonetic ? ' • ' + info.phonetic : ''}`,
        definitions: meaning.definitions.map(define => define.definition),
        synonyms: meaning.synonyms.map(synonym => synonym),
        mp3Url: findUsableMp3(info.phonetics),
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
        setError('')
        setWordInfo(data)
      }
    })()

  }, [word])


  return (
    <div className='word-container'>
      {error ?
      <p className='error-layout'>Searched for {word?.toLowerCase()}: {error}</p>
      :
      <>
        {wordObj.length ? wordObj.map((currWord, i) => (
          <ActiveWord key={`${i + 1}${word}`}
          starter={currWord.starter}
          definitions={currWord.definitions}
          synonyms={currWord.synonyms}
          mp3Url={currWord.mp3Url}
          />
        )) : null}
      </>
       }
       <div className="created-by">
        <div>Created by: </div>
        <span>Nicholas Talbot</span>
        <span>Please check out my links!</span>
        <a href='https://github.com/nicisherenow' target="_blank" rel="noreferrer">Github</a>
        <a href='https://www.linkedin.com/in/nicholas-talbot-5441a4242/' target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}
