import React from 'react'
import './Landing.css'

export default function Landing(): React.ReactElement {

  return (
    <div className='landing-container'>
      <h3>Welcome to Easy Dictionary</h3>
      <p>Thanks for coming to check out the easy to use dictionary.</p>
      <div className="created-by">
        <div>Created by: </div>
        <a href='https://github.com/nicisherenow'>Github</a>
        <a href='https://www.linkedin.com/in/nicholas-talbot-5441a4242/'>LinkedIn</a>
      </div>
    </div>
  )
}
