import React, { useState } from 'react'
import MyAudioPlayer from '../MyAudioPlayer'
import { Link } from 'react-router-dom'
import './ActiveWord.css'

interface ActiveWordProps {
  starter: string,
  definitions: string[],
  synonyms: string[],
  mp3Url: string
}

export default function ActiveWord( { starter, definitions, synonyms, mp3Url }: ActiveWordProps ): React.ReactElement {
  const [isCurrActive, setIsCurrActive] = useState(false)

  return (
    <>
        {!isCurrActive ?
          <h3 onClick={()=> setIsCurrActive(!isCurrActive)} className='word-start-button'>{starter}</h3> :
          <>
          <h3 onClick={()=> setIsCurrActive(!isCurrActive)} className='word-start'>{starter}</h3>
          {definitions.length ? definitions.map((defined: string, i: number) => (
            <p onClick={()=> setIsCurrActive(!isCurrActive)} key={i + 1}>{i + 1} • {defined}</p>
            )) : null}
            {synonyms.length ?
              <p onClick={()=> setIsCurrActive(!isCurrActive)} className='synonyms'>Synonyms: {synonyms.map((synonym: string) => (
                <Link to={`/${synonym}`} key={synonym}>{synonym}</Link>
                ))}</p>
                : null}
                {mp3Url ?
                  <MyAudioPlayer mp3Url={mp3Url} />
                  : null}
          </>
        }
    </>
  )
}
