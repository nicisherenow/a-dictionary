import React from 'react'
import AudioPlayer from 'react-audio-player'
import './MyAudioPlayer.css'

interface MyAudioPlayerProps {
  mp3Url: string
}

export default function MyAudioPlayer( { mp3Url }: MyAudioPlayerProps): React.ReactElement {

  return (
    <>
      <AudioPlayer src={mp3Url} controls />
    </>
  )
}
