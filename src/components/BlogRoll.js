import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="blog-body">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article className={`blog-post-item ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
                      
                      <div className="post-meta">
                          <h4 className='post-title'>
                              <Link className="title" to={post.frontmatter.path}>
                                  {post.frontmatter.title}
                                </Link>
                            </h4>
                            <p className="post-date">
                                {post.frontmatter.date}
                            </p>
                        </div>
                        
                    <div>
                        <p className='post-excerpt'>{post.excerpt}</p>
                        <Link className="read-more-button" to={post.frontmatter.path}>Keep Reading →</Link>
                    </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)