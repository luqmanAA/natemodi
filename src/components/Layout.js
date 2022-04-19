import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/style.css"

export default function Layout({ children, breadcrumbs }) {
    return (
        <>
            <Helmet>
            <title>
                Nathaniel Emodi
                {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``}
            </title>
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
                {children}
            </main>
        </>
    )
}