import React from 'react'
import './Landing.css'

export default function Landing(): React.ReactElement {

  return (
    <div className='landing-container'>
      <h3>Welcome to Easy Dictionary</h3>
      <p>Thanks for coming to check out the easy to use dictionary.</p>
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
