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
          <p>I build and invest in technology startups.</p>
          <p>
            I was a Director at <Link to="#">Coinbase</Link> where I built product and engineering teams 
            for four years. Before that, I founded <Link to="#">SoundFocus</Link> to help people with hearing loss, 
            and worked at <Link to="#">Microsoft</Link>. I grew up in India and studied at Carnegie Mellon University.
          </p>
          <p>You can reach me on <Link to="mailto:nat@searanchla.bs">Email</Link> or <Link to="http://www.twitter.com/natemodi" target={"_blank"}>Twitter</Link>.</p>
        </section>
      </main>
    </>
  )
}