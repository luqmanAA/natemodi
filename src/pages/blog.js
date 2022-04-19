import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Blog() {
  return (
    <Layout breadcrumbs={["Blog"]}>
    <section className="posts">
      <ul>
        <li>
          <Link to="#">Sufficient Decentralization for Social Networks</Link>
          <time datetime="2022-01-11T00:00:00+00:00">01-11-2022</time>
        </li>
        <li>
          <Link to="#">Sufficient Decentralization for Social Networks</Link>
          <time datetime="2022-01-11T00:00:00+00:00">01-11-2022</time>
        </li>
        <li>
          <Link to="#">Sufficient Decentralization for Social Networks</Link>
          <time datetime="2022-01-11T00:00:00+00:00">01-11-2022</time>
        </li>
        <li>
          <Link to="#">Sufficient Decentralization for Social Networks</Link>
          <time datetime="2022-01-11T00:00:00+00:00">01-11-2022</time>
        </li>
      </ul>
    </section>  
    </Layout>
  );
}