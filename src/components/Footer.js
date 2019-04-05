import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Ankado KLG. All rights reserved. Designed by
          <a href="https://skwebarchitecture.com/"> SK Web Architecture</a>.
        </span>
      </div>
    </footer>
  </div>
)
