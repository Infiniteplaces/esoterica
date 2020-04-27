import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ article, path }) => (
  <div>
    <h3>
      <Link to={`/resources/${path}/${article.slug}`}>{article.title}</Link>
    </h3>
  </div>
)
