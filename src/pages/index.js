import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/style.css"
import profileImg from '../images/nathaniel.png'

export default function Home() {
  return (
    <>
      <Helmet>
          <title>Nathaniel Emodi</title>
      </Helmet>
      <main>
        <header>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/reading-list">Reading List</Link>
            </li>
            <li>
              <Link to="/investing">Investing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        </header>
        <section className="post">
          <h2>Nathaniel Emodi</h2>
          <img src= {profileImg} alt="profile"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor ultrices dignissim. Nunc 
          laoreet ipsum ac nisi maximus, tristique volutpat velit pulvinar. Ut tellus est, tristique non 
          efficitur non, viverra ut tortor. Suspendisse vitae euismod turpis. Class aptent taciti sociosqu ad 
          litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac nisi mattis, imperdiet lorem 
          ultrices, pretium lectus.
          </p>
          <p>You can reach me on <Link to="mailto:nat@searanchla.bs">Email</Link> or <Link to="http://www.twitter.com/natemodi" target={"_blank"}>Twitter</Link>.</p>
        </section>
      </main>
    </>
  )
}