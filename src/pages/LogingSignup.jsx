import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

const LogingSigup = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="loginsignup">
      <div className="loginsignup-aside">
        <p className="eyebrow">A LITTLE MORE SHOPPER</p>
        <h1>Good style.<br/><span>Good to have you.</span></h1>
        <p>Sign in for a smoother way to find the things you love.</p>
        <Link to="/">← Back to the collection</Link>
      </div>
      <div className="loginsignup-container">
        {submitted ? (
          <div className="account-success" role="status">
            <span aria-hidden="true">✓</span><h2>You’re on the list.</h2>
            <p>This storefront is a demo, so account sign-in isn’t connected yet.</p>
            <button type="button" className="button button-primary" onClick={() => { setSubmitted(false); setIsLogin(false) }}>Back to sign up</button>
          </div>
        ) : (
          <>
            <p className="eyebrow">{isLogin ? 'WELCOME BACK' : 'JOIN THE GOOD THINGS'}</p>
            <h2>{isLogin ? 'Welcome back.' : 'Create your account.'}</h2>
            <p className="account-intro">{isLogin ? 'Your next favorite is just around the corner.' : 'Save your favorites and make every visit yours.'}</p>
            <form onSubmit={handleSubmit}>
              <div className="loginsignup-fields">
                {!isLogin && <label>Your name<input name="name" type="text" placeholder="Alex Morgan" autoComplete="name" required /></label>}
                <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
                <label>Password<input name="password" type="password" placeholder="At least 8 characters" minLength="8" autoComplete={isLogin ? 'current-password' : 'new-password'} required /></label>
              </div>
              {!isLogin && <label className="loginsignup-agree"><input type="checkbox" required /><span>I agree to the terms and privacy policy.</span></label>}
              <button type="submit" className="button button-primary account-submit">{isLogin ? 'Sign in' : 'Create account'} <span>→</span></button>
            </form>
            <p className="loginsignup-login">
              {isLogin ? 'New around here?' : 'Already have an account?'}
              <button type="button" onClick={() => { setIsLogin(!isLogin); setSubmitted(false) }}>{isLogin ? 'Create account' : 'Sign in'}</button>
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default LogingSigup
