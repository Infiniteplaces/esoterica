import React from "react"
import { connect } from "react-redux"

import LibraryFourPost from "../../components/resources/libraryFourPost"
import LibraryThumbnails from "../../components/resources/libraryThumbnails"

const HomeFeaturedBlog = ({ featured, posts }) => {
  return (
    <div id="homeFeaturedBlog">
      <LibraryFourPost posts={featured} featured />
      <LibraryThumbnails posts={posts} />
    </div>
  )
}

export default connect(state => ({}), null)(HomeFeaturedBlog)
