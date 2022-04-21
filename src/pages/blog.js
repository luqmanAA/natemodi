import React from "react"
import Layout from "../components/Layout"
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render(){
    return (
      <Layout breadcrumbs={["Blog"]}>
      <section className="posts">
        <React.Fragment>
          <h1>Latest Posts</h1>
            <div className="content">
              <BlogRoll />
            </div>
        </React.Fragment>
      </section>  
      </Layout>
    );
  }
}
