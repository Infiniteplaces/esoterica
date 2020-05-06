import React from "react"
import { connect } from "react-redux"

import LibraryFourPost from "../../components/resources/libraryFourPost"

const HomeFeaturedBlog = ({ featured, posts }) => {
  return (
    <div id="homeFeaturedBlog">
      <LibraryFourPost posts={featured} featured />
    </div>
  )
}

export default connect(state => ({}), null)(HomeFeaturedBlog)
