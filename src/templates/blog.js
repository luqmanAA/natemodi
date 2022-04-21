import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Link } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout breadcrumbs={["Blog"]}>
        <section className="posts">
            <Link className="back-button" to="../">← Back to blog</Link>
            <div className="single-post-container">
                <div className="single-post">
                    <h2 className="single-post-title">{frontmatter.title}</h2>
                    <p className="single-post-date">{frontmatter.date}</p>
                    <div
                    className="single-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
        </section>  
    </Layout>
    
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
