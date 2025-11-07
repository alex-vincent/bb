import React, { useState } from 'react'
import './App.css'

// Image URLs from Figma (valid for 7 days)
const imgFrame14 = "https://www.figma.com/api/mcp/asset/070d8f2d-526a-4610-87a5-6ab40694eb1b"
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/d0a3a4d3-4f20-4cf0-8b99-08e526893688"
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/8605f90a-8dd0-4463-a5a5-94f54ab57e65"
const imgLine1 = "https://www.figma.com/api/mcp/asset/c66d5b51-6df6-4751-bbf7-1187acdcf258"
const imgImage3 = "https://www.figma.com/api/mcp/asset/0a8aedb4-a51a-4fa1-a38f-fe482abf2dc1"
const imgImage4 = "https://www.figma.com/api/mcp/asset/54dffa1f-135c-43a2-83cf-759158400401"
const imgImage5 = "https://www.figma.com/api/mcp/asset/96a00b51-d665-45da-8e35-f85ad9599d66"
const imgImage6 = "https://www.figma.com/api/mcp/asset/fddb04ec-f686-4037-acac-5ff8a20e10ed"
const imgImage7 = "https://www.figma.com/api/mcp/asset/196572a3-eebd-487f-afcf-5ca363cb4f76"

export default function App() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-background">
            <img src={imgFrame14} alt="" className="hero-bg-image" />
          </div>
          <div className="hero-color-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-mask" style={{ maskImage: `url('${imgRectangle1}')` }}></div>
          </div>

          <div className="hero-text-container">
            <h1 className="hero-title">Rediscover The Extraordinary</h1>
            <h2 className="hero-subtitle">And Rediscover The Extraordinary</h2>
            <p className="hero-description">
              Bed Bath & Beyond Canada returns in 2026, we can't wait to be back in your home with new styles made for every stage of your life.
            </p>
          </div>

          <div className="signup-box">
            <div className="signup-header">
              <h3 className="signup-title">Don't Miss a Thing</h3>
              <p className="signup-subtitle">Enter your email to gain early access.</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>

            <div className="consent-container">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="consent-checkbox"
              />
              <label htmlFor="consent" className="consent-label">
                I consent to receive email notifications from Bed Bath and Beyond.{' '}
                By submitting this form you agree to our{' '}
                <a href="#" className="consent-link">terms</a> and{' '}
                <a href="#" className="consent-link">privacy policy</a>.
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-contact">
              <p className="footer-contact-title">
                Looking for information or to connect with us?
              </p>
              <a href="mailto:info@bedbathandbeyond.ca" className="footer-email-link">
                Email Us
              </a>
            </div>

            <div className="footer-social">
              <p className="footer-social-title">
                Follow Bed Bath & Beyond To Get Inspired
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <div className="social-icon-wrapper">
                    <img src={imgImage3} alt="Facebook" />
                  </div>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <div className="social-icon-wrapper">
                    <img src={imgImage4} alt="Instagram" />
                  </div>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <div className="social-icon-wrapper">
                    <img src={imgImage5} alt="Twitter" />
                  </div>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <div className="social-icon-wrapper">
                    <img src={imgImage6} alt="YouTube" />
                  </div>
                </a>
                <a href="#" className="social-icon" aria-label="Pinterest">
                  <div className="social-icon-wrapper">
                    <img src={imgImage7} alt="Pinterest" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider">
              <img src={imgLine1} alt="" />
            </div>
            <div className="footer-copyright-container">
              <p className="footer-copyright">
                © Copyright 2025, BedBath&Beyond.ca 250 Bowie ave Unit 1, ON M6E 4Y2 CA
              </p>
              <div className="footer-logo-container">
                <div className="footer-logo-mask" style={{ maskImage: `url('${imgRectangle2}')` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

