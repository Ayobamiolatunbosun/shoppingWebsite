import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  return (
    <div className='newsletter'>
      <p className="eyebrow">A NOTE FROM US</p>
      <h1>A little something in your inbox.</h1>
      <p>New finds, thoughtful edits, and the occasional good surprise.</p>
      {submitted ? <p className="newsletter-success" role="status">Thanks for signing up. Keep an eye on your inbox.</p> : (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email address" aria-label="Your email address" required />
          <button type="submit">Count me in <span aria-hidden="true">→</span></button>
        </form>
      )}
    </div>
  )
}

export default NewsLetter
