import React from "react"
import Layout from "../components/Layout"
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render(){
    return (
      <Layout breadcrumbs={["Blog"]}>
      <section className="posts">

        <React.Fragment>
          <h2>Nathaniel Emodi's Blog</h2>
          <p>
            I put my thoughts in words weekly
          </p>
          <BlogRoll />
        </React.Fragment>

      </section>  
      </Layout>
    );
  }
}
