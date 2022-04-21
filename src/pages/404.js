import * as React from "react"
import Layout from "../components/Layout";

export default function PageNotFOund() {
  return (
      <Layout breadcrumbs={["Page Not Found"]}>
          <section className="post">
            <h2>404: Page not found</h2>
            <p>Sorry 😔 we couldn't find what you were looking for.</p>
          </section>
      </Layout>
  )
}