import React from 'react'

const Footer = () => {
  return (
     <footer className="page-footer #5c6bc0 indigo lighten-1">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
          </div>
        </footer>
  )
}

export default Footer
