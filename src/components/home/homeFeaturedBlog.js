import React from "react"
import { connect } from "react-redux"

import LibraryFourPost from "../../components/resources/libraryFourPost"

const HomeFeaturedBlog = ({ featured, posts }) => {
  console.log(featured)
  console.log(posts)
  return (
    <div id="homeFeaturedBlog">
      <LibraryFourPost posts={featured} />
    </div>
  )
}

export default connect(state => ({}), null)(HomeFeaturedBlog)
