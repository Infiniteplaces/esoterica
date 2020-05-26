import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

const LibraryFeatured = ({
  posts,
  backgroundColor = null,
  textColor = "white",
  borderColor = "white",
  primary = false,
}) => {
  console.log(posts)
  const featured = primary ? posts[0].node : posts[posts.length - 1].node
  let style = {
    backgroundImage: `url(${featured.heroImage.fluid.src})`,
  }
  if (backgroundColor || !featured.heroImage) {
    style = {
      backgroundColor: backgroundColor,
    }
  }
  return (
    <div id="libraryFeatured" style={style} className={"text-" + textColor}>
      <div className="tag-container">
        {featured.tags
          ? featured.tags.map((i, idx) => {
              return (
                <div
                  key={idx}
                  className={"tag body-small border-" + borderColor}
                >
                  {i}
                </div>
              )
            })
          : ""}
      </div>
      <h1>{featured.title}</h1>
      <Link to={"/resources/library/" + featured.slug} className="underline">
        <h3>Read the Article</h3>
      </Link>
    </div>
  )
}

export default connect(state => ({}), null)(LibraryFeatured)
