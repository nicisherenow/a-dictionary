import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-audio-player'
import './MyAudioPlayer.css'

interface MyAudioPlayerProps {
  mp3Url: string
}

export default function MyAudioPlayer( { mp3Url }: MyAudioPlayerProps): React.ReactElement {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const styled = {

    transform: `scale(${width <= 1000 ? width * .001 : 1})`
  }

  return (
    <>
      <AudioPlayer className='audio' style={styled} src={mp3Url} controls />
    </>
  )
}
